/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action } from "@ngrx/store";

import { MovieState, initialMovieState } from "./movie.state";
import { MovieActionTypes } from "./movie.actions";

interface MovieReducer {
	[key: string]: (state: MovieState, payload: any) => MovieState;
}

const actionReducers: MovieReducer = {};
const updateMovies = (state: MovieState, { movies }: any): MovieState => ({
	...state,
	movies,
});

actionReducers[MovieActionTypes.updateMovies] = updateMovies;

export function movieReducer(
	state = initialMovieState,
	action?: Action
): MovieState {
	if (!action) {
		return state;
	}
	const reducerFunction = actionReducers[action.type];
	return reducerFunction ? reducerFunction(state, action) : state;
}
