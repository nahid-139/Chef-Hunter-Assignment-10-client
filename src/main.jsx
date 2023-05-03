import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Components/Home.jsx';
import LogIn from './Components/LogIn.jsx';
import Register from './Components/Register.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import Services from './Components/Services.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path :'/',
        element: <Home></Home>
      },
      {
        path:'/login',
        element:<LogIn></LogIn>
      },
      {
        path:'/signup',
        element:<Register></Register>
      },
      {
        path:'/services',
        element:<Services></Services>
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
