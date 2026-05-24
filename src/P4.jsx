import React from 'react';

function P4(props) {
    return (
        <>
            {props.data.map((p, index) => (
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

export default P4;