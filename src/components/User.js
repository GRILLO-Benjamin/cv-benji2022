import React from "react";
import "./User.css";
import HomeIcon from "@mui/icons-material/Home";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function User() {
  return (
    <div className="user">
      <img src="./images/avatar.jpg" alt="" className="user__avatar" />
      <h1 classname="user__name">Ben Grillo</h1>
      <p className="user__profession">
        Hospitality Management / Web Development
      </p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon /> 252 Chemin de Bois Plan <br />
          42190 St Nizier sous Charlieu
        </p>
        <p className="user__info">
          <WhatsAppIcon /> +86 17740802287
        </p>
        <p className="user__info">
          <AlternateEmailIcon />
          <a href="mailto:benjamingrillo@yahoo.com">benjamingrillo@yahoo.com</a>
        </p>
        <p className="user__info">
          <LocationOnIcon />
          Birth place : Roanne
        </p>
      </div>
    </div>
  );
}

export default User;
