import React, {Component} from 'react';
import './header.css';

export default class Header extends Component  {
    onClick = (e) =>{
        this.props.onActiveItem(e.target.innerText);
    }
    render(){
    return(
    <div className="header d-flex">
        <h3>
        <a href="#">
            Star DB
        </a>    
        </h3>
        <ul className="d-flex">
            <li>
                <a href="#" onClick={this.onClick}>People</a>
            </li>
            <li>
                <a href="#" onClick={this.onClick}>Planets</a>
            </li>
            <li>
                <a href="#" onClick={this.onClick}>Starships</a>
            </li>
        </ul>
    </div>
    )
    }
}
