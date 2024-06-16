import React from 'react';
import useStyles from './index.styles';
import { Typography, Grid } from '@mui/material'

export const PresetsPanel: React.FC<{
    setActiveApps: any;
    activeApps: any;
    setLaptopBackgroundImage: any;
}> = (props) => {
    const classes = useStyles();

    const presetsPanelRef = React.useRef(null);

    React.useEffect(() => {
    
        document.addEventListener('mousedown', function(event) {

            presetsPanelRef.current &&
            !presetsPanelRef.current.contains(event.target) &&
            props.setActiveApps(prevState => ({
                ...prevState,
                showPresetBackgrounds: false
            }));

        });

    }, []);

    const PresetImages = [
        {
            'name': 'Default',
            'url': 'https://i.imgur.com/EEwTSk1.jpg'
        },
        {
            'name': 'Yung',
            'url': 'https://i.imgur.com/p924kQR.png'
        },
        {
            'name': 'Drift',
            'url': 'https://i.imgur.com/H1SL3u3.png'
        },
        {
            'name': 'GTR',
            'url': 'https://i.imgur.com/QUx3wNC.jpg'
        },
        {
            'name': 'AMG',
            'url': 'https://i.imgur.com/8gCOoIZ.png'
        },
        {
            'name': 'R34',
            'url': 'https://i.imgur.com/4yp0klI.jpg'
        },
        {
            'name': 'Lambo',
            'url': 'https://i.imgur.com/vn68cBQ.jpg'
        },
        {
            'name': 'Corvette',
            'url': 'https://i.imgur.com/QxqrDwG.jpg'
        },
        {
            'name': 'Corvette 2',
            'url': 'https://i.imgur.com/hnA5H1Y.jpg'
        },
        {
            'name': 'R342',
            'url': 'https://i.imgur.com/8Lthbn7.png'
        },
        {
            'name': 'Supra',
            'url': 'https://i.imgur.com/l5romrM.jpg'
        },
        {
            'name': 'FeelsBadMan',
            'url': 'https://i.imgur.com/ArrXblZ.png'
        }
    ]

    const setBackgroundImage = async (url) => {
        await localStorage.setItem('laptopBackground', url);
        props.setLaptopBackgroundImage(localStorage.getItem('laptopBackground'));
    }

    return (
        <div className={classes.presetBackgrounds} ref={presetsPanelRef} style={{ transition: '500ms ease-in-out', transform: 'translate('.concat(props.activeApps.showPresetBackgrounds ? '0%' : '250%',')'),  }}>
            <Typography variant="h1" className={classes.headerTitle} style={{ fontSize: 20, color: '#fff' }}>Presets</Typography>
            <Grid container={true} className={classes.list} spacing={3}>
                {PresetImages.map((preset, index) => (
                    <Grid item={true} xs={4} key={index}>
                        <div className={classes.presetBackground} style={{
                            background: 'url('.concat(preset.url, ')'),
                            backgroundSize: 'cover',
                        }}
                        onClick={
                           () => setBackgroundImage(preset.url)
                        }>

                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}