import { makeStyles } from '@mui/styles'

export default makeStyles({
    methApp: {
        position: 'absolute',
        height: '70%',
        width: '70%',
        top: '10%',
        left: '15%',
        backgroundColor: '#13131A',
        animation: 'ease-in fadeIn 250ms',
    },
    container: {
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '90%',
        overflow: 'scroll',
        position: 'relative',
    },
    tabsSection: {
        display: 'flex',
        paddingBottom: '1rem',
        justifyContent: 'space-between',
    },
    tabsBtns: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    tabBtn: {
        color: '#fff !important',
        border: 'none !important',
        padding: '10px 15px !important',
        //width: '4.5vw !important',
        borderRadius: 5,
        background: 'transparent !important',
        marginRight: '1rem !important',
        fontSize: 10,
        fontWeight: 500,
        boxShadow: 'none !important',
        '&:hover': {
            color: '#34AC88 !important',
            backgroundColor: '#1C1C24 !important',
        },
    },
    active: {
        color: '#34AC88 !important',
        backgroundColor: '#1C1C24 !important',
    },
    '@keyframes fadeIn': {
        'from': {
            'opacity': 0,
            'transform': 'scale(0)'
        },
        'to': {
            'opacity': 1,
            'transform': 'scale(1)'
        }
    },
    methProgressionParent: {
        background: '#1C1C24',
        height: 5,
        flex: 'auto',
        marginLeft: '1rem',
        marginRight: '1rem',
    },
    methProgression: {
        background: '#34AC88',
    },
    progressSection: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1rem',
    },
    levelText: {
        fontSize: 12,
    },
    levelHidden: {
        color: 'transparent',
        userSelect: 'none',
        textShadow: '0 0 10px white',
    },
})