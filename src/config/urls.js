const baseURL = process.env.REACT_APP_API

const urls = {
    movie:(page) => `/discover/movie?page=${page}`,
    genres:()=> '/genre/movie/list',
    searchMovie: (name) => `/search/keyword?query=${name}`,
    movieById: (id) => `/movie/${id}`,
    moviesByGenre: (genre_key) => `/discover/movie?with_genres=${genre_key}`
}

export {
    baseURL,
    urls
}