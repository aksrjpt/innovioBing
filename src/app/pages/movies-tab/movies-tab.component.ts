/* eslint-disable no-mixed-spaces-and-tabs */
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subject, Subscription, debounceTime } from "rxjs";
import { Movie } from "src/app/models/movie.model";
import { movies } from "src/app/states/movie/movie.state";
import { cloneDeep } from "lodash";
import * as _ from "lodash";
import CONSTANTS from "src/app/util/constants";

@Component({
	selector: "app-movies-tab",
	templateUrl: "./movies-tab.component.html",
	styleUrl: "./movies-tab.component.scss",
})
export class MoviesTabComponent implements OnInit, OnDestroy {
	selectedGenre: string[] = [];
	generDropdownOptions: string[] = [];
	filteredMovieList: Movie[] = [];
	searchFilter = "";
	private allMovies: Movie[] = [];
	private pageSubscriptions = new Subscription();
	private searchTermChanged$ = new Subject<string>();

	constructor(
		private readonly store: Store,
		private router: Router,
		private route: ActivatedRoute
	) {
		this.searchFilter =
			this.route.snapshot.queryParamMap.get("searchFilter") || "";
		this.selectedGenre =
			this.route.snapshot.queryParamMap.getAll("genre") || [];
	}

	ngOnInit(): void {
		this.subscribeMovies();
		this.subscribeSearchFilterChanged();
	}

	onGenreChanged(): void {
		this.filteredMovieList = [];
		this.filterGenericList(this.allMovies);
		if (this.searchFilter.length > 0) {
			this.filterSearchList(this.filteredMovieList);
		}
	}

	onFilterMoviesList(value: string): void {
		this.filteredMovieList = [];
		this.searchFilter = value;
		this.filterSearchList(this.allMovies);
		this.generateGenerDropdownList(this.filteredMovieList);
		if (this.selectedGenre.length > 0) {
			this.filterGenericList(this.filteredMovieList);
		}
	}

	filterSearchList(movieList: Movie[]): void {
		this.filteredMovieList =
			this.searchFilter.length > 0
				? movieList.filter((movie: Movie) => {
						const movieName = movie.title.toLowerCase();
						return movieName.includes(this.searchFilter.toLowerCase());
				  })
				: movieList;
		this.setFilterURL(this.selectedGenre, this.searchFilter);
	}

	filterGenericList(movieList: Movie[]): void {
		this.filteredMovieList =
			this.selectedGenre.length > 0
				? movieList.filter((movie: Movie) =>
						this.selectedGenre.some((genre: string) =>
							movie.genres.includes(genre)
						)
				  )
				: movieList;
		this.setFilterURL(this.selectedGenre, this.searchFilter);
	}

	ngOnDestroy(): void {
		this.pageSubscriptions.unsubscribe();
	}

	onInputChanged(): void {
		this.searchTermChanged$.next(this.searchFilter || "");
	}

	onInputResetClicked(): void {
		this.searchTermChanged$.next("");
	}

	private subscribeSearchFilterChanged(): void {
		this.pageSubscriptions.add(
			this.searchTermChanged$
				.pipe(debounceTime(CONSTANTS.DEBOUNCE_SEARCH_FILTER_TIME))
				.subscribe((input: string) => {
					this.onFilterMoviesList(input);
				})
		);
	}

	private setFilterURL(genres: string[], searchFilter: string): void {
		this.router.navigate(["/all-movies"], {
			queryParams: {
				searchFilter: searchFilter || undefined,
				genre: genres,
			},
		});
	}

	private subscribeMovies(): void {
		this.pageSubscriptions.add(
			this.store.select(movies).subscribe((allMovies: Movie[]) => {
				this.allMovies = cloneDeep(allMovies);
				this.filteredMovieList = cloneDeep(allMovies);
				this.generateGenerDropdownList(this.allMovies);

				if (this.searchFilter.length > 0 || this.selectedGenre.length > 0) {
					this.onGenreChanged();
				}
			})
		);
	}

	private generateGenerDropdownList(movieList: Movie[]): void {
		const allGenres = movieList.flatMap((movie: Movie) => movie.genres);
		this.generDropdownOptions = _.uniq(allGenres);
	}
}
