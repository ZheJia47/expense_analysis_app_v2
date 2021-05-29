import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
// pages
import FirstPage from "./components/firstPage";
import SecondPage from "./components/secondPage";
import Home from "./components/Home";




function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // router
    <BrowserRouter>
      <Route path="/" component={Home}/>
      <Route path="/first" component={FirstPage}/>
      <Route path="/second" component={SecondPage}/>
      
    </BrowserRouter>




  );
}

export default App;
