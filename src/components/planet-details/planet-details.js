import React, {Component} from 'react';
import '../person-details/person-details.css';

export default class PlanetDetails extends Component{
    render(){
      
        return(
            <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${this.props.id}.jpg`} />

        <div className="card-body">
          <h4>{this.props.name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Rotation period</span>
              <span>{this.props.rotation_period}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Orbital period</span>
              <span>{this.props.orbital_period}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{this.props.diameter}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Created</span>
              <span>{this.props.created}</span>
            </li>
          </ul>
        </div>
      </div>
        )
    }
}