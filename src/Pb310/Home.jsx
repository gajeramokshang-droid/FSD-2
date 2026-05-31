// Create a React app to perform tasks as asked using functional component:1)Create a React Router that includes three routes: Home, Food Items, and 
// Contact andimplement navigation between these routes. 2)Create a route that displays a Homepage, Food Items details page and Contact details page. 
// 3) When a user clicks onHome page it should navigate to the home page and display “Welcome to LJU” in boldin the h1 heading. When a user clicks on a Food Items page,
//  it should navigate to theFood Items Detail page and display three products&#39; information with name, price anddescription using props. And when the user clicks
//   on Contact page it should navigate tocontact details page and display contact information with blue color font.


import React from 'react';

export default function Home(){
    return(
        <>
        <p style={{fontweight:'bold'}}>Welcopme to LJU</p>
        </>
    )
}