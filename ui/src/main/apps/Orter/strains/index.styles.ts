import { makeStyles } from '@mui/styles'

export default makeStyles({
    herbItem: {
        display: 'flex',
        borderRadius: 3,
        padding: '1rem',
        alignItems: 'center',
        background: '#303030',
        flexDirection: 'column',
        boxShadow: 'hsl(0deg 0% 0$ / 8%) 0px -1px 5px 4px',
    },
    herbStrainTitle: {
        color: '#D6D6D6 !important',
        margin: 0,
        padding: 0,
        fontSize: '1.75vh !important',
        fontWeight: 'bold !important',
        width: '100%',
        textAlign: 'center',
        paddingBottom: '0.5rem',
    },
    herbStrainLevels: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: '1rem',
        width: '100%',
    },
    herbsProgressParent: {
        width: '100%',
        height: '1vh',
        borderRadius: 2,
        padding: '0.15rem',
        background: '#515151',
    },
    herbsProgress: {
        borderRadius: 2,
        height: '100%',
        background: '#56AA78',
    },
    herbStrainCreatedDate: {
        fontSize: '1.3vh',
        display: 'block',
        marginTop: '0.7rem',
    },
    herbData: {
        display: 'flex',
        width: '100%',
        marginTop: '1rem',
        justifyContent: 'space-between',
    },
    dataLabel: {
        fontSize: '1.5vh !important',
        color: '#fff !important',
    },
    herbInput: {
        width: '100%',
        height: '1vh',
        borderRadius: 2,
        padding: '0.15rem',
        margin: '0.5rem',
        background: '#515151',
    },
    herbInputValue: {
        borderRadius: 2,
        height: '100%',
        background: '#959595',
    },
})