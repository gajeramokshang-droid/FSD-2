/** Student car and Student list  build a reatc app that displays a list of student 
 *     1.  create a student card component to show detail of student like rollno.,name,marks and img of an id card
 *          finally display a student details having 25 marks using filter
 *     2.   use student list component to store details of the student
 */

import React from 'react';
import P4 from './P4';
import img1 from './cover_alibaba-min.jpg';


function P5(){
    const product=[{
        title: 'alibaba',
        price: 800000,
        rating: 5,
        image: img1
    }];
    return(
        <>
        <h3>Mokshang</h3>
        <P6 data={product}/>
        </>
    )
}
