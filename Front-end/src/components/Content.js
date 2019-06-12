import React, { Component } from "react";
import styled from 'styled-components';
import Popup from '../components/Popup';
import Players from '../components/page/Players';
import Score from '../components/page/Score';
import Clubs from '../components/page/Clubs';
import MatchCont from '../components/page/MatchCont';
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import ls from 'local-storage';

let Head = styled.div`
    background: white;
    width: 100hv;
    height: 70px;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
`;
let Cont = styled.div`
    border: 1px solid #16ecff78;
    color: #9c9381;
    display: flex;
    margin: 2% 20%;
    justify-content: center;
    background: white;
    width: 60%;
    height: 79.5%;
`;
class Content extends Component {
    state = {
        show: false,
    };
    render() {
        let {show} = this.state;
        return (<>
            <Head>
            <InnerDiv 
               bg="#e54c85"
                 htitle="Matches"
                 popupContent={<MatchCont/>}
                />
                 <InnerDiv 
               bg="#e54c85"
                 htitle="Players"
                 popupContent={<Players/>}/>
                 <InnerDiv 
               bg="#e54c85"
                 htitle="Football Clubs"
                 popupContent={<Clubs/>}/>
                 <InnerDiv 
               bg="#e54c85"
                 htitle="Score"
                 popupContent={<Score/>}/>
            </Head>
            <Cont>
               
            </Cont>
            </>
            );
        }
    }
class InnerDiv extends Component {

        state = {
            show: false,
        };
        render() {
            let { show } = this.state;
            let { htitle, bg, popupContent} = this.props;
            return (
                <>
                  <div className='inner' style={{background: bg, height: "70px", border: "1px solid green", display: "flex"}}>
                   <div className="textSect">
                      <h2>{htitle}</h2>
                      <Popup
                            title={htitle}
                            hidePopup={() => this.setState({ show: false })}
                            showPopup={show}
                              >
                             {popupContent}
                          </Popup>
                       </div>
                       <button
                       text='подробнее'
                       onClick={
                       () => 
                           this.setState({ show: true })
                         }
                            />
                     </div> 
                 </>
            );
        }
    }

export default Content;


