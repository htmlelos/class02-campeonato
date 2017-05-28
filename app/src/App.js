import React from 'react'
import ReactDOM from 'react-dom'
import Jugadores from './components/Jugadores.js'

let detalle = [
    {id:1,nickname:'Mario',puntos:7200,copa:'oro.png'},
    {id:2,nickname:'Lucas',puntos:6800,copa:'plata.png'},
    {id:3,nickname:'Maria',puntos:6750,copa:'plata.png'},
    {id:4,nickname:'Sonia',puntos:5000,copa:'bronce.png'}
]

ReactDOM.render(<Jugadores listado={detalle}/>, document.getElementById('root'))

//www.aula.it.ulp.edu.ar
//usuario: alumnotds_c23
//contraseña: 123456

