import React, {Component} from 'react';
import '../person-details/person-details.css';

export default class StarshipDetails extends Component{
    render(){
      
        return(
            <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/starships/${this.props.id}.jpg`} />

        <div className="card-body">
          <h4>{this.props.name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Atmosphering speed</span>
              <span>{this.props.max_atmosphering_speed}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Manufacturer</span>
              <span>{this.props.manufacturer}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Created</span>
              <span>{this.props.created}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Cargo capacity</span>
              <span>{this.props.cargo_capacity}</span>
            </li>
          </ul>
        </div>
      </div>
        )
    }
}