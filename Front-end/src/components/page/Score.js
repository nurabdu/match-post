import React, { Component } from "react";
import styled from 'styled-components';
import "react-notifications-component/dist/theme.css";

class Score extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3000/score/get`)
        .then(response => response.json())
        .then(json => { 
            this.setState({
                isLoaded: true,
                items: json.score,
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
                          {item.firstScore}
                          {item.secondScore}
                       </li>
                   ))}
               </ul>
            );
        }
    }
}

export default Score;