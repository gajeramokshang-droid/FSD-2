
import { BrowserRouter as Router,Routes,Route,Link}  from "react-router-dom";
import Home from './routing2/Home';
import Aboutus from './routing2/Aboutus';
import React  from "react";

export default function Jesus(){
    return(
        <>
        <Router>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>Aboutus</Link></li>
            </ul>

            <Routes>
                <Route path="/home" element={<Home />}/>
                <Route path="/about" element={<Aboutus/>}/>
            </Routes>
        </Router>
        </>
    )
}