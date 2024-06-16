import React from 'react';
import Draggable from "react-draggable";
import { Typography } from '@mui/material';

import AppHeader from '../../components/AppHeader/index'
import useStyles from './index.styles'

export const ANALyzerApp: React.FC<{
    setActiveApps: any;
    activeApps: any;
    setMinimizedApps: any;
    minimizedApps: any;
}> = (props) => {
    const classes = useStyles();

    const [activeTab, setActiveTab] = React.useState('Garlic')
    const [seeds, setSeeds] = React.useState([
        {
            name: 'Garlic'
        },
        {
            name: 'Wheat'
        },
        {
            name: 'Tomato'
        }
    ])

    const getTextClassName = (seed) => {
        return activeTab === seed ? ''.concat(classes.seedTabText, ' ').concat(classes.active) : classes.seedTabText   
    }

    return (
        <Draggable handle="#app-header" position={null}>
            <div className={classes.seedApp} style={{ display: props.activeApps.showSeedAnalyzerApp && !props.minimizedApps.SeedAnalyzerAppMinimized ? '' : 'none' }}>
                <AppHeader appName="ANALyzer" color="#2C2C2C" textColor="#D9D9D9" 
                onClose={
                    () => {
                            props.setActiveApps(prevState => ({
                              ...prevState,
                              showSeedAnalyzerApp: false
                          }));
                  }}
                  onMinimize={
                    () => {
                            props.setMinimizedApps(prevState => ({
                              ...prevState,
                              SeedAnalyzerAppMinimized: true
                            }));
                    }
                  }></AppHeader>

                <div className={classes.seedAppContainer}>
                    <section className={classes.seedTabs}>
                    {seeds.map((seed, index) => (
                        <div className={classes.seedTab} key={index}>
                            <Typography className={getTextClassName(seed.name)} onClick={() => setActiveTab(seed.name)}>{seed.name}</Typography>
                        </div>
                    ))}
        
                    </section>

                    <section className={classes.seedList}>
                        e
                    </section>

                </div>

            </div>
        </Draggable>
    )
}