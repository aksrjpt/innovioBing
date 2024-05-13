import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "./movie.model";

@Injectable({
	providedIn: "root"
})
export class MovieMockClient {

	private readonly dataURL = "assets/movie.mock-data.json";

	constructor(
		private http: HttpClient
	) {
	}

	getAll$(): Observable<Movie[]> {
		return this.http.get<Movie[]>(this.dataURL);
	}

}
