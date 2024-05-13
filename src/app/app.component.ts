import { Component } from "@angular/core";
import { loadMoviesAction } from "./states/movie/movie.actions";
import { Store } from "@ngrx/store";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	constructor(private readonly store: Store) {
		this.store.dispatch(loadMoviesAction());
	}
}
