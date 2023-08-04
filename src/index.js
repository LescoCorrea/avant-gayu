import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Propos from './Pages/Propos/Propos';
import Artisans from './Pages/Artisan/Artisans';
import VoirArtisan from './Pages/Artisan/VoirArtisan';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import VoirBlog from './Pages/Blog/VoirBlog';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';

 const router = createBrowserRouter([
  {
    
    path: "/",
    element: <App />,
  },
  {
    path: "/propos",
    element: <Propos />,
  },
  {
    path: "/artisan",
    element: <Artisans />,
  },
  {
    path: "/voirartisan",
    element: <VoirArtisan />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/voirblog",
    element: <VoirBlog />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
