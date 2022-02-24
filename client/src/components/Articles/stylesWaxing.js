import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        maxWidth: '100%'
        //display: 'block'
    },
    media: {
        height: '160px',
        width: '200px',
        display: 'center',
        paddingLeft: '80px'
        //paddingTop: '56.25%'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    cardContent: {
        //display: 'flex',
        display: 'block',
        paddingLeft: '10px'
    }
}));