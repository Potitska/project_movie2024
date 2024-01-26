import {apiService} from "./apiService";
import {urls} from "../config";

const movieService = {
    getAll: (page) => apiService.get(urls.movie(page)),
    getGenres: apiService.get(urls.genres()),
    getMovieByName: (name) => apiService.get(urls.searchMovie(name)),
    getMovieById: (id) => apiService.get(urls.movieById(id)),
    getMoviesByGenre: (genre_key, page) => apiService.get(urls.moviesByGenres(genre_key, page))
}

export {
    movieService
}