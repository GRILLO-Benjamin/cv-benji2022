import React from "react"
import './User.css';
import HomeIcon from '@mui/icons-material/Home';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import LocationOnIcon from '@mui/icons-material/LocationOn';


function User() 
{
    return (
    <div className="user">
        <img src="./images/avatar.jpg" alt="" className="user__avatar"/>
        <h1 classname="user__name">Ben Grillo</h1>
        <p className="user__profession">Développeur Web</p>
        <div className="user__infos">
            <p className="user__info">
                <HomeIcon /> 252 Chemin de Bois Plan <br/>
                42190 St Nizier sous Charlieu
            </p>
            <p className="user__info">
                <PhoneAndroidIcon />
                <a href="tel:+33670268930">06 70 26 89 30</a>
            </p>
            <p className="user__info">
                <AlternateEmailIcon />
                <a href="mailto:benjamingrillo@yahoo.com">benjamingrillo@yahoo.com</a>
            </p>
            <p className="user__info">
                <FileOpenIcon />
                <a href="https://benfiles.herokuapp.com/" target="_blank">Portfolio : https://benfiles.herokuapp.com/</a>
            </p>
            <p className="user__info">
                <LocationOnIcon />
                Lieu de Naissance : Roanne
            </p>
        </div>
    </div>
    )
}

export default User