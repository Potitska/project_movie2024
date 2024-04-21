import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    movies: [],
    movie:{},
    genres: [],
    movieByGenre: [],
    isLoading: null,
    total_pages:0,
    favoriteMovies:[],
    searchValue:''
};

const getAll = createAsyncThunk('moviesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await movieService.getAll(page);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const allGenres = createAsyncThunk('moviesSlice/allGenres',
    async (_, thunkAPI) => {
        try {
            const {data} = await movieService.getGenres;
            const {genres} = data
            return genres
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const movieByGenre = createAsyncThunk('moviesSlice/movieByGenre',
    async (genre_key, thunkAPI) => {
        try {
            const {data} = await movieService.getMoviesByGenre(genre_key);
            const {results} = data
            return {results}
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const movieById = createAsyncThunk(
    'moviesSlice/movieById', async (id, thunkAPI)=>{
        try {
            const {data} = await movieService.getMovieById(id)
            const {results} = data
            return results
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const slice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        addFavoriteMovie: (state, action)=>{
            state.favoriteMovies.push(action.payload);
        },
        deleteFavoriteMovie:(state, action)=>{
            state.favoriteMovies = state.favoriteMovies.filter(fav=>fav.id !== action.payload.id)
        },
        setSearchValue:(state, action)=>{
            state.searchValue = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            const {total_pages, results} = action.payload;
            state.total_pages = total_pages
            state.movies = results
        })
        .addCase(allGenres.fulfilled, (state, action) => {
            state.genres = action.payload
        })
        .addCase(movieByGenre.fulfilled, (state, action) => {
            state.movieByGenre = action.payload
        })
        .addCase(movieById.fulfilled, (state, action)=>{
            state.movieById = action.payload
        })
        .addMatcher(isPending(), state => {
            state.isLoading = true
        })
        .addMatcher(isFulfilled(), state => {
            state.isLoading = false
        })
})

const {reducer: moviesReducer, actions} = slice;
export const {addFavoriteMovie, deleteFavoriteMovie, setSearchValue} = slice.actions;

const moviesActions = {
    ...actions,
    getAll,
    allGenres,
    movieByGenre,
    movieById
}

export {
    moviesReducer,
    moviesActions
}

