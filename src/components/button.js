import React from 'react'
import './styles/button.css'

export default class Button extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <a id='buttonStyle' arria-type='button' onClick={this.props.click} style={{
                backgroundColor: this.props.backgroundColor, 
                color: this.props.textColor,
                borderColor: this.props.borderColor,
                paddingLeft: this.props.padding,
                paddingRight: this.props.padding,
                marginTop: this.props.marginTop
            }} > {this.props.buttonName} </a>
        )
    }
}