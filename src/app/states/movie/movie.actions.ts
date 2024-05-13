import { createAction, props } from "@ngrx/store";

import { Movie } from "../../models/movie.model";

export enum MovieActionTypes {
	getAllMovies = "[Movie List] Get all Movies",
	updateMovies = "[Movie List] Update movies",
}

export const loadMoviesAction = createAction(MovieActionTypes.getAllMovies);

export const updateMoviesAction = createAction(
	MovieActionTypes.updateMovies,
	props<{ movies: Movie[] }>()
);
