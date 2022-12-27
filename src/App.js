import React, { useState } from 'react'

// import Counting from './components/Base/Counting'
// import Restrauant from './components/Basics/Restrauant'
// import UseStateObject from './components/Form/UseStateObject'
import About from './components/about/About'
import Navbar from './components/about/Navbar'
import TextForm from './components/about/TextForm'
// import GameBoard from './components/games/GameBoard'
// import Eaxmple from './components/about/Eaxmple'

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";


const App = () => {

  
  const [mode,setMode]=useState('light')
  const toggleMode = ()=> {
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white'
      document.title = ' TextUtils - lightMode'
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#0e0736'
      document.title = ' TextUtils - DarkMode'
    }
  }
  
  return (
    
    <div>
      {/* <Router> */}
      {/* <Counting />  */}
      {/* <Restrauant /> */}
      {/* <UseStateObject /> */}
      {/* <Navbar mode={mode} toggleMode={toggleMode}/> */}
      <Navbar mode={mode} toggleMode={toggleMode} aboutText={'i am about'} title={'Click Me'} />
      <TextForm mode={mode}/>
      <About />
      {/* <Routes>
          <Route exact path="/" element={<TextForm mode={mode}/>}></Route>
          <Route exact path="/home" element={<TextForm mode={mode}/>}></Route>
          <Route exact path="/about" element={<About />}></Route>
      </Routes> */}

      

      
    
      {/* <GameBoard /> */}  
      {/* <Eaxmple /> */}
    {/* </Router> */}
    </div>
    
    
  )
}

export default App
