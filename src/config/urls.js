const baseURL = process.env.REACT_APP_API

const urls = {
    movie:(page) => `/discover/movie?page=${page}`,
    genres:()=> '/genre/movie/list',
    searchMovie: (name) => `/search/keyword?query=${name}`,
    movieById: (id) => `/movie/${id}`,
    moviesByGenres: (genre_key, page) => `/discover/movie?with_genres=${genre_key}&page=${page}`
}

export {
    baseURL,
    urls
}