import { makeStyles } from '@mui/styles';

export default makeStyles({
    staffPage: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: '"Crimson Pro", serif',
        //marginTop: '2rem'
    },
    headerText: {
        fontSize: 26,
        fontWeight: 500,
        marginTop: '2rem !important',
        fontFamily: '"Crimson Pro", serif !important',
        textShadow: '0px 0px 4px rgba(255, 255, 255, 0.87)',
    },
    subHeaderText: {
        fontSize: '1.8vh !importany',
        fontWeight: 500,
        color: '#8f8f8f',
        fontFamily: '"Crimson Pro", serif !important',
    },
    infoItem: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    infoList: {
        width: '80%',
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    button: {
        margin: '0.5rem 0 !important',
        background: '#0b604a !important',
        color: 'rgb(255 255 255) !important',
        '&:hover': {
            background: '#0b604a !important',
            color: 'rgb(255 255 255) !important'
        }
    },
    tableHeader: {
        background: '#0b604a',
        color: 'rgb(255 255 255)'
    },
    orangeButton: {
        color: '#fff',
        width: '100%',
        marginTop: '1rem',
        marginBottom: '0.5rem',
        backgroundColor: '#0b604a',
        '&:hover': {
            backgroundColor: '#0b604a'
        }
    },
    headerText2: {
        fontSize: 20,
        fontWeight: 500,
        textAlign: 'center',
        marginBottom: '1rem',
        fontFamily: '"Crimson Pro", serif',
        textShadow: '0px 0px 4px rgba(255, 255, 255, 0.87)'
    },
    modalContent: {
        background: '#0C0D11'
    }
});