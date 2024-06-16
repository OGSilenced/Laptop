import { makeStyles } from '@mui/styles';

export default makeStyles({
    notificationPanel: {
        right: 0,
        zIndex: 10,
        width: '25%',
        height: '85%',
        padding: 20,
        position: 'absolute',
        borderRadius: 10,
        margin: '1rem',
        background: 'rgba(24, 24, 24, 0.6)',
        backdropFilter: 'blur(32px)'
    },
    notificationsList: {
        overflow: 'scroll',
        maxHeight: '90%'
    },
    notification: {
        display: 'flex',
        padding: 10,
        borderRadius: 5,
        position: 'relative',
        alignItems: 'center',
        marginBottom: '0.5rem',
        backdropFilter: 'blur(32px)',
        background: 'rgba(24, 24, 24, 2%)',
    },
    thumbnail: {
        marginRight: '0.5rem',
    },
    title: {
        fontSize: 13
    },
    desc: {
        color: '#797979',
        fontSize: 14
    },
    headerTitle: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: '1rem'
    },
    exitIcon: {
        right: 5,
        top: 5,
        color: '#fff',
        position: 'absolute'
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        //alignItems: 'center',
    }
});