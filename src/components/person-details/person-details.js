import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import Spiner from '../spiner/spiner';
import PlanetDetails from '../planet-details/planet-details';
import StarshipDetails from '../starship-details/starship-details';
import './person-details.css';

export default class PersonDetails extends Component{
  
  
  swapiservice = new SwapiService();

  state={
    id:null,
    person:null,
    loading:true
  }

  componentDidMount(){
    let { id,activeItem } = this.props;
    this.renderPerson(id,activeItem);
  }  
  componentDidUpdate(prevProps){
    let { id,activeItem } = this.props;
    if(this.props.id!==prevProps.id){
      this.setState({
        loading:true
      })
      console.log(`renderPerson(${id})`);
      this.renderPerson(id,activeItem);
    }
    else if(this.props.activeItem!==prevProps.activeItem){
      this.setState({
        person:null
      })
      id=null;
      console.log(`renderPerson(${id})`);
      this.renderPerson(id,activeItem); 
    }
  }

   renderPerson (id,activeItem){
  console.log('ID',id);
    if(id===null){
      return;
    }
    if(activeItem==='People'){
      this.swapiservice.getPerson(id+1).then((el)=>{
        this.setState({
          loading:false,
          id:id+1,
          person:el
        })
        console.log('rendPers',this.state.person.name);
      }) 
    }
    if(activeItem==='Planets'){
      this.swapiservice.getPlanet(id+1).then((el)=>{
        console.log('Planets',id);
        this.setState({
          loading:false,
          id:id+1,
          person:el
        })
      })
    }
    if(activeItem==='Starships'){
      this.swapiservice.getallStarhips().then((el)=>{
        this.setState({
          loading:false,
          id:id,
          person:el.results[id]
        })
        console.log('rendPers',el.results[id]);
      })
    } 
  }

    render(){
      const {activeItem}=this.props;
      if (!this.state.person) {
        return <span>Select a person from a list</span>;
      }
      if(this.state.loading){
        return(
          <div className="person-details card">
            <Spiner/>
          </div>
        )
      }
      if(activeItem==='Planets'){
        const {name,rotation_period,
        orbital_period,diameter,created}=this.state.person;
        const  {id} = this.state;
        return(
          <PlanetDetails id={id}  name={name}
          rotation_period={rotation_period} orbital_period={orbital_period}
          diameter={diameter} created={created}/>
        )
      }
       if(activeItem==='Starships'){
        const {name,max_atmosphering_speed,
          manufacturer,created,cargo_capacity}=this.state.person;
        const  {id} = this.state;
        return(
          <StarshipDetails id={id}  name={name}
          max_atmosphering_speed={max_atmosphering_speed} manufacturer={manufacturer}
          created={created} cargo_capacity={cargo_capacity}/>
        )
      } 

      if(activeItem==='People'){
      const {  name, gender,
                birth_year, eye_color } = this.state.person;
      
        return(
            <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${this.state.id}.jpg`} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birth_year}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eye_color}</span>
            </li>
          </ul>
        </div>
      </div>
        )
      }
    }
}