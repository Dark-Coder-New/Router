
import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Nav from "./Pages/Nav";
import Error from "./Pages/Error";
import "./App.css";

import {Routes, Route} from "react-router-dom";


const App = () =>{
    return(
        <div>
            <Nav />

            <Routes> 
                   <Route  path="/" element={<Home />} />
                   <Route  path="/about" element={<About />} />
                   <Route  path="/blog" element={<Blog />} />
                   <Route  path="/contact" element={<Contact />} />
                   <Route  path="*" element={<Error />} />
             </Routes >
            
        </div>
    )
}

export default App;