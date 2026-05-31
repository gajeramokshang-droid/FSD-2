import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import React from 'react';
import React1 from './routing2/React1';
import Express from './routing2/Express';

export default function Ruth(){
    return(
        <>
        <Router>
            <ul>
                <li><Link to='/react'>React1</Link></li>
                <li><Link to='/express'>Express</Link></li>
            </ul>
            <Routes>
                <Route path="/react" element={<React1 />}/>
                <Route path="/express" element={<Express/>}/>
            </Routes>
        </Router>
        </>
    )
}

