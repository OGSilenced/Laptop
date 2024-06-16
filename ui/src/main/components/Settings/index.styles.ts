import { makeStyles } from '@mui/styles';

export default makeStyles({
    SettingsPanel: {
        right: 0,
        zIndex: 10,
        width: '25%',
        height: '85%',
        padding: 20,
        position: 'absolute',
        borderRadius: 10,
        margin: '1rem',
        background: 'rgba(24, 24, 24, 0.6)',
        backdropFilter: 'blur(32px)',
    },
    list: {
        overflow: 'scroll',
        maxHeight: '90%',
    },
    exitIcon: {
        right: 5,
        top: 5,
        color: '#fff',
        position: 'absolute',
    },
    headerTitle: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: '1rem !important',
    },
    title: {
        fontSize: 16,
        marginBottom: '1rem',
    },
    buttons: {
        display: 'flex',
        marginTop: 10,
        justifyContent: 'space-evenly',
    },
    settingsBtn: {
        color: '#fff !important',
        background: '#1355a7 !important',
    },
    presetBackgrounds: {
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        maarginTop: '1rem',
        zIndex: 10,
        width: '25%',
        height: '85%',
        padding: 20,
        borderRadius: 10,
        position: 'absolute',
        background: 'rgba(24, 24, 24, 0.6)',
        backdropFilter: 'blur(32px)',
    },
    presetBackground: {
        width: 64,
        height: 64,
        mmarginRight: 10,
        marginBottom: 10,
    },
    section: {
        marginBottom: '1rem !important',
    },
})