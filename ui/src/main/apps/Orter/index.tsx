import React from 'react';
import Draggable from 'react-draggable';
import { Button } from '@mui/material'

import useStyles from './index.styles';
import AppHeader from '../../components/AppHeader';

import { StrainList } from './strains/index'

export const HerbApp: React.FC<{
    setActiveApps: any;
    activeApps: any;
    setMinimizedApps: any;
    minimizedApps: any;
    addSystemNotification: any;
}> = (props) => {
    const classes = useStyles();

    const [plants, setPlants] = React.useState([
        {
            name: 'Silence',
            progress: {
                current: 'Unknown',
                next: 'Stranger',
                amount: '71',
            },
            n: '0.6',
            p: '0.6',
            k: '0.6',
        }
    ])

    return (
        <Draggable handle="#app-header">
            <div className={classes.herbs} style={{ display: props.activeApps.showHerbsApp && !props.minimizedApps.HerbsAppMinimized ? '' : 'none' }}>
                <AppHeader appName="The Herb Garden" color="#232426" 
                 onClose={
                    () => {
                            props.setActiveApps(prevState => ({
                              ...prevState,
                              showHerbsApp: false
                          }));
                  }}
                  onMinimize={
                    () => {
                            props.setMinimizedApps(prevState => ({
                              ...prevState,
                              HerbsAppMinimized: true
                            }));
                    }}
                ></AppHeader>

                <div className={classes.herbsContainer}>

                    <div className={classes.herbsHeading}>
                        <div className={classes.herbsTabSection}>
                            <Button style={{ fontSize: 11, borderRadius: 5 }} className={classes.herbsTabBtn}>My Strains</Button>
                        </div>
                    </div>

                    <section className={classes.herbStrainsList}>
                        {plants && plants.map((plant, index) => (
                            <StrainList name={plant.name} progress={plant.progress} n={plant.n} p={plant.p} k={plant.k}></StrainList> 
                        ))}
                    </section>

                </div>

            </div>
        </Draggable>
    )
}