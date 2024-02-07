import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    movies: [],
    movie:{},
    genres: [],
    movieByGenre: [],
    movieByName: [],
    isLoading: null,
    total_pages:0

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

const movieByName = createAsyncThunk('moviesSlice/movieByName',
    async (name, thunkAPI) => {
        try {
            const {data} = await movieService.getMovieByName(name)
            const {results} = data
            return results
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    })

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
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            const {total_pages, results} = action.payload;
            state.total_pages = total_pages
            state.movies = results
            state.isLoading = false
        })
        .addCase(getAll.pending, (state) => {
            state.isLoading = true
        })
        .addCase(allGenres.fulfilled, (state, action) => {
            state.genres = action.payload
        })
        .addCase(movieByGenre.fulfilled, (state, action) => {
            state.movieByGenre = action.payload
        })
        .addCase(movieByName.fulfilled, (state, action) => {
            state.movieByName = action.payload
        })
        .addCase(movieById.fulfilled, (state, action)=>{
            state.movieById = action.payload
        })
})

const {reducer: moviesReducer, actions} = slice;

const moviesActions = {
    ...actions,
    getAll,
    allGenres,
    movieByGenre,
    movieByName,
    movieById
}

export {
    moviesReducer,
    moviesActions
}