import {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './Components/Body.jsx'
import EachVideo from './Components/EachVideo.jsx'
import SuggestedVideos from './Components/SuggestedVideos.jsx'
import SideBar from './Components/SideBar.jsx'
import Signin from './Components/Signin.jsx'
import Login from './Components/Login.jsx'
import React from 'react'
import ViewProfile from './Components/ViewProfile.jsx'
import VideoLayout from './Components/videoLayout.jsx'

const router = createBrowserRouter ([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        index : true,
        element : <Body/>
      },

      
      {
        path : "/viewProfile",
        element : <ViewProfile />
      },


      {
        path : '/video/:id',
        element : <VideoLayout/>   
      }
    ]
  },

  {
    path : '/signin',
    element : <Signin/>
  },

  {
    path : "/login",
    element : <Login />
  },


  {
    path : "/viewProfile",
    element : <ViewProfile />
  }

 
  
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}>
      </RouterProvider>
  </StrictMode>
)
