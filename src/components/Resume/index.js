import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box, Grid, CardMedia, Card } from '@material-ui/core'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Particles from 'react-tsparticles';
import CodeResume from '../../assets/images/AdamWestResumeCoding.png'
import FilmResume from '../../assets/images/AdamWestResumeFilm.png'

const useStyles = makeStyles({
    particlesCanva: {
        position:'absolute'
    }
})
const Resume = () => {
    const classes = useStyles()
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
            <Box component='div'>


                <Grid container spacing={2} justifyContent="space-around" >
                    <Grid item xs={10} md={5}>
                        <Typography variant='h4' align="center">
                            Full-Stack Experience
                        </Typography>
                        <Card>
                            <CardMedia component="img"
                                height="100%"
                                image={CodeResume}
                                alt="green iguana" />
                        </Card>
                    </Grid>

                    <Grid item xs={10} md={5}>
                        <Typography variant='h4' align="center">
                            Film Experience
                        </Typography>
                        <Card>
                            <CardMedia component="img"
                                height="100%"
                                image={FilmResume}
                                alt="green iguana" />
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </>
    )
}

export default Resume
