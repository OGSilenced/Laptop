import { makeStyles } from '@mui/styles';

export default makeStyles({
    formSection: {
        marginTop: '1rem',
        marginBottom: '1rem',
        marginRight: '2rem',
    },
    PuppetMasterPage: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
    },
    label: {
        color: '#fff'
    },
    description: {
        color: 'rgb(167, 167, 167)'
    },
    btn: {
        marginTop: '0.5rem !important',
        padding: '10px 15px !important',
        color: '#9CFFFF !important',
        fontSize: 12,
        backgroundColor: '#282D37 !important',
        '&:hover': {
            color: '#fff !important',
            backgroundColor: '#282D37 !important'
        }
    }
});