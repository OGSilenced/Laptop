import React, { useState } from 'react'
import Draggable from "react-draggable";
import useStyles from './index.styles';
import AppHeader from '../../components/AppHeader/index';
import { GroupInfo } from './GroupInfo/index';
import { Members } from './Members/index';
import { Progression } from './Progression/index';
import { Staff } from './Staff/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const GangApp: React.FC<{
    setActiveApps: any;
    activeApps: any;
  }> = (props) => {
    const classes = useStyles();

    const [activeTab, setActiveTab] = useState('groupInfo');

    return (
        <Draggable
        handle="#app-header"
        >
        <div className={classes.container} style={{ display: props.activeApps.showStreetApp ? '' : 'none'}}>
            <header className={classes.menu} id="app-header">
                <ul className={classes.menuItems}>
                    <p className={ 'groupInfo' === activeTab ? classes.menuItemActive : classes.menuItem } onClick={() => setActiveTab('groupInfo')}>Group Info</p>
                    <p className={ 'progression' === activeTab ? classes.menuItemActive : classes.menuItem } onClick={() => setActiveTab('progression')}>Progression</p>
                    <p className={ 'members' === activeTab ? classes.menuItemActive : classes.menuItem } onClick={() => setActiveTab('members')}>Members</p>
                    <p className={ 'staff' === activeTab ? classes.menuItemActive : classes.menuItem } onClick={() => setActiveTab('staff')}>Staff</p>
                </ul>
                <FontAwesomeIcon
                        icon={faTimes}
                        size="1x"
                        style={{
                            color: '#fff',
                            cursor: 'pointer'
                        }}
                        onClick={
                            () => {
                                props.setActiveApps(prevState => ({
                                    ...prevState,
                                    showStreetApp: false
                                }));
                            }
                        }
                    />
            </header>
            {activeTab === 'groupInfo' && <GroupInfo />}
            {activeTab === 'progression' && <Progression />} 
            {activeTab === 'members' && <Members />}
            {activeTab === 'staff' && <Staff />}
        </div>
    </Draggable>
    )
}