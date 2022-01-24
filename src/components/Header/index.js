import React from 'react'
import {
    Typography,
    Avatar,
    Grid,
    Box
} from '@material-ui/core'
import { makeStyles } from '@material-ui//core/styles'
import Typed from 'react-typed'
import headshot from '../../assets/images/Headshot.jpg'

//CSS style
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),

    },
    title: {
        color: '#F7F7FF'
    },
    subtitle: {
        color: '#F7F7FF',
        marginBottom: '3rem'
    },
    typedContainer: {
        position: 'absolute',
        top: "50%",
        left: "50%",
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        textAlign: 'center',
        zIndex: 1,
    }

}))

const Header = () => {
    const classes = useStyles();

    return (
        <Box className={classes.typedContainer}>
            <Grid container justify='center'>
                <Avatar src={headshot} alt='Adam Headshot' className={classes.avatar} />
            </Grid>
            <Typography variant='h4' className={classes.title}>
                Adam West
            </Typography>
            <br />
            <Typography variant='h5 ' className={classes.subtitle}>
                <Typed
                    strings={['Video Production', 'Video Editing', 'Web Design', 'Web Development']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </Typography>
        </Box>
    )
}

export default Header
