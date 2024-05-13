import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { cloneDeep } from "lodash";
import { Subscription } from "rxjs";
import { RecentlyVisitedService } from "src/app/services/recently-visited.service";
import { Movie } from "src/app/shared";
import { movies } from "src/app/states/movie/movie.state";
const MAX_DISPLAY_MOVIE_COUNT = 10;
@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit, OnDestroy {
	topPopularMovies: Movie[] = [];
	recentlyVisitedService: RecentlyVisitedService = inject(
		RecentlyVisitedService
	);
	recentlyVisitedMovies = JSON.parse(
		this.recentlyVisitedService.recentlyVisitedSignal()
	);

	private pageSubscriptions = new Subscription();
	private readonly store = inject(Store);

	ngOnInit(): void {
		this.getAllMoviesMovies();
	}

	ngOnDestroy(): void {
		this.pageSubscriptions.unsubscribe();
	}

	private getAllMoviesMovies(): void {
		this.pageSubscriptions.add(
			this.store.select(movies).subscribe((allMovies: Movie[]) => {
				this.topPopularMovies = this.getTopTenPopular(allMovies);
			})
		);
	}

	private getTopTenPopular(allMovies: Movie[]): Movie[] {
		const sortedMovies = cloneDeep(allMovies).sort(
			(a, b) => b.popularity - a.popularity
		);
		return sortedMovies.slice(0, MAX_DISPLAY_MOVIE_COUNT);
	}
}
