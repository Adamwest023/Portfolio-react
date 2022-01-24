import React from 'react'
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
} from '@material-ui/core'

import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons'

import { makeStyles } from '@material-ui/core/styles'
import headshot from '../../assets/images/Headshot.jpg'

//CSS styles

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: '#BDD5EA',
        height: '30rem'
    },
    avatar: {
        display: 'block',
        margin: '0.5 rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13),

    },
    listItem: {
        color: '#F7F7FF'

    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home"

    },
    {
        listIcon:<AssignmentInd />,
        listText: "Resume"
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
    const classes = useStyles();

    return (
        <>
            <Box className={classes.menuSliderContainer} component='div'>
                <Avatar src={headshot} alt='Adam Headshot' className={classes.avatar} />
                <Divider />
                <List>
                    {menuItems.map((lsItem, key) => (

                        <ListItem button key={key}>
                            <ListItemIcon classes={classes.listItem}>
                            {lsItem.listIcon}
                            </ListItemIcon>
                            <ListItemText classes={classes.listItem} primary={lsItem.listText} />
                        </ListItem> 
                    ))}
                </List>
            </Box>
            <Box component="nav">
                <AppBar position='sticky' style={{ backgroundColor: "#495867" }}>
                    <Toolbar>
                        <IconButton>
                            <ArrowBack style={{ color: '#BDD5EA' }} />
                        </IconButton>
                        <Typography variant='h5' style={{ color: '#BDD5EA' }}>
                            Portfolio
                        </Typography>
                        <Typography variant='h5' style={{ color: '#BDD5EA' }}>
                            Contact
                        </Typography>

                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar
