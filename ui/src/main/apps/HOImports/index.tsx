import React from 'react';
import Draggable from 'react-draggable';
import { Typography, Button } from '@mui/material'

import useStyles from './index.styles';
import AppHeader from '../../components/AppHeader';

import { StickShop } from './sticks/index'

export const HOImports: React.FC<{
    setActiveApps: any;
    activeApps: any;
    setMinimizedApps: any;
    minimizedApps: any;
    addSystemNotification: any;
}> = (props) => {
    const classes = useStyles();
    const [activeTab, setActiveTab] = React.useState('vehicle_shop')

    const getTabButtonClassName = (tab) => {
        return activeTab === tab ? 'hoimportsActiveBtn' : 'hoimportsTabBtn'
    }

    return (
        <Draggable handle="#app-header">
            <div className={classes.hoimports} style={{ display: props.activeApps.showHOImportApp && !props.minimizedApps.HOImportAppMinimized ? '' : 'none' }}>
                <AppHeader appName="HO Exports" color="#31394D"
                 onClose={
                    () => {
                            props.setActiveApps(prevState => ({
                              ...prevState,
                              showHOImportApp: false
                          }));
                  }}
                  onMinimize={
                    () => {
                            props.setMinimizedApps(prevState => ({
                              ...prevState,
                              HOImportAppMinimized: true
                            }));
                    }}
                 ></AppHeader>
                <div className={classes.hoimportsContainer}>
                    <div className={classes.hoimportsHeading}>
                        <div className={classes.hoimportsTabSection}>
                            <Button size="small" style={{ borderRadius: 50 }} className={classes[getTabButtonClassName('vehicle_shop')]} onClick={() => setActiveTab('vehicle_shop')}>Vehicle Shop</Button>
                            <Button size="small" style={{ borderRadius: 50 }} className={classes[getTabButtonClassName('stick_shop')]} onClick={() => setActiveTab('stick_shop')}>Sticks Shop</Button>
                        </div>
                    </div>
                    {activeTab === 'stick_shop' && <StickShop></StickShop>}
                </div>

            </div>
        </Draggable>
    )
}