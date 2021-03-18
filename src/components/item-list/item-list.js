import React, {Component} from  'react';
import SwapiService from '../../services/swapi-service';
import './item-list.css';

export default class ItemList extends Component {

    swapiservice = new SwapiService();

    state={
        peopleList:null
    }

    componentDidMount(){
    this.swapiservice.getallPeople().then((people)=>{
        this.setState({
            peopleList:people
        })
    })    
    }
    componentDidUpdate(prevProps){
        if(this.props.activeItem!==prevProps.activeItem){
          const {activeItem} = this.props;
          if(activeItem==='Planets'){
            this.swapiservice.getallPlanets().then((planets)=>{
                this.setState({
                    peopleList:planets.results
                })
                this.renderPeople();
            })
          }
          if(activeItem==='People'){
            this.swapiservice.getallPeople().then((people)=>{
                this.setState({
                    peopleList:people
                })
                this.renderPeople();
            })
          }
          if(activeItem==='Starships'){
            this.swapiservice.getallStarhips().then((starhips)=>{
                this.setState({
                    peopleList:starhips.results
                })
                this.renderPeople();
            })
          } 
        }
      }

     renderPeople  ()  {
         if(this.state.peopleList!==null){
            return this.state.peopleList.map((element,id) => {
                return(
                    <li className="list-group-item" 
                    key={id}
                    onClick={()=>this.props.onItemSelected(id)}
                    >{element.name}</li>
                )
            });
        }
         
    }



    render(){
        const element=this.renderPeople();
        /* const items = this.renderPeople(this.state.peopleList); */ 
        return(
            <ul className="item-list list-group">
            {element}
            </ul>
        )
    }
}