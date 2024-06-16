import React, { useState } from 'react';
import useStyles from './index.styles'
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.css'
import Typography from '@mui/material/Typography';
import { useNuiEvent } from '../hooks/useNuiEvent';
import { fetchNui } from '../utils/fetchNui';
import { isEnvBrowser } from '../utils/misc';


import { AppContainer } from './components/AppContainer';
import { Taskbar } from './components/Taskbar';
import { Notifications } from './components/Notifications/index';
import { NotificationsContainer } from './components/NotificationsContainer/index';
import { SettingsPanel } from './components/Settings/index';
import { PresetsPanel } from './components/Settings/Presets/presets';

import { BoostingIcon } from './components/AppContainer/icons/BoostingIcon';
import { BennysIcon } from './components/AppContainer/icons/BennysIcon'; 
import { StuffIcon } from './components/AppContainer/icons/StuffIcon'; 
import { HoeIcon } from './components/AppContainer/icons/HOEIcon'; 
import { BluePlazaIcon } from './components/AppContainer/icons/BluePlazaIcon'; 
import { OrterIcon } from './components/AppContainer/icons/OrterIcon';
import { TowServiceIcon } from './components/AppContainer/icons/TowServiceIcon' ;
import { UnknownIcon } from './components/AppContainer/icons/UnknownIcon';
import { ANALyzerIcon } from './components/AppContainer/icons/ANALyzerIcon' ;
import { DodoIcon } from './components/AppContainer/icons/DodoIcon' ;

import { BoostingApp } from './apps/Boosting/index'
import { GangApp } from './apps/Unknown/index';
import { ANALyzerApp } from './apps/ANALyzer/index';
import { BennysParts } from './apps/BennysParts/index'; 
import { HOImports } from './apps/HOImports/index';
import { MethApp } from './apps/BluePlaza/index';
import { HerbApp } from './apps/Orter/index';
import { TowService } from './apps/TowService/index';
import { DodoApp } from './apps/DodoApp/index'; 
import { Browser } from './apps/Browser/index';

//_0x3a05d0

const darkTheme = createTheme({
    components: {
      MuiMenuItem: {
        styleOverrides: {
          root: {
            backgroundColor: "#2f2f2f",
            "&.Mui-selected": {
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              "&.Mui-focusVisible": { background: "rgba(0, 0, 0, 0.24)" }
            },
            "&.Mui-selected:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.08)",
            }
          }
        }
      },
      MuiCircularProgress: {
        styleOverrides: {
          circle: {
            strokeLinecap: 'butt'
          }
        }
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "& .MuiInput-root": {
              color: "white",
              fontSize: '1.3vmin'
            },
            "& label.Mui-focused": {
              color: "darkgray"
            },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderColor: "darkgray"
            },
            "& .MuiInput-underline:before": {
              borderColor: "darkgray",
              color: "darkgray"
            },
            "& .MuiInput-underline:after": {
              borderColor: "white",
              color: "darkgray"
            },
            "& .Mui-focused:after": {
              color: "darkgray",
              fontSize: '1.5vmin'
            },
            "& .MuiInputAdornment-root": {
              color: "darkgray",
            }
          }
        }
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: "1em",
            maxWidth: "1000px"
          },
        }
      }
    },
    palette: {
      mode: 'dark',
      primary: {
        main: '#95ef77'
      },
      secondary: {
        main: '#424cab'
      },
      success: {
        main: '#95ef77'
      },
      warning: {
        main: '#f2a365'
      },
      error: {
        main: '#ffffff'
      },
      info: {
        main: '#2d465b'
      },
    },
  });

