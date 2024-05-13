import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription, combineLatest } from "rxjs";
import { Currency } from "src/app/models/currency.model";
import { Movie } from "src/app/models/movie.model";
import { RecentlyVisitedService } from "src/app/services/recently-visited.service";

import { movies } from "src/app/states/movie/movie.state";

@Component({
	selector: "app-movie-view",
	templateUrl: "./movie-view.component.html",
	styleUrl: "./movie-view.component.scss",
})
export class MovieViewComponent implements OnInit, OnDestroy {
	movie: Movie | undefined = undefined;
	selectedCurrency = Currency.EURO;
	recentlyVisited: RecentlyVisitedService = inject(RecentlyVisitedService);
	private pageSubscriptions = new Subscription();

	constructor(private readonly store: Store, private route: ActivatedRoute) {}

	ngOnInit(): void {
		const movies$ = this.store.select(movies);
		const routeParams$ = this.route.paramMap;

		this.pageSubscriptions.add(
			combineLatest([movies$, routeParams$]).subscribe(
				([allMovies, params]) => {
					const movieSlug = params.get("slug") || "";
					this.movie = allMovies.find(
						(movie: Movie) => movie.slug === movieSlug
					);
					this.recentlyVisited.updateRecentlyVisitedMovies(this.movie);
				}
			)
		);
	}

	ngOnDestroy(): void {
		this.pageSubscriptions.unsubscribe();
	}
}
