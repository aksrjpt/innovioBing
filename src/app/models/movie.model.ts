export interface MovieImage {
	url: string;
	title: string;
}

export interface Movie {
	id: string;
	slug: string;
	title: string;
	popularity: number;
	image: MovieImage;
	genres: string[];
	budget: number;
	runtime: string;
	released: string;
}

export interface VisitMovie extends Pick<Movie, "id" | "slug" | "title"> {}
