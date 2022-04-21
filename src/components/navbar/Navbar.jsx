import React, { Component } from 'react';
import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <div className='wrapper'>
                    <div className='search'>
                        <input type="text" name="search" placeholder='Search...' />
                        <SearchIcon />
                    </div>
                    <div className='items'>
                        <div className='item'>
                            <LanguageIcon />
                            English
                        </div>
                        <div className='item'>
                            <DarkModeOutlinedIcon />
                        </div>
                        <div className='item'>
                            <FullscreenExitOutlinedIcon />
                        </div>
                        <div className='item'>
                            <NotificationsNoneOutlinedIcon />
                            <div className='counter'>1</div>
                        </div>
                        <div className='item'>
                            <ChatBubbleOutlineOutlinedIcon />
                            <div className='counter'>2</div>
                        </div>
                        <div className='item'>
                            <ListOutlinedIcon />
                        </div>
                        <div className='item'>
                            <img src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg" alt='' className='avatar'/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;