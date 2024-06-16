import { makeStyles } from '@mui/styles';

export default makeStyles({
    confirmPopup: {
        top: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        width: '100%',
        height: '100%',
        zIndex: 2,
        padding: '15px',
        display: 'flex',
        position: 'absolute',
        borderRadius: 2,
        alignItems: 'left',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#21212B',
        animation: 'ease-in fadeIn 250ms',
        boxShadow: '#0000004f 0 4px 6px 3px'
    },
    text: {
        padding: 0,
        margin: 0,
        fontSize: '2vh !important',
        color: '#fff',
        fontWeight: 'normal',
        textAlign: 'center',
    },
    buttons: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    loadingIcon: {
        marginTop: '0.5rem',
        animation: 'ease-in fadeIn 250ms'
    }
})