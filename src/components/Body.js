import React from 'react';
import Browse from './Browse';
import Login from './Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MovieCardDesc from './MovieCardDesc';


const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/browse",
      element: <Browse/>,
    },
    {
      path: "/movieCardDesc",
      element: <MovieCardDesc/>,
    },
    
  ]);

   return (
    <div>
     <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
