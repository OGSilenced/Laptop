import React, { useState } from 'react';
import useStyles from './index.styles';
import Typography from '@mui/material/Typography';
import '../../index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const NotificationsContainer:  React.FC<{
    setActiveApps: any;
    activeApps: any;
    systemNotifications: any;
    setSystemNotifications: any;
}> = (props) => {
    const classes = useStyles();

    const notificationsPanelRef = React.useRef(null);

    React.useEffect(() => {

        document.addEventListener('mousedown', function(event) {

            notificationsPanelRef.current &&
            !notificationsPanelRef.current.contains(event.target) &&
            props.setActiveApps(prevState => ({
                ...prevState,
                showNotificationPanel: false
            }));

        });
        
    }, []);

    const notis = props.systemNotifications

    return(
        <div className={classes.notificationPanel} ref={notificationsPanelRef} style={{ transition: '500ms ease-in-out', transform: 'translate('.concat(props.activeApps.showNotificationPanel ? '0%' : '150%',')'),  }}>
            <Typography variant="h1" style={{ color: '#fff', fontSize: 20 }} className={classes.headerTitle}>Notifications</Typography>

            <div className={classes.notificationsList}>
                
                {notis && notis.length > 0 ?
                    notis.map((noti, index) => {
                        return (
                            <div className={classes.notification} key={index}>
                            <img src={noti.icon} alt="thumbnail" className={classes.thumbnail}></img>
                                <div className={classes.info}>
                                <FontAwesomeIcon
                                    className={classes.exitIcon}
                                    icon={faTimes}
                                    size="1x"
                                    style={{
                                        color: '#fff',
                                        cursor: 'pointer',
                                    }}
                                    onClick={
                                        () => {

                                            props.setSystemNotifications(prevNotifications =>
                                                prevNotifications.filter(notification => notification.id !== noti.id)
                                            );
                                        }
                                    }
                                />
                                <Typography variant="h1" style={{ color: '#fff', fontSize: 13 }} className={classes.title}>{noti.title}</Typography>
                                
                                <Typography variant="body1" style={{ fontSize: 14 }} className={classes.desc}>{noti.message}</Typography>
                            </div>

                        </div>
                        )
                    }) : null}

            </div>

        </div>
    )
}