export const Laptop: React.FC = () => {
    const classes = useStyles();

    const [whiteFontNames, setWhiteFontNames] = useState(localStorage.getItem('useWhiteIconNames') ? 'on' === localStorage.getItem('useWhiteIconNames') : true);
    const [laptopBackgroundImage, setLaptopBackgroundImage] = useState(localStorage.getItem('laptopBackground') ? localStorage.getItem('laptopBackground') : 'https://i.imgur.com/EEwTSk1.jpg')
    const [systemNotifications, setSystemNotifications] = useState([]);
    const [nextId, setNextId] = useState(1)

    const addSystemNotification = (args) => {
      var sound = new Audio('https://freesound.org/data/previews/434/434379_6965625-lq.mp3');
      sound.volume = 0.35;
      
      sound.onloadeddata = () => {
        sound.play();
    };
      
      const notificationWithId = { ...args, id: nextId };
      
      setNextId(prevId => prevId + 1);

      setSystemNotifications(prevNotifications => [...prevNotifications, notificationWithId]);

      setTimeout(() => {
        setSystemNotifications(prevNotifications =>
              prevNotifications.map(notification =>
                  notification.id === notificationWithId.id ? { ...notification, show: false } : notification
              )
          );
      }, 5000);
  };

    const [activeShownApps, setActiveShownApps] = useState({
      showBoostingApp: false,
      showHOImportApp: false,
      showBennysApp: false,
      showMethApp: false,
      showStreetApp: false,
      showSeedAnalyzerApp: false,
      showNotificationPanel: false,
      showSettingsPanel: false,
      showPresetBackgrounds: false,
      showDodoApp: false,
      showHerbsApp: false,
      showTowApp: false,
      showHeistApp: false,
      showPixelBrowser: false
  });

  const [minimizedApps, setMinimizedApps] = useState({
    BoostingAppMinimized: false,
    HOImportAppMinimized: false,
    BennysAppMinimized: false,
    MethAppMinimized: false,
    StreetAppMinimized: false,
    SeedAnalyzerAppMinimized: false,
    DodoAppMinimized: false,
    HerbsAppMinimized: false,
    TowAppMinimized: false,
    HeistAppMinimized: false
});

  const Applications = [
    {
      'icon': <img src="https://i.imgur.com/95p83mB.png" alt="file-icon" className={classes.icon} />,
      'title': 'Recycle Bin',
      'open': function () {
          return null;
      },
      'show': function () {
          return true;
      },
      'column': 1,
      'opened': false,
      'component': null
  },
  {
    'icon': <StuffIcon></StuffIcon>,
    'title': 'Stuff',
    'open': function () {
        return null;
    },
    'show': function () {
        return true;
    },
    'column': 1,
    'opened': false,
    'component': null
},
{
    'icon': <BoostingIcon className={classes.icon}></BoostingIcon>,
    'title': 'Boosting',
    'open': function () {
      setActiveShownApps(prevState => ({
        ...prevState,
        showBoostingApp: true
      }));
    },
    'show': function () {
        return true;
    },
    'column': 1,
    'opened': false,
    'component': null
},
{
    'icon': <BennysIcon className={classes.icon}></BennysIcon>,
    'title': 'Bennys Parts',
    'open': function () {
      setActiveShownApps(prevState => ({
        ...prevState,
        showBennysApp: true
    }));
    },
    'show': function () {
        return true;
    },
    'column': 1,
    'opened': false,
    'component': null
},
{
    'icon': <HoeIcon className={classes.icon}></HoeIcon>,
    'title': 'HOE',
    'open': function () {
      setActiveShownApps(prevState => ({
        ...prevState,
        showHOImportApp: true
    }));
    },
    'show': function () {
        return true;
    },
    'column': 1,
    'opened': false,
    'component': null
},
{
    'icon': <BluePlazaIcon className={classes.icon}></BluePlazaIcon>,
    'title': 'Blue Plaza',
    'open': function () {
      setActiveShownApps(prevState => ({
        ...prevState,
        showMethApp: true
    }));
    },
    'show': function () {
        return true;
    },
    'column': 1,
    'opened': false,
    'component': null
},
  {
    'icon': <OrterIcon className={classes.icon}></OrterIcon>,
    'title': 'Örter',
    'open': function () {
      setActiveShownApps(prevState => ({
        ...prevState,
        showHerbsApp: true
    }));
    },
    'show': function () {
        return true;
    },
    'column': 2,
    'opened': false,
    'component': null
  },
  {
    'icon': <TowServiceIcon className={classes.icon}></TowServiceIcon>,
    'title': 'Tow Service',
    'open': function () {
      setActiveShownApps(prevState => ({
        ...prevState,
        showTowApp: true
    }));
    },
    'show': function () {
        return true;
    },
    'column': 2,
    'opened': false,
    'component': null
  },
  {
    'icon': <UnknownIcon className={classes.icon}></UnknownIcon>,
    'title': 'Unknown',
    'open': function () {
      setActiveShownApps(prevState => ({
        ...prevState,
        showStreetApp: true
    }));
    },
    'show': function () {
        return activeShownApps.showStreetApp;
    },
    'column': 2,
    'opened': false,
    'component': null
  },
  {
    'icon': <ANALyzerIcon className={classes.icon}></ANALyzerIcon>,
    'title': 'ANALyzer',
    'open': function () {
      setActiveShownApps(prevState => ({
        ...prevState,
        showSeedAnalyzerApp: true
    }));
    },
    'show': function () {
        return true;
    },
    'column': 2,
    'opened': false,
    'component': null
  },
  {
    'icon': <DodoIcon className={classes.icon}></DodoIcon>,
    'title': 'Dodo',
    'open': function () {
      setActiveShownApps(prevState => ({
        ...prevState,
        showDodoApp: true
    }));
    },
    'show': function () {
        return true;
    },
    'column': 2,
    'opened': false,
    'component': null
  },
  ]

  const [visible, setVisible] = useState(false)

  useNuiEvent("setVisible", setVisible);

  React.useEffect(() => {
    if (isEnvBrowser()) {
      setVisible(true)
    }
    
  })
  // Handle pressing escape/backspace
  React.useEffect(() => {
      // Only attach listener when we are visible
      if (!visible) return;

      const keyHandler = (e: KeyboardEvent) => {
          if (["Escape"].includes(e.code)) {
              if (!isEnvBrowser()) fetchNui("hideFrame");
              else setVisible(!visible);
          }
      };

      window.addEventListener("keydown", keyHandler);

      return () => window.removeEventListener("keydown", keyHandler);
  }, [visible]);

    return (
        <ThemeProvider theme={darkTheme}>
         <Grid className={classes.root}>
            <div className={classes.screen} id="screen" style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'all' : 'none' }}>
              <div className={classes.computerScreen} style={{ backgroundImage: 'url('.concat(laptopBackgroundImage,')') }}>
                <div className={classes.desktop}>
                  <div className={classes.notificationsList}>
                    <Notifications systemNotifications={systemNotifications} setSystemNotifications={setSystemNotifications}></Notifications>
                    {/* (Notifications here) */}
                  </div>
                  <AppContainer applications={Applications}></AppContainer>
                  
                  <Taskbar setMinimizedApps={setMinimizedApps} minimizedApps={minimizedApps} activeApps={activeShownApps} setActiveApps={setActiveShownApps}></Taskbar>

                  <NotificationsContainer setActiveApps={setActiveShownApps} activeApps={activeShownApps} systemNotifications={systemNotifications} setSystemNotifications={setSystemNotifications}></NotificationsContainer>
                  <SettingsPanel setActiveApps={setActiveShownApps} activeApps={activeShownApps} setWhiteFontNames={setWhiteFontNames} setLaptopBackgroundImage={setLaptopBackgroundImage}></SettingsPanel>
                  <PresetsPanel setActiveApps={setActiveShownApps} activeApps={activeShownApps} setLaptopBackgroundImage={setLaptopBackgroundImage}></PresetsPanel>
                  
                  <BoostingApp setActiveApps={setActiveShownApps} activeApps={activeShownApps} setMinimizedApps={setMinimizedApps} minimizedApps={minimizedApps}></BoostingApp>
                  <GangApp setActiveApps={setActiveShownApps} activeApps={activeShownApps}></GangApp>
                  <ANALyzerApp setActiveApps={setActiveShownApps} activeApps={activeShownApps} setMinimizedApps={setMinimizedApps} minimizedApps={minimizedApps}></ANALyzerApp>
                  <BennysParts setActiveApps={setActiveShownApps} activeApps={activeShownApps} setMinimizedApps={setMinimizedApps} minimizedApps={minimizedApps} addSystemNotification={addSystemNotification}></BennysParts>
                  <HOImports setActiveApps={setActiveShownApps} activeApps={activeShownApps} setMinimizedApps={setMinimizedApps} minimizedApps={minimizedApps} addSystemNotification={addSystemNotification}></HOImports>
                  <MethApp setActiveApps={setActiveShownApps} activeApps={activeShownApps} setMinimizedApps={setMinimizedApps} minimizedApps={minimizedApps} addSystemNotification={addSystemNotification}></MethApp>
                  <HerbApp setActiveApps={setActiveShownApps} activeApps={activeShownApps} setMinimizedApps={setMinimizedApps} minimizedApps={minimizedApps} addSystemNotification={addSystemNotification}></HerbApp>
                  <TowService setActiveApps={setActiveShownApps} activeApps={activeShownApps} setMinimizedApps={setMinimizedApps} minimizedApps={minimizedApps} addSystemNotification={addSystemNotification}></TowService>
                  <DodoApp setActiveApps={setActiveShownApps} activeApps={activeShownApps} setMinimizedApps={setMinimizedApps} minimizedApps={minimizedApps} addSystemNotification={addSystemNotification}></DodoApp>
                  <Browser setActiveApps={setActiveShownApps} activeApps={activeShownApps}></Browser>
                  
                </div>

              </div>
              
            </div>
        </Grid>
     </ThemeProvider>
    )
}