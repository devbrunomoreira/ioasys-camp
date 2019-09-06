import React from 'react'
import CircleImg from './circleimg'
import Button from './button'
import './styles/startupDescription.css'

export default class StartUpDescription extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div id="startupBlock">
                <CircleImg size={60} icon={this.props.icon} /> 
                <h2>{this.props.startupName} </h2>
                <p>{this.props.startupDescription}</p>
                <Button click={()=> alert('asdadfds')}
                    backgroundColor='#7417BC'
                    textColor='white'
                    buttonName='ver mais'
                    padding={25}
                    borderColor={'#F0F0F0'}
                />
            </div>
        )
    }

}