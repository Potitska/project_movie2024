import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts";
import {GenresPage, MovieByIdPage, MoviesByGenrePage, MoviesPage, NotFoundPage} from "../pages";
import {AppRoutes} from "./AppRoutes";



const router = createBrowserRouter([
    {
        path: AppRoutes.MAIN,
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Navigate to={'movies'}/>
            },
            {
                path:AppRoutes.MOVIES,
                element:<MoviesPage/>
            },
            {
                path:AppRoutes.MOVIE_BY_ID,
                element:<MovieByIdPage/>
            },
            {
                path:AppRoutes.GENRES,
                element:<GenresPage/>
            },
            {
                path:AppRoutes.GENRES_BY_ID,
                element:<MoviesByGenrePage/>
            },
            {
                path: '*',
                element: <NotFoundPage/>
            }
        ]
    }
]);

export {
    router
}