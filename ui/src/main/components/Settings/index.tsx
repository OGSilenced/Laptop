import React from 'react';
import useStyles from './index.styles';
import { Typography, TextField, FormControl, FormControlLabel, InputAdornment, Button, Checkbox } from '@mui/material';
import { PresetsPanel } from './Presets/presets'; 

export const SettingsPanel: React.FC<{
    setActiveApps: any;
    activeApps: any;
    setWhiteFontNames: any;
    setLaptopBackgroundImage: any;
}> = (props) => {
    const classes = useStyles();

    const settingsPanelRef = React.useRef(null);

    React.useEffect(() => {

        document.addEventListener('mousedown', function(event) {

            settingsPanelRef.current &&
            !settingsPanelRef.current.contains(event.target) &&
            props.setActiveApps(prevState => ({
                ...prevState,
                showSettingsPanel: false
            }));    

        });

    }, []);

    const handleFontColorChange = async (e) => {
        await localStorage.setItem('useWhiteIconNames', e.target.checked ? 'on' : 'off');

        props.setWhiteFontNames(localStorage.getItem('useWhiteIconNames'))
    }

    const [backgroundImageValue, setBackgroundImageValue] = React.useState('');

    const isValidImageURL = async (url) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = function() {
                resolve(true);
            };
            img.onerror = function() {
                resolve(false);
            };
            img.src = url;
        });
    };

    const setBackgroundImage = async () => {
        console.log(backgroundImageValue);
        const isValidImageUrl = await isValidImageURL(backgroundImageValue);
        
        if (isValidImageUrl) {
            await localStorage.setItem('laptopBackground', backgroundImageValue);
            props.setLaptopBackgroundImage(localStorage.getItem('laptopBackground'));
        } else {
            //console.error("Invalid image URL:", backgroundImageValue);
        }
    }

    const openPresets = () => {
        props.setActiveApps(prevState => ({
            ...prevState,
            showPresetBackgrounds: true
        }));
        props.setActiveApps(prevState => ({
            ...prevState,
            showSettingsPanel: false
        }));
        // return <PresetsPanel />;
    }

    return (
        <div className={classes.SettingsPanel} ref={settingsPanelRef} style={{ transition: '500ms ease-in-out', transform: 'translate('.concat(props.activeApps.showSettingsPanel ? '0%' : '150%',')'),  }}>
            <Typography variant="h1" className={classes.headerTitle} style={{ fontSize: 20, color: '#fff' }}>Settings</Typography>

            <div className={classes.list}>
                <div className={classes.section}>
                <FormControl fullWidth sx={{ width: '100%' }}>
                    <TextField
                        //className={classes.input}
                        id="input-with-icon-textfield"
                        //type="number"
                        label="Enter Background (16:9)"
                        variant="standard"
                        onChange={(e) => setBackgroundImageValue(e.target.value)}
                        value={backgroundImageValue}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <i className="fas fa-images"></i>
                            </InputAdornment>
                        ),
                        }}
                    />
                </FormControl>
                </div>
            </div>

            <div className={classes.buttons}>
                <Button size="small" variant="contained" className={classes.settingsBtn} onClick={() => setBackgroundImage()}>Save</Button>
                <Button size="small" variant="contained" className={classes.settingsBtn} onClick={openPresets}>Presets</Button>
            </div>

            <div className={classes.section}>
            <FormControl fullWidth sx={{ width: '100%' }}>
                <FormControlLabel
                style={{ color: '#fff' }}
                control={<Checkbox color="warning" checked={'on' === localStorage.getItem('useWhiteIconNames')}/>}
                label="White Font"
                //checked={'on' === localStorage.getItem('useWhiteIconNames')}
                //value={localStorage.getItem('useWhiteIconNames')}
                onChange={handleFontColorChange}
                />
            </FormControl>
            </div>

        </div>
    )
}