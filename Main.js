import React, {Component} from "react";


import {
BrowserRouter,
Routes,
Route,
Link,
} from "react-router-dom";


import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";


class Main extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
            <h1>AGNIESZKA'S REACT PAGE</h1>
            <ul className="header">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/stuff">ABOUT</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
            <div className="content">
              <Routes>  
                <Route path="/" element={<Home/>}/>
                <Route path="/welcome" element={<Home/>}/>
                <Route path="/stuff" element={<Stuff/>}/>
                <Route path="/contact" element={<Contact/>} />
               
              </Routes>  
            </div>
            </div>
            </BrowserRouter>
        );
    }
}

export default Main;