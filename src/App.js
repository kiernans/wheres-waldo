import React from "react";
import { MainPage } from "./routes/MainPage";
import { Routes, Route } from "react-router-dom";
import { Level } from "./routes/Level";
import level1 from './assets/2687207.jpg'
import './styles/App.css'

function App() {

  // eslint-disable-next-line
  const getCoordinates = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    console.log(x, y);
  };

  return (
    <>
      <Routes>
        <Route path='/'
               element={<MainPage />}/>
          <Route path='level1' 
                  element={<Level image={level1}
                                  level={1}
                                  characters={'waldo'}/>}/>
        <Route path='*' element={<h1>Nothing here!</h1>}/>
      </Routes>
    </>
  );
}

export default App;
