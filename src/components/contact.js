import React from "react";

import "./contact.css";




const isOnline = true;

function Contact(props) {
    const name = "Jane Doe";
    const avatar =
  "https://image.freepik.com/vecteurs-libre/bonbon-rainbow-lolipop-blanc_97886-2011.jpg";
  
  
  
  return (
    <div className="Contact">
      <img alt="lolipop" className="avatar" src={avatar} />
      <div>
        <h3 className="name">{name}</h3>
        <div className="status">
          <div
            className={isOnline === true ? "status-online" : "status-offline"}
          ></div>
          <p className="status-text">
            {isOnline === true ? "online" : "offline"}
          </p>
          <div className="online"></div>
        </div>
      </div>
    </div>
  );
}
export default Contact;