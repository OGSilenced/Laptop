import React from 'react';
import Draggable from 'react-draggable';
import { Typography } from '@mui/material'

import useStyles from './index.styles';
import { BrowserTabs } from './tabs/index';
import { BozoWeb } from './tabs/bozoWeb/index';

export const Browser: React.FC<{
    setActiveApps: any;
    activeApps: any;
}> = (props) => {
    const classes = useStyles();
    const [activeTab, setActiveTab] = React.useState(0)
    const [searchInput, setSearchInput] = React.useState('')

    const handleSelectedTab = React.useCallback((url, index, fakeurl) => {
        console.log(index)
        setActiveTab(index)
        // Add your logic here
    }, []);

    const [tabs] = React.useState([
        {
            'url': '',
            'id': 'Default_Tab',
            'enabled': function () {
                return true;
            },
            'fakeUrl': 'www.gurgle.com',
            'title': 'Default Tab - Coming Soon',
            'icon': 'https://gta-assets.nopixel.net/brand/favicon.ico',
            'component': <Typography variant="h1" style={{ fontSize: 30 }} className={classes.pixelSoonText}>Coming Soon</Typography>
            // _0x43e001.a.createElement(_0x309995.a, {
            //     'i18n': true,
            //     'i18nSource': 'ui:text:laptop',
            //     'variant': 'h1',
            //     'className': classes.pixelSoonText
            // }, 'Coming Soon')
        },
        {
            'url': 'https://6str.talwyd.com/',
            'id': 'Tunershop_Dashboard',
            //'fakeUrl': _0x13ada9(),
            'enabled': function () {

                return true
                //return _0x318b6b.includes('tunershop:showBrowserTab');
            },
            'title': 'Tuner Shop - Dashboard',
            'icon': null
        },
        {
            'url': '',
            'id': 'Bozo_Web',
            //'fakeUrl': _0x13ada9(),
            'enabled': function () {
                return true
                //return _0x318b6b.includes('bozoweb:showBrowserTab');
            },
            'title': 'Bozo Web',
            'icon': null,
            'component': <BozoWeb></BozoWeb>
            //'component': _0x43e001.a.createElement(_0x5f4838, null)
        },
        {
            'url': '',
            'id': 'New_Tab',
            'fakeUrl': '',
            'enabled': function () {
                return true;
            },
            'title': 'Blank Tab',
            'icon': null,
            //'component': _0x43e001.a.createElement(_0x53ffdd, null)
        },
        {
            'url': '',
            'id': 'Silver_Hand',
            'fakeUrl': 'http://10.0.0.0',
            'webAddress': '10.0.0.0',
            'enabled': function () {
                ;
                ;
                ;
                ;
                ;
                return false;
            },
            'title': '10.0.0.0',
            'icon': null,
            //'component': _0x43e001.a.createElement(_0x4f0913, null)
        }
    ])

    const tunerDashboardRef = React.useRef(null);

    return (
         <Draggable handle="#tab-bar">
            <div className={classes.pixelBrowser} style={{ display: props.activeApps.showPixelBrowser ? '' : 'none' }}>
                <BrowserTabs tabs={tabs} handleSelectedTab={handleSelectedTab} selected={activeTab} setActiveApps={props.setActiveApps}></BrowserTabs>
                <form onSubmit={(e) => 
                    {
                        if (e.preventDefault(), e.stopPropagation(), 'New_Tab' === tabs[activeTab].id) {
                            var _0x26f538 = searchInput.trim().toLocaleLowerCase(), _0x40dba9 = tabs.find(function (_0x2c4b19) {
                                var _0x5229a7;
                                    return (null === (_0x5229a7 = _0x2c4b19.webAddress) || void 0 === _0x5229a7 ? void 0 : _0x5229a7.toLocaleLowerCase()) === _0x26f538;
                                });
                            //_0x40dba9 && (_0x1d91e0(_0x40dba9.url), _0x6b50f8(_0x40dba9.fakeUrl), _0x1c6bb3(tabs.indexOf(_0x40dba9)));
                        }
                     }}>
                    <div className={classes.pixelControl}>
                        <input className={classes.pixelUrl} placeholder="Enter Adress Url..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)}></input>
                    </div>
                </form>

                <div className={classes.pixelPage}>
                    {'Tunershop_Dashboard' === tabs[activeTab].id ? 
                    <iframe width="100%" height="100%" src="" title="key" ref={tunerDashboardRef}></iframe>
                     : <>
                     {tabs[activeTab].component}
                     </>}
                </div>

            </div>
         </Draggable>
    )
}