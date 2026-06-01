// Create react app using function component to perform tasks as asked. First create files as asked below in folder named “ component”1. Login.js - 
// for the login page content2. Product.js - for the Product page content3. Contact.js - for the contact page content4. About.js - for the about
//  page contentCreate Home.js file which contains Links for Login,Product,Contact and About page. Also, add functionality of page routing
//  .Finally call Home.js in App.js.Write code for All necessary files.


import React from "react";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Login from './Pb313/Login.jsx';
import Product from './Pb313/Product.jsx';
import About from './Pb313/About.jsx';
import Contact from './Pb313/Contact.jsx';

export default function Pb313(){
    return(
        <>
        <BrowserRouter>
        <ul>
            <li><Link to='/login'>Login</Link> </li>
             <li><Link to='/jesus'>About</Link> </li>
              <li><Link to='/mary'>Contact</Link> </li>
               <li><Link to='/joseph'>Product</Link> </li>
        </ul>
        <Routes>
            <Route path="/login" element={<Login/>}/>
             <Route path="/jesus" element={<About/>}/>
              <Route path="/mary" element={<Contact/>}/>
               <Route path="/joseph" element={<Product/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}