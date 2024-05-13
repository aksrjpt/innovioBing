import { Injectable, effect, signal } from "@angular/core";
import { Movie } from "../models/movie.model";

@Injectable({
	providedIn: "root",
})
export class RecentlyVisitedService {
	visitedMovies =
		window.localStorage.getItem("recently-visited-movies") ?? null;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	recentlyVisitedSignal: any = signal(this.visitedMovies);

	constructor() {
		effect(() => {
			window.localStorage.setItem(
				"recently-visited-movies",
				this.recentlyVisitedSignal()
			);
		});
	}

	updateRecentlyVisitedMovies(movieName: Movie | undefined): void {
		if (movieName) {
			const recentList = JSON.parse(this.recentlyVisitedSignal());

			if (recentList && recentList.length > 0) {
				const allVisitedMovies = [...recentList];

				const foundIndex = allVisitedMovies.findIndex(
					(x: Movie) => x.id === movieName.id
				);

				console.log(foundIndex, movieName.title);
				if (foundIndex !== -1) {
					allVisitedMovies.splice(foundIndex, 1);
				}
				if (allVisitedMovies.length >= 5) {
					allVisitedMovies.pop();
				}
				allVisitedMovies.unshift(movieName);

				this.recentlyVisitedSignal.update(() =>
					JSON.stringify(allVisitedMovies)
				);
			} else {
				this.recentlyVisitedSignal.update(() => JSON.stringify([movieName]));
			}
		}
	}
}
