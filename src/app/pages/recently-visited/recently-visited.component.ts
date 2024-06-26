import { Component, inject } from "@angular/core";
import { RecentlyVisitedService } from "src/app/services/recently-visited.service";

@Component({
	selector: "app-recently-visited",
	templateUrl: "./recently-visited.component.html",
})
export class RecentlyVisitedComponent {
	recentlyVisitedService: RecentlyVisitedService = inject(
		RecentlyVisitedService
	);
	recentlyVisitedMovies = JSON.parse(
		this.recentlyVisitedService.recentlyVisitedSignal()
	);
}
