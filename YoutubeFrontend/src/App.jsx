import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar.jsx';
import Body from './Components/Body.jsx';
import EachVideo from './Components/EachVideo.jsx';
import SuggestedVideos from './Components/SuggestedVideos.jsx';

function App() {

  return (

     <>

            <NavBar />    
     </>
  );
}

export default App;
