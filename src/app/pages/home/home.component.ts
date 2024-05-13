import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";

import { MovieMockClient, Movie } from "../../shared";

const NAME_KEBAB = "app-home";

@Component({
	templateUrl: "./home.component.html",
	styleUrls: ["./home.scss"],
	host: { class: NAME_KEBAB },
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

	movieData$: Observable<Movie[]>;

	constructor(
		movieMockClient: MovieMockClient
	) {
		this.movieData$ = movieMockClient.getAll$();
	}

}
