import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";

import { AppPagesRoutingModule } from "./pages-routing.module";
import { MoviesTabComponent } from "./movies-tab/movies-tab.component";

import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MovieViewComponent } from "./movie-view/movie-view.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { MultiSelectModule } from "primeng/multiselect";
import { MovieTileComponent } from "./shared/movie-tile/movie-tile.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { InputGroupModule } from "primeng/inputgroup";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { RecentlyVisitedComponent } from "./recently-visited/recently-visited.component";

const COMPONENTS = [
	HomeComponent,
	MoviesTabComponent,
	MovieViewComponent,
	DashboardComponent,
	MovieTileComponent,
	RecentlyVisitedComponent,
];

@NgModule({
	imports: [
		CommonModule,
		AppPagesRoutingModule,
		FormsModule,
		MatCardModule,
		MatTooltipModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatButtonModule,
		MatSelectModule,
		MatPaginatorModule,
		CardModule,
		ButtonModule,
		MultiSelectModule,
		MatToolbarModule,
		MatSidenavModule,
		InputGroupModule,
		InputGroupAddonModule,
	],
	declarations: [...COMPONENTS],
	exports: [...COMPONENTS],
})
export class AppPagesModule {}
