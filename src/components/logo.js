import React from 'react'
import img from '../imgs/Logo.png'
import './styles/logostyle.css'

export default class Logo extends React.Component {
    render(){
        return(
            <div id="logo-container">
            <img id="logoImg" src={img} alt= "Logo Grow Think"/>
            <p>GrowThink</p>
            </div>
        )
    }
}

