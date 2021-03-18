import React, {Component} from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service'
import Spiner from '../spiner/spiner';
import OnError from '../error-indicator/error-indicator';

export default class RandomPlanet extends Component{
 
 componentDidMount(){
     this.updatePlanet();
     setInterval((this.updatePlanet) ,5000);
 }
 
    swapiservice = new SwapiService();

    state = {
      error:false,
      loading:true,
        id:2,
        name:'Name',
        population:0,
        rotationPeriod:0,
        diametr:0
    }
    
onError=(err)=>{
  this.setState({
    error:true,
    loading:false
  })
}

    updatePlanet =()=>{
        const id = Math.floor(Math.random()*9)+6;
        console.log('Update');
        this.swapiservice.getPlanet(id).then((res)=>{
            this.setState({
                error:false,
                loading:false,
                id,
                name:res.name,
                population:res.population,
                rotationPeriod:res.rotation_period,
                diametr:res.diameter
            })
        }).catch((err)=>{
            return this.onError(err);
        })
    }
    
    render(){
        const {error,loading,id,name,population,rotationPeriod,diametr} = this.state;
      if(error){
        return(
          <div className="random-planet jumbotron rounded ">
            <OnError/>
          </div>
      )
      }   
      
        if(loading){  
        return(
            <div className="random-planet jumbotron rounded">
              <Spiner/>
            </div>
        )
      }
      if(!loading){
        return(
          <div className="random-planet jumbotron rounded">
      <img className="planet-image"
      src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
      <div>
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diametr}</span>
          </li>
        </ul>
        </div>
      </div>
      )
      }
      
    }
}