import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';

const App = lazy(() => import('./App.jsx'));
const Body = lazy(() => import('./Components/Body.jsx'));
const EachVideo = lazy(() => import('./Components/EachVideo.jsx'));
const SuggestedVideos = lazy(() => import('./Components/SuggestedVideos.jsx'));
const SideBar = lazy(() => import('./Components/SideBar.jsx'));
const Signin = lazy(() => import('./Components/Signin.jsx'));
const Login = lazy(() => import('./Components/Login.jsx'));
const ViewProfile = lazy(() => import('./Components/ViewProfile.jsx'));
const VideoLayout = lazy(() => import('./Components/videoLayout.jsx'));
const UploadVideo = lazy(() => import('./Components/UploadVideo.jsx'));
const CreateChannel = lazy(() => import('./Components/CreateChannel.jsx'));
const MyChannel = lazy(() => import('./Components/MyChannel.jsx'));
import { AuthProvider } from './utlies/AuthContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Body />
      },
      {
        path: "/viewProfile",
        element: <ViewProfile />
      },
      {
        path: '/video/:id',
        element: <VideoLayout />
      },
      {
        path: '/upload',
        element: <UploadVideo />
      },
      {
        path: "/mychannel",
        element: <MyChannel />
      }
    ]
  },
  {
    path: '/signin',
    element: <Signin />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/viewProfile",
    element: <ViewProfile />
  },
  {
    path: '/createChannel',
    element: <CreateChannel />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
    </AuthProvider>
  </StrictMode>
);