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
        path : '/video/:id',
    
        element : [
          <div className='flex '>
            <SideBar />
            <EachVideo/>
            <SuggestedVideos/>
          </div>
        ]
    
      }
    ]
  },

  {
    path : '/signin',
    element : <Signin/>
  }

 
  
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}>
      </RouterProvider>
  </StrictMode>
)
