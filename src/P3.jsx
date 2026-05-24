/** built A react app that displays a list of product using props 
 *     1. create a product card component to show details like title price,rating and image
 *     2.  use a product list compo to store product dataand display multiple product card componentsusing map method
 */

import React from 'react';
import P4 from './P4';
import img1 from './cover_alibaba-min.jpg';

function P3() {
    const product = [{
        title: 'alibaba',
        price: 800000,
        rating: 5,
        image: img1
    }];

    return (
        <>
            <h1>Our Products</h1>
            <P4 data={product} />
        </>
    );
}
export default P3;

