import {apiService} from "./apiService";
import {urls} from "../config";

const movieService = {
    getAll: (page) => apiService.get(urls.movie(page)),
    getGenres: apiService.get(urls.genres()),
    getMovieById: (id) => apiService.get(urls.movieById(id)),
    getMoviesByGenre: (genre_key) => apiService.get(urls.moviesByGenre(genre_key))
}

export {
    movieService
}