import React, { useState } from 'react';
import useStyles from './index.styles';
import { Typography, Zoom } from '@mui/material';
import '../../index.css';

export const Notifications:  React.FC<{
    systemNotifications: any;
    setSystemNotifications: any;
}> = (props) => {
    const classes = useStyles();

    // var _0x18b3e5 = new Audio('https://freesound.org/data/previews/434/434379_6965625-lq.mp3');
    // _0x18b3e5.volume = 0.35;
    // _0x18b3e5.play();
    const notis = props.systemNotifications.filter(noti => noti.show);


    return(
        <>
            {notis && notis.length > 0 ?
                notis.map((noti, index) => {
                     return (
                            <div className={classes.systemNotification} style={{ transition: '500ms ease-in-out', transform: 'translate('.concat(noti.show ? '0%' : '150%',')')  }} key={index}>

                            <img src={noti.icon} alt="thumbnail" className={classes.thumbnail}></img>
                            <div className={classes.info}>
                                <Typography variant="h1" style={{ fontSize: 15 }} className={classes.systemNotificationTitle}>{noti.title}</Typography>
                                <Typography variant="body1" style={{ fontSize: 15 }} className={classes.systemNotificationDesc}>{noti.message}</Typography>
                            </div>
                
                        </div>
                    )
            }) : null}
        </>

    )
}