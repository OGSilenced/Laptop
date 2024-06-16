import { makeStyles } from '@mui/styles';

export default makeStyles({
    progressionPage:{
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
        textShadow: '0px 0px 4px rgba(255, 255, 255, 0.87)'
    },
    subHeaderText: {
        fontSize: '1.8vh',
        fontWeight: 500,
        color: '#8f8f8f',
        fontFamily: '"Crimson Pro", serif !important'
    },
    progressionList: {
        gridGap: 25,
        width: '80%',
        display: 'grid',
        marginTop: '1rem',
        gridTemplateColumns: '1fr 1fr 1fr 1fr'
    },
    progressionItem: {
        height: '12vh',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(0deg, #0C0D11 0%, rgba(28, 29, 35, 0.4) 100%)'
    },
    progressionItemName: {
        fontSize: '2vh !important',
        fontWeight: 500,
        textAlign: 'center',
        fontFamily: '"Crimson Pro", serif !important'
    },
    progressionRequired: {
        fontSize: '1.6vh !important',
        fontWeight: 400,
        textAlign: 'center',
        color: 'rgba(0, 249, 185, 0.90)',
        fontFamily: '"Crimson Pro", serif !important',
    },
    progressionHidden: {
        fontSize: '2.5vh !important',
        fontWeight: 500,
        textAlign: 'center',
        fontFamily: '"Crimson Pro", serif !important',
    }
});