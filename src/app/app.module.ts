import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AppPagesModule } from "./pages/pages.module";
import { StoreStateModule } from "./modules/store-state.module";

import { provideAnimations } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
	declarations: [AppComponent],
	imports: [
		CommonModule,
		HttpClientModule,
		RouterModule,
		BrowserModule,
		AppPagesModule,
		StoreStateModule,
		MatToolbarModule,
		MatSidenavModule,
		MatIconModule,
	],
	providers: [provideAnimations()],
	bootstrap: [AppComponent],
})
export class AppModule {}
