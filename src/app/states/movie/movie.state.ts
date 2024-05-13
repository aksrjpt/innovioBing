import { createFeatureSelector, createSelector } from "@ngrx/store";

import { Movie } from "../../models/movie.model";

export const movieFeature = "movie";

export interface MovieState {
	movies: Movie[];
	selectedMovie: Movie | undefined;
}

export const initialMovieState: MovieState = {
	movies: [],
	selectedMovie: undefined,
};

export const selectMovie = createFeatureSelector<MovieState>(movieFeature);

export const movies = createSelector(
	selectMovie,
	(state: MovieState) => state.movies
);

export const selectedMovie = createSelector(
	selectMovie,
	(state: MovieState) => state.selectedMovie
);
