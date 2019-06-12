import React, { Component } from "react";
import styled from 'styled-components';
import "react-notifications-component/dist/theme.css";

class Players extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3000/players/get`)
        .then(response => response.json())
        .then(json => { 
            this.setState({
                isLoaded: true,
                items: json.players,
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
                         {item.goalkeeper}  
                         {item.defender1}
                         {item.defender2}
                         {item.defender3}
                         {item.defender4}
                         {item.midfielder1}
                         {item.midfielder2}
                         {item.midfielder3}
                         {item.midfielder4}
                         {item.attack1}
                         {item.attack2}
                       </li>
                   ))}
               </ul>
            );
        }
    }
}

export default Players;