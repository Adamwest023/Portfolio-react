import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Navbar from '../Navbar'
import Footer from '../Footer';
import Particles from 'react-tsparticles';
import { Box, Typography, Card, CardMedia, Grid, CardContent } from '@material-ui/core'
import { CardActionArea } from '@mui/material';
import ReactFest from '../../assets/images/React-fest.png'
import FoodFestival from '../../assets/images/FoodFestival.png'
import Recipe from '../../assets/images/Recipe.png'
import { height } from '@mui/system';


const useStyles= makeStyles({
    cardBox:{
        padding: '10px'
    },
    particlesCanva: {
        position:'absolute'
    }
});

const reactFestChange = () => {
    window.location.href = "https://react-fest.herokuapp.com/"
}
const filmReelChange = () => {
    window.location.href = "https://vimeo.com/user31678022"
}
const foodFestivalChange = () => {
    window.location.href = "https://adamwest023.github.io/food-festival/index.html#"
}
const codingChange = () => {
    window.location.href = "https://adamwest023.github.io/git-a-recipe/"
}
const Portfolio = () => {
    const classes = useStyles();
    return (
        <>
         <Particles
            canvasClassName={classes.particlesCanva}
                params={{
                    particles: {
                        number: {
                          value: 1000,
                          density: {
                            enable: true,
                            value_area: 800
                          }
                        },
                        color: {
                          value: "#ffffff"
                        },
                        shape: {
                          type: "circle",
                          stroke: {
                            width: 0,
                            color: "#000000"
                          },
                          image: {
                            src: "img/github.svg",
                            width: 100,
                            height: 100
                          }
                        },
                        opacity: {
                          value: 0.4,
                          random: true,
                          anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                          }
                        },
                        size: {
                          value: 3,
                          random: true,
                          anim: {
                            enable: true,
                            speed: 2,
                            size_min: 0.1,
                            sync: false
                          }
                        },
                        line_linked: {
                          enable: false
                        },
                        move: {
                          enable: true,
                          speed: 1,
                          direction: "none",
                          random: false,
                          straight: false,
                          out_mode: "out",
                          bounce: false,
                          attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                          }
                        }
                      },
                      interactivity: {
                        detect_on: "canvas",
                        events: {
                          onhover: {
                            enable: false
                          },
                          onclick: {
                            enable: false
                          },
                          resize: false
                        }
                      },
                      retina_detect: true
                    
                }} />
            <Navbar />

            <Box component='div' sx={{height:"100%"}}>
                <Grid  justifyContent="space-around" container rowSpacing={{xs:3, md:3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{p:'10px'}}>
                    <Grid item xs={9} md={5}  className={classes.cardBox}>
                        <Card sx={{ maxWidth: 250 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={ReactFest}
                                    alt="React-fest"
                                    onClick={reactFestChange}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" height='10' >
                                        React-Fest
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        React built application to demo a music festival. This application uses the MERN stack
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={9} md={5}  className={classes.cardBox}>
                        <Card sx={{ maxWidth: 250 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    alt="film reel"
                                    onClick={filmReelChange}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Reel
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       Various projects worked on over the past 2 years. Includes film work, drone work, assistant camera work
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={9} md={5}  className={classes.cardBox}>
                        <Card sx={{ maxWidth: 250 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={FoodFestival}
                                    alt="food-festival PWA"
                                    onClick={foodFestivalChange}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Food Festival PWA
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       Refactored web application to create a Progressive Web Application. The app has both online and offline functionality using IndexedDB
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={9} md={5}  className={classes.cardBox}>
                        <Card sx={{ maxWidth: 250 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={Recipe}
                                    alt="react-fest application"
                                    onClick={codingChange}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Git-A-Recipe
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       Group project using a framework and api calls to gather food recipes and other information
                                    </Typography>
                                    <br />
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>

            </Box>
            <Footer />
        </>
    )
}

export default Portfolio
