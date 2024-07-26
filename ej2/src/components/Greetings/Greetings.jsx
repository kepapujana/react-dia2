import React, { useState, useEffect } from 'react'

function Greetings(props) {
    const [favoriteColor, setFavoriteColor] =
    useState('Hola Euralio')
    useEffect(() => {
      setTimeout(() => {
        setFavoriteColor('Hola Alfonsina')
      }, 3000)
    }, [])

    useEffect(() => {
      console.log('el componente se ha actualizado')
    })
   
    return (
        <div>
            <h1>1. Una etiqueta “p” que diga “Hola Euralio”</h1>
            <h2>Hola Euralio</h2>
            <h1>2. Como “props” desde el componente padre</h1>
            <h2>{props.message}</h2>
            <h1>3. Tres segundos el componente debe mostrar otro mensaje</h1>
            <h2>{favoriteColor}</h2>
        </div>
    )
}

export default Greetings