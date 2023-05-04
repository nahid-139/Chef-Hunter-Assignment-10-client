import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Components/Home/Home.jsx';
import LogIn from './Components/LogIn/LogIn.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import Recipes from './Components/Recipes/Recipes.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import RecipeDetails from './Components/Recipes/RecipeDetails.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import AllRecipes from './Components/Recipes/AllRecipes.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/signup',
        element: <Register></Register>
      },
      {
        path: '/chef/:id',
        element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
        loader:({params}) => fetch(`https://chef-server-rho-three.vercel.app/chef/${params.id}`)
      },
      {
        path: '/recipes/:id',
        element: <PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://chef-server-rho-three.vercel.app/recipes/${params.id}`)
      },
      {
        path:"/allrecipes",
        element:<AllRecipes></AllRecipes>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
