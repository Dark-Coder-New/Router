
import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Nav from "./Pages/Nav";
import Error from "./Pages/Error";
import Hello from "./Pages/Hello";

import Products from "./Pages2/Products";
import Apple  from "./Pages2/Apple";
import Samsung from "./Pages2/Samsung";
import Nokia from "./Pages2/Nokia";


import Users from "./Pages3/Users";
import UserInfo from "./Pages3/UserInfo";
import Mark from "./Pages3/Mark";


import "./App.css";

import {Routes, Route} from "react-router-dom";


const App = () =>{
    return(
        <div>


            <Routes>  
                <Route path="users" element={<Users />} />

                <Route path="users/3" element={<Mark />} />

 
                <Route path="users/:x" element={<UserInfo />} />

                
                
            </Routes>





            {/* <Routes>

                <Route path="/products" element={<Products />} >
                    <Route path="" element={<Apple />} />
                    <Route path="samsung" element={<Samsung />} />
                    <Route path="nokia" element={<Nokia />} />
                </Route>

        </Routes> */}


            
            {/* <Nav /> */}

            {/* <Routes> 
                   <Route  path="/" element={<Home />} />
                   <Route  path="/about" element={<About />} />
                   <Route  path="/blog" element={<Blog />} />
                   <Route  path="/contact" element={<Contact />} />
                   <Route  path="*" element={<Error />} />
                   <Route path="/blog/contact" element={<Hello />} />
             </Routes> */}
            
        </div>
    )
}

export default App;