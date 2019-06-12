import React, { Component } from "react";
import styled from 'styled-components';
import "react-notifications-component/dist/theme.css";

class Clubs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3000/clubs/get`)
        .then(response => response.json())
        .then(json => { 
            this.setState({
                isLoaded: true,
                items: json.clubs,
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
                       </li>
                   ))}
               </ul>
           
            );
        }
    }
}

export default Clubs;