import React, { Component } from "react";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

class MatchCont extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3000/match/get`)
        .then(response => response.json())
        .then(json => { 
            this.setState({
                isLoaded: true,
                items: json.match,
            })
        });
    }
    render() {
        let {isLoaded, items} = this.state;
        if (!isLoaded) {
            return <div>Loading... </div>
        }
        else{
        return (
               <ul>
                   {items.map(item => (
                       <li key={item.id}>  
                           {item.clubs} 
                           {item.score}
                           {item.clubs2}
                           {item.score2}
                       </li>
                   ))}
               </ul>
            );
        }
    }
}

export default MatchCont;