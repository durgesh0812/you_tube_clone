import React , {useState} from 'react';
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';

function Header() {
    const [inputSearch,setinputsearch]=useState('');

    return (
        <div className="header">

           <div className="header__left">
            <MenuIcon />

            <Link to="/"><img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="" /></Link>
            
            
             </div>

             <div className="header__input">
             <input onChange={e=>setinputsearch(e.target.value)} value={inputSearch} type="text" placeholder="search"/>
             <Link to={`/search/${inputSearch}`}><SearchIcon className="header__inputButton" /></Link>
             
             </div>

             <div className="header__right">
             <VideoCallIcon className="header__icon"/>
             <AppsIcon className="header__icon" />
             <NotificationsActiveIcon className="header__icon"/>
             <Avatar />
             </div>

             
            
        </div>
    )
}

export default Header
