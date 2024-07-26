import React from 'react'

function Home({ dishes }) {
    return (
        <div>
            {dishes.map(dish => (
                <div key={dish.id}>
                <h2>{dish.name}</h2>
                <p>{dish.description}</p>
                <p>Precio: ${dish.price}</p>
                </div>
            ))}
        </div>
    );
}

export default Home