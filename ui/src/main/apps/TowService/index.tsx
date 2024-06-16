import React from "react";
import Draggable from "react-draggable";
import { Typography, Button } from '@mui/material';
import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';

import useStyles from './index.styles';
import AppHeader from "../../components/AppHeader";

export const TowService: React.FC<{
    setActiveApps: any;
    activeApps: any;
    setMinimizedApps: any;
    minimizedApps: any;
    addSystemNotification: any;
}> = (props) => {
    const classes = useStyles();
    const [activeTab, setActiveTab] = React.useState('home');
    const [towProgress, setTowProgress] = React.useState(
        {
            current: 'Amateur',
            next: 'Apprentice',
            amount: 25
        }
    )

    const linearProgressProps: LinearProgressProps = {
        variant: "determinate",
        value: towProgress.amount, 
        classes: {
          root: classes.towProgressionParent,
          bar: classes.towProgression,
        },
      };

    return (
        <Draggable handle="#app-header">
            <div className={classes.tow} style={{ display: props.activeApps.showTowApp && !props.minimizedApps.TowAppMinimized ? '' : 'none' }}>
                <AppHeader appName="Towing Services" color="2D2735" 
                onClose={
                    () => {
                            props.setActiveApps(prevState => ({
                              ...prevState,
                              showTowApp: false
                          }));
                  }}
                  onMinimize={
                    () => {
                            props.setMinimizedApps(prevState => ({
                              ...prevState,
                              TowAppMinimized: true
                            }));
                    }}
                ></AppHeader>

                <div className={classes.towContainer}>

                    <div className={classes.towHeading}>
                        <div className={classes.towTabSection}>
                            <Button style={{ fontSize: 11, borderRadius: 5 }} className={classes[activeTab === 'home' ? 'towActiveBtn' : 'towTabBtn']}>Home</Button>
                        </div>
                    </div>

                    <div className={classes.progressSection}>
                        <Typography style={{ fontSize: 12, color: '#fff' }} className={classes.levelText}>{towProgress.current}</Typography>
                        <LinearProgress {...linearProgressProps} />
                        <Typography style={{ fontSize: 12, color: '#fff' }} className={classes.levelText}>{towProgress.next}</Typography>
                    </div>

                    <div className={classes.towContent}>
                        <Typography className={classes.bigText}>Coming Soon</Typography>
                    </div>

                </div>



            </div>
        </Draggable>
    )
}