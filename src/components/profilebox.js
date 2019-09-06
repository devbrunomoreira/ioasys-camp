import React from 'react'
import './styles/profilebox.css'
import CircleImg from './circleimg'


export default class ProfileBox extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div id="profile-box-container">
                <p id="profile-box-label">{this.props.nomeUser}</p>
                <CircleImg icon={this.props.profileIcon} size={60}/>
                
            </div>
            
        )
    }
}