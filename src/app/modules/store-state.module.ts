import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { movieFeature } from "../states/movie/movie.state";
import { movieReducer } from "../states/movie/movie.reducer";
import { MovieEffects } from "../states/movie/movie.effects";

@NgModule({
	imports: [
		StoreModule.forRoot({}),
		StoreModule.forFeature(movieFeature, movieReducer),

		EffectsModule.forRoot([]),
		EffectsModule.forFeature([MovieEffects])
	],
})
export class StoreStateModule {}
