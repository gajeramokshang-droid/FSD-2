import React from 'react';
import React from 'react';

function P6(props) {
    const filteredProducts = props.data.filter(p => p.rating === 5);

    return (
        <>
            {filteredProducts.map((p, index) => (
                <div key={index}>
                    <img src={p.image} alt={p.title} width='100%' />
                    <h2>{p.title}</h2>
                    <h2>{p.price}</h2>
                    <h2>{p.rating}</h2>
                </div>
            ))}
        </>
    );
}

export default P6;
