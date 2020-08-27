import React from 'react'
import './Header.css';
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import FlashOnIcon from "@material-ui/icons/FlashOn"
import LiveTvIcon from "@material-ui/icons/LiveTv"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import PersonalOutlineIcon from "@material-ui/icons/PersonalVideoOutlined"

function Header() {
    return (
        <div className="header">
            <h1>I am a header</h1>
            <div className="header__icons">
                <div className="header__icon" >
                    <HomeIcon />
                    <p>Home</p>
                </div>
                <div className="header__icon" >
                    <FlashOnIcon />
                    <p>Trending</p>
                </div>
                <div className="header__icon" >
                    <LiveTvIcon />
                    <p>LiveTv</p>
                </div>
                <div className="header__icon" >
                    <VideoLibraryIcon />
                    <p>Collections</p>
                </div>
                <div className="header__icon" >
                    <SearchIcon />
                    <p>Search</p>
                </div>
                <div className="header__icon" >
                    <PersonalOutlineIcon />
                    <p>Account</p>
                </div>
            </div>
            <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" 
                alt="" 
            />
        </div>
    )
}

export default Header
