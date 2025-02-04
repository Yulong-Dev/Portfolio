import React from 'react';
import './App.css';
import Home from './pages/Home';
import Aboutpage from './pages/Aboutpage';
import Servicespage from './pages/Servicespage';
import Portfoliopage from './pages/Portfoliopage';
import Contactpage from './pages/Contactpage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



const router = createBrowserRouter ([
  {
    path:'/',
    element: <Home/> 
  },

  {
    path:'/about',
    element: <Aboutpage/>
  },

  {
    path:'/services',
    element: <Servicespage/>
  },

  {
    path:'/port',
    element: <Portfoliopage/>
  },

  {
    path:'/contact',
    element: <Contactpage/>
  }

])


function App() {

  return (
    <>

      <RouterProvider router={router}/>

    </>
  )
}

export default App
