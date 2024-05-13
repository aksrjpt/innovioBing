import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "../models/movie.model";
import CONSTANTS from "../util/constants";

// const STORAGE_BUFFER = 5;

@Injectable({ providedIn: "root" })
export class MovieService {
	private readonly apiURL = CONSTANTS.API_URL;

	constructor(private http: HttpClient) {}

	getAllMovies(): Observable<Movie[]> {
		return this.http.get<Movie[]>(this.apiURL);
	}
}
