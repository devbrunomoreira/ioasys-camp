import React from 'react';
import CircleImg from './circleimg'
import IconChat from '../imgs/botaochat.png'
import IconChatColor from '../imgs/botaochat1.png'
import IconBack from '../imgs/botaoretorno.png'
import IconBackColor from '../imgs/botaoretorno1.png'
import IconLupa from '../imgs/lupa.png'
import IconLupaColor from '../imgs/lupa1.png'
import './styles/projectListItem.css'


class ProjectListItem extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() { 
        return (
            <div id="projectItem">
                <CircleImg size={40} icon={this.props.iconProject} />
                <div  id="projectItemNameAndStartup">
                <p id="projectItemName">{this.props.nameProject}</p>
                <p id="projectItemStartup">{this.props.nameStartup}</p>
                </div>
                <div id="iconsOfProjects">
                <img src={IconChat} alt="teste" id="imgProjectItem"/>
                <img src={IconBack} alt="teste" id="imgProjectItem"/>
                <img src={IconLupa} alt="teste" id="imgProjectItem"/>
                </div>
            </div>
        );
    }
}
 
export default ProjectListItem;