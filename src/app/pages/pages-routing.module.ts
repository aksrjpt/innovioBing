import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MoviesTabComponent } from "./movies-tab/movies-tab.component";
import { MovieViewComponent } from "./movie-view/movie-view.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const ROUTES: Routes = [
	{ path: "", component: DashboardComponent },
	{ path: "all-movies", component: MoviesTabComponent },
	{ path: "movie/:slug", component: MovieViewComponent },
	{ path: "**", redirectTo: "" },
];

@NgModule({
	imports: [
		RouterModule.forRoot(ROUTES, {
			// enableTracing: true
		}),
	],
	exports: [RouterModule],
})
export class AppPagesRoutingModule {}
