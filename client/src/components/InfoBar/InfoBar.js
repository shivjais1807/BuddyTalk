import React from "react";

import './InfoBar.css';

const InfoBar = ({ room }) => (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src="https://img.icons8.com/ios/50/000000/online.png" alt="online" />
                <h3>Room: {room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src="https://img.icons8.com/ios/50/000000/delete-sign.png" alt="close" /></a>
            </div>
        </div>
)


export default InfoBar;