import React from 'react'
import Card from '../components/card'
import Grid from '@material-ui/core/Grid'
import './styles/homestyle.css'
import StartUpDescription from './startupDescription'
import CircleImg from './circleimg'
import Button from './button';
import ProjectListItem from './projectListItem';
import ImgIconProject from '../imgs/iconprojeto.jpg'



const jsonFake = [{
    nome: "Arroiz",
    descricao: "StartUp arroiz trabalha com arroz branco com muita comida e bla bla bla bal lbalbalbla balb abal balb a bal balb alb alb ab",
    icon: "https://a.deviantart.net/avatars/r/a/rayum.jpg?14"
},
{
    nome: "Feijao",
    descricao: "StartUp frroiz trabalha com arroz branco",
    icon: "https://a.deviantart.net/avatars/r/a/rayum.jpg?14"
}]

function renderStartUpDescription(startUpDescription){
    let view = []
    startUpDescription.map(description => 
    view.push(<StartUpDescription startupDescription={description.descricao}
                startupName={description.nome}  
                icon={description.icon} />) 

   )
   return view;
}

export default class HomeScreen extends React.Component{
    render(){
        return(
            <div id="home-container">
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Card>
                            
                                <ProjectListItem nameProject = 'Projeto Arroz Pra Todos' nameStartup = 'StartUp Arroiz'
                                 iconProject = {ImgIconProject} />

                                <Button click={()=> alert('asdadfds')}
                                    backgroundColor='rgb(250,250,250)'
                                    textColor='black'
                                    buttonName='investir'
                                    padding={36}
                                    borderColor='#7417BC'
                                    marginTop={10}
                                />
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            {renderStartUpDescription(jsonFake)}
                            
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                         
                        <Card>
                            <p>Calendário</p>
                        </Card>
                    </Grid>
      
      </Grid>
                
            </div>
         )
    }
}