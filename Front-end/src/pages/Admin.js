import React, { Component } from "react";
import styled from 'styled-components';
import AddScore from '../components/AddScore';
import AddMatches from '../components/AddMatches';
import AddClubs from '../components/AddClubs';
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import api from '../config/api';
import ls from 'local-storage';

let AdminCont = styled.div`
    margin: 0;
    width: 100%;
    height: 100vh;
    background: url('./images/admin-bg.png');
    background-size: cover;
    display: flex;
`;

let AllAdds = styled.div`
    width:  fit-content;
    height: fit-content;
    border: 1px solid;
    display: flex;
    margin-top: 80px;
`;
let PlayersAdd = styled.div`
    width: 260px;
    height: fit-content;
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: right;
`;

class Admin extends Component {
  state = {
    goalkeeper: '',
    defender1: '',
    defender2: '',
    defender3: '',
    defender4: '',
    midfielder1: '',
    midfielder2: '',
    midfielder3: '',
    midfielder4: '',
    attack1: '',
    attack2: '',
    err: false,
    errMessage: ''
};

constructor(props) {
  super(props);
  this.notificationDOMRef = React.createRef();
}
addNotification = () => {
  this.notificationDOMRef.current.addNotification({
      title: " Error ",
      message: this.state.errMessage,
      type: "danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 2000 },
      dismissable: { click: true }
  });
};

bind = (field, e) => {
  this.setState({
      [field]: e.target.value
  });
};

register = async (e) => {
  e.preventDefault();
  try {
      let response = await api.post('players/register', {
          goalkeeper: this.state.goalkeeper,
          defender1: this.state.defender1,
          defender2: this.state.defender2,
          defender3: this.state.defender3,
          defender4: this.state.defender4,
          midfielder1: this.state.midfielder1,
          midfielder2: this.state.midfielder2,
          midfielder3: this.state.midfielder3,
          midfielder4: this.state.midfielder4,
          attack1: this.state.attack1,
          attack2: this.state.attack2
      });
      this.setState({
          err: false
      });

  } catch(e) {
      if(e.response.status === 400) {
          this.setState({
              err: true,
              errMessage: e.response.data.message
          });
          this.addNotification();
      }
    }
};
    render() {
        return (
            <AdminCont>
                <h1>Admin Page</h1>
                <AllAdds ref={this.notificationDOMRef}>
                <PlayersAdd  err={this.state.err}>
                    <form onSubmit={(e) => {this.register(e)}}>
                 <div className="input-group">
                   <span>Goalkeeper</span>
                   <input type="text" onChange={(e) => {this.bind('goalkeeper', e)}} value={this.state.goalkeeper} required/>
                 </div>
                 <div className="input-group">
                  <span>Defender1</span>
                  <input type="text" onChange={(e) => {this.bind('defender1', e)}} value={this.state.defender1} required/>
                </div>
                <div className="input-group">
                  <span>Defender2</span>
                  <input type="text" onChange={(e) => {this.bind('defender2', e)}} value={this.state.defender2} required/>
                </div>
                <div className="input-group">
                  <span>Defender3</span>
                  <input type="text" onChange={(e) => {this.bind('defender3', e)}} value={this.state.defender3} required/>
                </div>
                <div className="input-group">
                  <span>Defender4</span>
                  <input type="text" onChange={(e) => {this.bind('defender4', e)}} value={this.state.defender4} required/>
                </div>
                <div className="input-group">
                  <span>Midfielder1</span>
                  <input type="text" onChange={(e) => {this.bind('midfielder1', e)}} value={this.state.midfielder1} required/>
                </div>
                <div className="input-group">
                  <span>Midfielder2</span>
                  <input type="text" onChange={(e) => {this.bind('midfielder2', e)}} value={this.state.midfielder2} required/>
                </div>
                <div className="input-group">
                  <span>Midfielder3</span>
                  <input type="text" onChange={(e) => {this.bind('midfielder3', e)}} value={this.state.midfielder3} required/>
                </div>
                <div className="input-group">
                  <span>Midfielder4</span>
                  <input type="text" onChange={(e) => {this.bind('midfielder4', e)}} value={this.state.midfielder4} required/>
                </div>
                <div className="input-group">
                  <span>Attack1</span>
                  <input type="text" onChange={(e) => {this.bind('attack1', e)}} value={this.state.attack1} required/>
                </div>
                <div className="input-group">
                  <span>Attack2</span>
                  <input type="text" onChange={(e) => {this.bind('attack2', e)}} value={this.state.attack2} required/>
                </div>
                <input className="submit" type="submit" value="Add"/>
                    </form>
                </PlayersAdd>
                </AllAdds>
                <AddScore/>
                <AddMatches/>
                <AddClubs/>
            </AdminCont>
            );
        }
    }

export default Admin;