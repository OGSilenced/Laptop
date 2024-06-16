import React from 'react';
import { IconType } from 'react-icons';
import { FaInbox, FaChartLine, FaUserAlt, FaTruckLoading, FaClipboardList } from 'react-icons/fa';
import { Typography, CircularProgress } from '@mui/material';

import useStyles from './index.styles';
import { LogoRef } from './logo/index';

export const Sidebar: React.FC<{
    selectedpage: any;
    setselectedpage: any;
}> = (props) => {
    const classes = useStyles();

    const [selectedPage, setSelectedPage] = React.useState('inbox-page')
    const [isSignedIn, setIsSignedIn] = React.useState(false)
    const [isTogglingActivity, setIsTogglingActivity] = React.useState(false)

    const [dodoPages] = React.useState([
        {
            'id': 'inbox-page',
            'icon': FaInbox,
            'text': 'Inbox',
            'show': true
        },
        {
            'id': 'dashboard-page',
            'icon': FaChartLine,
            'text': 'Dashboard',
            'show': true
            //'show': _0x1b34a4.includes('dodoApp:showManagement')
        },
        {
            'id': 'workers-page',
            'icon': FaUserAlt,
            'text': 'Workers',
            'show': true
           // 'show': _0x1b34a4.includes('dodoApp:showManagement')
        },
        {
            'id': 'tracking-page',
            'icon': FaTruckLoading,
            'text': 'Tracking',
            'show': true
        },
        {
            'id': 'logs-page',
            'icon': FaClipboardList,
            'text': 'Logs',
            'show': true
           // 'show': _0x1b34a4.includes('dodoApp:showManagement')
        }
    ])

    const toggleSignedOn = (active) => {
        setIsTogglingActivity(true);

        setTimeout(() => {
            setIsTogglingActivity(false);
            setIsSignedIn(active);
        }, 2500);
    }

        return (
        <div className={classes.sidebar}>
            <LogoRef className={classes.logo}></LogoRef>

            <ul className={classes.menu}>
                {dodoPages.map((page, index) => (
                    page.show && 
                    <li className={props.selectedpage === page.id ? classes.menuItemActive : classes.menuItem} key={page.id} onClick={() => props.setselectedpage(page.id)}>
                        <page.icon className={classes.icon}></page.icon>
                        <Typography variant="h1" className={classes.menuText}>{page.text}</Typography>
                    </li>
                ))}
            </ul>

            {isSignedIn ? 
            <div className={classes.signInBtn} onClick={() => toggleSignedOn(false)}>
                {isTogglingActivity ? <CircularProgress size={15} style={{ color: '#9CFFFF'}}></CircularProgress> : 
                <Typography variant="h1" style={{ color: '#fff' }} className={classes.menuText}>Sign Out</Typography>
                }
            </div>
            : 
            <div className={classes.signInBtn} onClick={() => toggleSignedOn(true)}>
                {isTogglingActivity ? <CircularProgress size={15} style={{ color: '#9CFFFF'}}></CircularProgress> : 
                <Typography variant="h1" style={{ color: '#fff' }} className={classes.menuText}>Sign In</Typography>
                }
            </div>}

            

        </div>
    )
}