import React from 'react';
import { Typography, Button } from '@mui/material';
import useStyles from './index.styles'
import { useNavigationState } from "../../atoms/navigation";

const AppHeader:  React.FC<{
    appName: string;
    color: any;
    textColor?: any;
    onClose: any;
    onMinimize: any;
    //Application: string;
    //MinimizedApps: any;
    }> = (props) => {
    const classes = useStyles();
    const [navigationState, setNavigationState] = useNavigationState();

    // const handleMinimizeApp = () => {
    //     setNavigationState({ path: 'Home' })
    //     props.MinimizedApps[props.Application] = true
    // }

    // const handleCloseApp = () => {
    //     setNavigationState({ path: 'Home' })
    //     props.MinimizedApps[props.Application] = false
    // }

    return (
        <section id="app-header" className={classes.appControls} style={{ backgroundColor: props.color, boxShadow: 'hsl(0deg 0% 0% / 8%) 0px -1px 5px 4px' }}>
            <Typography variant="h1" className={classes.appControlsTitle} style={{ color: props.textColor || '#FFF', fontSize: 13 }}>{props.appName}</Typography>
            <div className={classes.appControlButtons}>
                <Button variant="contained" size="small" className={classes.appControlMinimizeBtn} onClick={props.onMinimize}></Button>
                <Button variant="contained" size="small" className={classes.appControlCloseBtn} onClick={props.onClose}></Button>
            </div>
        </section>
    )
}

export default AppHeader