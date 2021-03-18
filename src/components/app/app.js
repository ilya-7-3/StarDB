import React, {Component}  from 'react';
import Header from '../header/header';
import ItemList from '../item-list/item-list';
import RandomPlanet from '../random-planet/random-planet';
import PersonDetails from '../person-details/person-details';

 export default class  App extends Component {
  
state={
  id:null,
  activeItem:'People'
}

  onItemSelected = (id)=>{
    
    this.setState({
      id:id
    })
  }
  
  onActiveItem = (item)=>{  
    this.setState({
      activeItem:item
    })
  }   

  render(){     
  return (
        <div className="container">
            <Header onActiveItem={this.onActiveItem}/>
            <RandomPlanet/>
         <div className="row mb2">
            <div className="col-md-6">
          <ItemList onItemSelected={this.onItemSelected}
          activeItem={this.state.activeItem}/>
         </div>
        <div className="col-md-6">
        <PersonDetails id={this.state.id}
        activeItem={this.state.activeItem}/>
        </div>
      </div>  
        </div>
        );
}
}
