import React, { useState } from 'react';
import useStyles from './index.styles';
import Draggable from "react-draggable";
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';
import { useNavigationState } from "../../atoms/navigation";
import Box from '@mui/material/Box';
import '../../index.css'
import AppHeader from '../../components/AppHeader/index'

import { Contracts } from './contracts/index';
import { PuppetMasterPage } from './puppetmaster/index'; 
import { ContractAuctions } from './auctions/index';

export const BoostingApp: React.FC<{
  setActiveApps: any;
  activeApps: any;
  setMinimizedApps: any;
  minimizedApps: any;
}> = (props) => {
    const classes = useStyles();
    const [activeTab, setActiveTab] = useState('contracts')

  const [isQueueEnabled, setIsQueueEnabled] = useState<boolean>(false);
  const [showQueueToggle, setShowQueueToggle] = useState<boolean>(false);
  const [showBlockFromQueue, setShowBlockFromQueue] = useState<boolean>(false);
  const [showContractCreator, setShowContractCreator] = useState<boolean>(false);

  const handleQueueToggle = () => {
    setIsQueueEnabled(!isQueueEnabled);
  };

  const handleBlockFromQueue = () => {
    setShowBlockFromQueue(true);
  };

  const handleContractCreator = () => {
    setShowContractCreator(true);
  };

    const [contracts, setContracts] = useState([
      {
        class: 'B'
      },
      {
        class: 'C'
      },
      {
        class: 'D'
      }
    ]);

    const linearProgressProps: LinearProgressProps = {
      variant: "determinate",
      value: 50, 
      classes: {
        root: classes.boostingProgressionParent,
        bar: classes.boostingProgression,
      },
    };

    const getTabClass = (tab) => {
      return activeTab === tab ? ''.concat(classes.tabBtn, ' ').concat(classes.active) : classes.tabBtn;
    }

    return (
        <Draggable
          handle="#app-header"
          //bounds="parent"

          position={null}
        >
        <div className={classes.boostingApp} style={{ display: props.activeApps.showBoostingApp && !props.minimizedApps.BoostingAppMinimized ? '' : 'none' }}>
          <AppHeader appName="Boosting Contracts" color="#21212B" 
           onClose={
            () => {
                    props.setActiveApps(prevState => ({
                      ...prevState,
                      showBoostingApp: false
                  }));
          }}
          onMinimize={
            () => {
                    props.setMinimizedApps(prevState => ({
                      ...prevState,
                      BoostingAppMinimized: true
                    }));
            }
          }
          ></AppHeader>
          <div className={classes.container}>
            <div className={classes.tabsSection}>
              <div className={classes.tabsBtns}>
                <Button style={{ borderRadius: 3 }} className={getTabClass('contracts')} variant="contained" onClick={() => setActiveTab('contracts')}>My Contracts</Button>
                <Button style={{ borderRadius: 3 }} className={getTabClass('auction')} variant="contained" onClick={() => setActiveTab('auction')}>Contract Auctions</Button>

                <Button style={{ borderRadius: 3 }} className={getTabClass('pmcontrols')} variant="contained" onClick={() => setActiveTab('pmcontrols')}>Puppet Management</Button>
              </div>
              <Button style={{ borderRadius: 3, fontSize: 10, fontWeight: 500 }} className={classes.queueBtn} variant="contained" >Join Queue</Button>
            </div>
            <div style={{ display: activeTab === 'contracts' ? '' : 'none' }} className={classes.progressSection}>
              <Typography className={classes.levelText} variant="h1" style={{ color: 'white', fontSize: 12 }}>A+</Typography>
              <LinearProgress {...linearProgressProps} />
              <Typography className={classes.levelText} variant="h1" style={{ color: 'white', fontSize: 12 }}>S</Typography>
            </div>

            { activeTab === 'contracts' ?
             contracts && contracts.length > 0 ? 
              <div className={classes.pendingContracts}>
                <Contracts></Contracts>
              </div> : <Typography variant="h1" style={{ fontSize: 14 }} className={classes.empty}>Inbox Empty.. :(</Typography> : null }


              {activeTab === 'pmcontrols' &&
                <PuppetMasterPage></PuppetMasterPage>} 

              {activeTab === 'auction' && 
              <ContractAuctions></ContractAuctions>}

              </div>
          </div>
      </Draggable>
    )
}


























