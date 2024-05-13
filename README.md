# River Tech FE Interview

## Instructions

### Requirements

Create a mini movie website which contains;

* Do not use Angular's `async` pipe
* Home page
  	* List top 10 popular movies
* Side menu
  	* Links to `home` and `movies`
* Movies page
  	* List of all movies
  	* Search
    	* When the user types inside the search field, the movies list should update in real time with the results
    	* There should be a 500ms delay between the user typing and updating of results
    	* The URL should contain the `search term` as a query param
    * Drop down filter by genre
      	* Dropdown should be a multi-select, user must be able to select multiple genres
      	* User should have an option to clear all selected genres
      	* Clicking an already selected genre deselects it
      	* When selecting/deselecting a genre from the list, it should be reflected inside the URL
      	* Genre list should be updated depending on the searched results only
    * Search and genres filtering should work in conjunction e.g. `http://localhost:4200/movies?searchTerm=dragon&genre=Adventure`
        * Refreshing should keep the user's filter / search
        * Clearing the search should not clear the movie genre filter and vice versa
* Movie page
  	* Contains the movie poster and all the movie details
		* `Title`
		* `Genres`
		* `Popularity` rounded to 2 decimal places
		* `Budget` Currency set to Euro
  	* Use the `Movie.slug` for the `URL` param
* Last Visited Movies
  	* At the bottom for all pages, have a section called `Last Visited`
  	* Movie is considered as `Last Visited` when the user has navigated to the Movie Page
  	* Only Show the 5 last recently visited movies
  	* Should not contain duplicate movies
  	* Should be ordered by last visited first
  	* Should be persisted even after the user refreshes the browser
* Linting
  * Project should pass all lint rules

### Technical Details

* The solution should be built using Angular, SCSS and TypeScript.
* Use Redux; The scaffolding provided already has `ngxs` installed, you may use other libraries if you want.
* Use the data provided inside the scaffolding `movie.mock-data.json` (There should be no alterations to the data provided)
* You may use any libraries or plug-ins you wish to fulfill the requirements.

### Rating

* You may create the solution however you want, these are key things we will look for;
  * All requirements are met
  * Best practices
  * Code structure, readability and reusability
  * Error handling
  * Performance considerations
  * RxJS operators usage
  * Redux State
  * Modelling data with TypeScript
  * Polished Design
  * SCSS usage

## Development

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Lint

Run `npm run lint` to lint the project. This will lint both `ts` and `scss` files.

## Development

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Lint

Run `npm run lint` to lint the project. This will lint both `ts` and `scss` files.

### Additional help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
