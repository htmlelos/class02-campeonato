import React from 'react'
import Botonera from './Botonera.js'

const estilo1 = {background:'green'}

export default class Copa extends React.Component {
    constructor(props) {
        super(props)
        this.state = {estado: 'On Line'}
    }
    cambia() {
        if (this.state.estado === 'On Line') {
            this.setState({estado: 'Off Line'})
        } else {
            this.setState({estado: 'On Line'})
        }
    }
    render() {
        return (
            <figure style={estilo1}>
                <img width="65px" src={`http://www.secsanluis.com.ar/tallerReact/${this.props.imagen}`}/>
                <figCaption>Estado: {this.state.estado}</figCaption>
                <Botonera accion={this.cambia.bind(this)} />
            </figure>
        )
    }
}