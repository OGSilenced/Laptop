import React from "react";
import Draggable from "react-draggable";
import { Typography, Button } from '@mui/material';
import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';

import useStyles from './index.styles';
import AppHeader from "../../components/AppHeader";

export const MethApp: React.FC<{
    setActiveApps: any;
    activeApps: any;
    setMinimizedApps: any;
    minimizedApps: any;
    addSystemNotification: any;
}> = (props) => {
    const classes = useStyles();

    const linearProgressProps: LinearProgressProps = {
        variant: "determinate",
        value: 50, 
        classes: {
          root: classes.methProgressionParent,
          bar: classes.methProgression,
        },
      };

    return (
        <Draggable handle="#app-header">
            <div className={classes.methApp} style={{ display: props.activeApps.showMethApp && !props.minimizedApps.MethAppMinimized ? '' : 'none' }}>
                <AppHeader appName="The Blue Plaza" color="1C1C24" 
                onClose={
                    () => {
                            props.setActiveApps(prevState => ({
                              ...prevState,
                              showMethApp: false
                          }));
                  }}
                  onMinimize={
                    () => {
                            props.setMinimizedApps(prevState => ({
                              ...prevState,
                              MethAppMinimized: true
                            }));
                    }}
                ></AppHeader>

                <div className={classes.container}>

                    <div className={classes.tabsSection}>
                        <div className={classes.tabsBtns}>
                            <Button style={{ fontSize: 10, borderRadius: 5, marginRight: '1rem' }} className={classes.tabBtn}>Next available job: Unavailable</Button>
                            <Button style={{ fontSize: 10, borderRadius: 5 }} className={classes.tabBtn}>Next Personal delivery: Unavailable</Button>
                        </div>
                    </div>

                    <div className={classes.tabsSection}>
                        <div className={classes.tabsBtns}>
                            <Button style={{ fontSize: 10, borderRadius: 5 }} className={''.concat(classes.tabBtn, ' ').concat(classes.active)}>Home</Button>
                        </div>
                    </div>

                    <div className={classes.progressSection}>
                        <Typography style={{ fontSize: 12, color: '#fff' }} className={classes.levelText}>Rookie</Typography>
                        <LinearProgress {...linearProgressProps} />
                        <Typography style={{ fontSize: 12, color: '#fff' }} className={classes.levelText}>Average</Typography>
                    </div>


                </div>

            </div>
        </Draggable>
    )
}