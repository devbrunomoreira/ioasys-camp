import React from 'react'
import './styles/menustyle.css'


export default class MenuItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <a href={this.props.href}>{this.props.nome}</a>
        )
    }
}