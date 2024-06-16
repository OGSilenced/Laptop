import { makeStyles } from '@mui/styles';

export default makeStyles({
    transferPopup: {
        top: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        zIndex: 2,
        padding: 15,
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'absolute', 
        borderRadius: 2,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#21212B',
        animation: 'ease-in fadeIn 250ms',
        boxShadow: '#0000004f 0 4px 6px 3px',  
    },
    title: {
        color: '#fff',
        fontSize: '1.55vh',
        fontWeight: 'normal',
    },
    input: {
        border: 'none',
        color: '#AAAAAA',
        paddingLeft: 10,
        paddingTop: 7,
        paddingBottom: 7,
        background: '#181820',
        borderRadius: '2px',
        marginTop: 15,
    },
    buttons: {
        marginTop: 15,
        width: '100%',
    },
    loadingIcon: {
        marginTop: '0.5rem',
        animation: 'ease-in fadeIn 250ms',
    }
})