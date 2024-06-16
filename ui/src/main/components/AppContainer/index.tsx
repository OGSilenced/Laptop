import React from 'react';
import { Typography } from '@mui/material'
import useStyles from './index.styles';


export const AppContainer: React.FC<{
    applications: any;
}> = (props) => {
    const classes = useStyles();


    return (
        <>
            <div className={classes.column}>
                {props.applications.filter(app => app.column === 1).map((app, index) => {
                    return (
                        <div className={classes.desktopIconBox} key={index} onClick={() => app.open()}>
                          {app.icon}
                        <Typography variant="h1" className={classes.iconTitle} style={{ fontSize: 12, color: 'on' === localStorage.getItem('useWhiteIconNames') ? '#fff' : '#000'}}>{app.title}</Typography>
                    </div>
                    )
                }
                )}
            </div>

            <div className={classes.column}>
                {props.applications.filter(app => app.column === 2).map((app, index) => {
                    return (
                        <div className={classes.desktopIconBox} key={index} onClick={() => app.open()}>
                          {app.icon}
                        <Typography variant="h1" className={classes.iconTitle} style={{ fontSize: 12, color: 'on' === localStorage.getItem('useWhiteIconNames') ? '#fff' : '#000'}}>{app.title}</Typography>
                    </div>
                    )
                }
                )}
            </div>
        </>
    )
}