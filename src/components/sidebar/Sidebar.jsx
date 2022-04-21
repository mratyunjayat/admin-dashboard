import React, { Component } from 'react';
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link } from "react-router-dom"

class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <div className='top'>
                    <span className='logo'>Home</span>
                </div>
                <hr />
                <div className='center'>
                    <ul>
                        <p className='title'>MAIN</p>
                        <li><DashboardIcon className='icon' />
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <p className='title'>LISTS</p>
                        <li>
                            <PersonOutlineIcon className='icon' />
                            <Link to="/users" style={{ textDecoration: "none" }}>
                                <span>Users</span>
                            </Link>
                        </li>
                        <li>
                            <Inventory2Icon className='icon' />
                            <Link to="/products" style={{ textDecoration: "none" }}>
                                <span>Products</span>
                            </Link>
                        </li>
                        <li><ProductionQuantityLimitsOutlinedIcon className='icon' /><span>Orders</span></li>
                        <li><LocalShippingOutlinedIcon className='icon' /><span>Delivery</span></li>
                        <p className='title'>USEFUL</p>
                        <li><AssessmentOutlinedIcon className='icon' /><span>Statistics</span></li>
                        <li><NotificationsActiveOutlinedIcon className='icon' /><span>Notification</span></li>
                        <p className='title'>SERVICES</p>
                        <li><DvrOutlinedIcon className='icon' /><span>System Health</span></li>
                        <li><PsychologyIcon className='icon' /><span>Logs</span></li>
                        <li><SettingsOutlinedIcon className='icon' /><span>Settings</span></li>
                        <p className='title'>USERS</p>
                        <li><AccountBoxIcon className='icon' /><span>Profile</span></li>
                        <li><LogoutIcon className='icon' /><span>Logout</span></li>
                    </ul>
                </div>
                <div className='bottom'>
                    <div className="coloroptions" />
                    <div className="coloroptions" />
                </div>
            </div>
        );
    }

}

export default Sidebar;