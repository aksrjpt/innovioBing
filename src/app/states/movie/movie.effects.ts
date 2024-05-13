import { Injectable } from "@angular/core";
import { Action, Store } from "@ngrx/store";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { Observable, from, map, of, switchMap } from "rxjs";
import { catchError } from "rxjs/operators";

import { MovieService } from "../../services/movie.service";

import { MovieActionTypes, updateMoviesAction } from "./movie.actions";
import { Movie } from "../../models/movie.model";

@Injectable({ providedIn: "root" })
export class MovieEffects {
	loadMovies$ = createEffect(
		() =>
			this.actions.pipe(
				ofType(MovieActionTypes.getAllMovies),
				switchMap(() =>
					from(this.movieService.getAllMovies()).pipe(
						map((movies: Movie[]) => {
							this.store.dispatch(updateMoviesAction({ movies }));
						}),
						catchError((err: Error) => {
							this.store.dispatch(updateMoviesAction({ movies: [] }));
							return this.handleError(err.message);
						})
					)
				)
			),
		{ dispatch: false }
	);

	constructor(
		private actions: Actions,
		private store: Store,
		private movieService: MovieService
	) {}

	private handleError(message: string): Observable<Action> {
		console.error(message);
		return of();
	}
}
