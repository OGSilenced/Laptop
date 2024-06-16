import { makeStyles } from '@mui/styles';

export default makeStyles({
    membersPage: {
        display: 'flex',
        alignItems: 'center',
        //marginTop: '2rem',
        flexDirection: 'column',
        fontFamily: '"Crimson Pro", serif !important',
    },
    headerText: {
        fontSize: 26,
        fontWeight: 500,
        marginTop: '2rem !important',
        fontFamily: '"Crimson Pro", serif !important',
        textShadow: '0px 0px 4px rgba(255, 255, 255, 0.87)',
    },
    membersList: {
        gap: '1rem',
        flex: 'auto',
        width: '80%',
        maxHeight: '39vh',
        display: 'grid',
        marginTop: '1rem',
        overflow: 'scroll',
        gridTemplateColumns: '1fr 1fr'
    },
    member: {
        display: 'flex',
        padding: '1rem',
        alignItems: 'center',
        boxSizing: 'border-box',
        border: '1px solid #033327',
        justifyContent: 'space-between',
        background: 'linear-gradient(0deg, #0C0D11 0%, rgba(28, 29, 35, 0.4) 100%)'
    },
    memberName: {
        fontFamily: '"Crimson Pro", serif !important',
        fontWeight: 500,
        fontSize: 19,
        color: '#fff'
    },
    orangeButton: {
        color: '#fff !important',
        width: '100% !important',
        marginTop: '1rem !important',
        marginBottom: '0.5rem !important',
        backgroundColor: '#0b604a !important',
        '&:hover': {
            backgroundColor: '#0b604a !important'
        }
    },
    addMemberButton: {
        margin: '0.5rem !important',
        background: '#0b604a !important',
        color: 'rgb(255 255 255) !important',
        '&:hover': {
            background: '#0b604a !important',
            color: 'rgb(255 255 255) !important',
            cursor: 'pointer !important',
        }
    },
    kickMember: {
        fontSize: 17,
        fontWeight: 500,
        cursor: 'pointer',
        userSelect: 'none',
        color: 'rgba(144, 3, 20, 1)',
        transition: 'ease-in 120ms',
        fontFamily: '"Crimson Pro", serif !important',
        '&:hover': {
            transform: 'scale(1.02',
        }
    },
    headerText2: {
        fontSize: 20,
        fontWeight: 500,
        textAlign: 'center',
        marginBottom: '1rem',
        fontFamily: '"Crimson Pro", serif !important',
        textShadow: '0px 0px 4px rgba(255, 255, 255, 0.87)'
    },
    modalContent: {
        background: '#0C0D11 !important'
    }
});