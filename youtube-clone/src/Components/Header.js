import React from 'react';
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon />
                <img 
                className="header_logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1200px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="" />
            </div>
            <div className="header_middle">
                <input type="text" placeholder="search" />
                <SearchIcon className="inputButton" />
            </div>
            <div className="header_right">
                <VideoCallIcon className="header_right_icons" />
                <AppsIcon className="header_right_icons" />
                <NotificationsIcon className="header_right_icons" />
            </div>
        </div>
    )
}

export default Header;
