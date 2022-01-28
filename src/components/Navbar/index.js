import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    AppBar,
    Toolbar,
    ListItem,
    ListItemIcon,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    Icon,
    Grid,
} from '@material-ui/core'

import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons'

import { makeStyles } from '@material-ui/core/styles'
import MobileRightMenuSlider from '@material-ui/core/Drawer'
import headshot from '../../assets/images/Headshot.jpg'
import { ThemeProvider, createTheme } from '@mui/material/styles';


//CSS styles

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: '#BDD5EA',
        height: '100%',
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13),

    },
    listItem: {
        color: '#F7F7FF'

    }
}));

const theme = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    textDecoration: 'none',
                    color: 'white'
                }
            }
        },
    }
})

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: '/'

    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio"

    },
    {
        listIcon: <ContactMail />,
        listText: "Contact"

    },
]

const Navbar = () => {

    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = ((slider, open) => () => {
        setState({ ...state, [slider]: open });
    })

    const classes = useStyles();

    const sideList = slider => (

        <Box
            className={classes.menuSliderContainer}
            component='div'
            onClick={toggleSlider(slider, false)}>
            <Avatar src={headshot} alt='Adam Headshot' className={classes.avatar} />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (

                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon classes={classes.listItem}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText classes={classes.listItem} primary={lsItem.listText} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <ThemeProvider theme={theme}>
            <>
                <Box component="nav" sx={{ pb: '50px' }}>
                    <AppBar position='sticky' style={{ backgroundColor: "#495867", alignItems: 'center' }}>
                        <Toolbar style={{ width: '100%' }} >
                            <Grid container spacing={6} justifyContent="space-between"
                                alignItems="center">
                                <Grid item xs={3}>
                                    <IconButton onClick={toggleSlider("right", true)}>
                                        <ArrowBack style={{ color: '#F7F7FF', alignItems: 'left' }} />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography component={Link} variant='h5' style={{ color: '#F7F7FF', textDecoration: "none", paddingRight: '10px' }}
                                        to={'/portfolio'}>
                                        Portfolio
                                    </Typography>
                                    <Typography component={Link} variant='h5' style={{ color: '#F7F7FF', textDecoration: 'none', paddingRight: '10px' }} to={'/resume'}>
                                        Resume
                                    </Typography>
                                    <Typography component={Link} variant='h5' style={{ color: '#F7F7FF', textDecoration: 'none', paddingRight: '10px' }} to={'/contact'}>
                                        Contact
                                    </Typography>
                                </Grid>
                            </Grid>
                            <MobileRightMenuSlider
                                anchor='right'
                                open={state.right}
                                onClick={toggleSlider('right', false)}
                            >
                                {sideList("right")}
                            </MobileRightMenuSlider>
                        </Toolbar>
                    </AppBar>
                </Box>
            </>
        </ThemeProvider>
    )
}

export default Navbar
