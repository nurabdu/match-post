import React, { Component } from "react";
import styled from 'styled-components';
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import ls from 'local-storage';

let Cont = styled.div`
    border: 1px solid #16ecff78;
    color: #9c9381;
    display: flex;
    margin: 0px 20%;
    justify-content: center;
    background: white;
    width: 60%;
    height: 79.5%;
`;

class Content extends Component {

    render() {
        let {bg, text} = this.props;
        return (
            <Cont>
                
            </Cont>
            );
        }
    }

export default Content;