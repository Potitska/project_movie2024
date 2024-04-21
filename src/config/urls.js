const baseURL = process.env.REACT_APP_API

const urls = {
    movie:(page) => `/discover/movie?page=${page}`,
    genres:()=> '/genre/movie/list',
    movieById: (id) => `/movie/${id}`,
    moviesByGenre: (genre_key) => `/discover/movie?with_genres=${genre_key}`
}

export {
    baseURL,
    urls
}