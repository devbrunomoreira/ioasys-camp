import React from 'react'
import './styles/card.css'

export default class Card extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
        <div id="card-container">{
            this.props.children
        }
        </div>
        )
    }

}