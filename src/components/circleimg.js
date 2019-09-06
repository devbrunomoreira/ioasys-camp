import React from 'react'
import './styles/circleimg.css'

export default class CircleImg extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <img id="circleimg" src={this.props.icon} height={this.props.size} width={this.props.size}/>
        )
    }
}