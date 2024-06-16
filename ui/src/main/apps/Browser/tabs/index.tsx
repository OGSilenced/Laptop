import React from "react";
import { Typography, Button } from '@mui/material'

import useStyles from './index.styles';

export const BrowserTabs: React.FC<{
    tabs: any;
    handleSelectedTab: any;
    selected: any;
    setActiveApps: any;
}> = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.tabBar} id="tab-bar">
            <div className={classes.tabs}>
                {props.tabs && props.tabs.map((tab, index) => (
                    <>
                    {tab.enabled && <li className={''.concat(classes.tabsLi, ' ').concat(props.selected === index && classes.active)} onClick={() => props.handleSelectedTab(tab.url, index, tab.fakeUrl)}>
                    {tab.icon && <img className={classes.tabIcon} src={tab.icon} alt='icon'></img>}
                    <Typography variant="h1" style={{ fontSize: 12 }} className={classes.tabText}>{tab.title}</Typography>
                    </li>}                   
                    </>

                ))}

                <li className={''.concat(classes.tabsLi, ' ').concat(classes.tabLiSmall)}>
                    <Typography variant="h1" style={{ fontSize: 12 }} className={classes.tabText}>+</Typography>
                </li>

            </div>

            <Button size="small" className={classes.appControlCloseBtn} 
                onClick={
                    () => 
                        props.setActiveApps(prevState => ({
                            ...prevState,
                            showPixelBrowser: false
                    }))}>                      
            </Button>

        </div>
    )
}