import React from "react";
import Draggable from "react-draggable";

import useStyles from './index.styles';
import AppHeader from "../../components/AppHeader";
import { Sidebar } from './Sidebar/index'
import { DodoInbox } from './Inbox/index';
import { DodoTracking } from './Tracking/index';
import { DodoDashboard } from "./Dashboard/index"; 
import { DodoWorkers } from "./Workers/index";
import { DodoLogs } from './Logs/index';

export const DodoApp: React.FC<{
    setActiveApps: any;
    activeApps: any;
    setMinimizedApps: any;
    minimizedApps: any;
    addSystemNotification: any;
}> = (props) => {
    const classes = useStyles();

    const [selectedPage, setSelectedPage] = React.useState('inbox-page')

    return (
        <Draggable handle="#app-header">
            <div className={classes.container} style={{ display: props.activeApps.showDodoApp && !props.minimizedApps.DodoAppMinimized ? '' : 'none' }}>
                <AppHeader appName="" color="#24314d"
                onClose={
                    () => {
                            props.setActiveApps(prevState => ({
                              ...prevState,
                              showDodoApp: false
                          }));
                  }}
                  onMinimize={
                    () => {
                            props.setMinimizedApps(prevState => ({
                              ...prevState,
                              DodoAppMinimized: true
                            }));
                    }}
                ></AppHeader>

                <div className={classes.wrapper}>
                    <Sidebar selectedpage={selectedPage} setselectedpage={setSelectedPage}></Sidebar>
                    
                    {selectedPage === 'inbox-page' && <DodoInbox></DodoInbox>}
                    {selectedPage === 'tracking-page' && <DodoTracking></DodoTracking>}
                    {selectedPage === 'dashboard-page' && <DodoDashboard></DodoDashboard>}
                    {selectedPage === 'workers-page' && <DodoWorkers></DodoWorkers>}
                    {selectedPage === 'logs-page' && <DodoLogs></DodoLogs>}
                </div>

            </div>
        </Draggable>
    )
}