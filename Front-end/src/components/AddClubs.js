import React, { Component } from "react";
import styled from 'styled-components';
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import api from '../config/api';
import ls from 'local-storage';

let AllAdds = styled.div`
    width:  fit-content;
    height: fit-content;
    border: 1px solid;
    display: flex;
    margin-top: 80px;
`;

let AddClubs = styled.div`
    width: 215px;
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
    clubs: '',
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
      let response = await api.post('clubs/register', {
        clubs: this.state.clubs,
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
                <AllAdds ref={this.notificationDOMRef}>
                 <AddClubs  err={this.state.err}>
                        <form  onSubmit={(e) => {this.register(e)}}>
                        <div className="input-group">
                          <span>Club</span>
                          <input type="text"  onChange={(e) => {this.bind('clubs', e)}} value={this.state.clubs} required/>
                        </div>
                        <input className="submit" type="submit" value="Add"/>
                        </form>
                 </AddClubs>
                </AllAdds>
            );
        }
    }

export default Admin;