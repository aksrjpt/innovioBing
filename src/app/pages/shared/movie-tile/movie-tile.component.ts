import { Component, Input, inject } from "@angular/core";
import { Router } from "@angular/router";
import { Movie } from "src/app/shared";

@Component({
	selector: "app-movie-tile",
	templateUrl: "./movie-tile.component.html",
})
export class MovieTileComponent {
	@Input() movies: Movie[] = [];
	private router = inject(Router);

	selectedMovie(id: string): void {
		const selectedMovie = this.movies.find((movie: Movie) => movie.id === id);

		if (selectedMovie) {
			this.router.navigate([`/movie/${selectedMovie.slug}`]);
		}
	}
}
