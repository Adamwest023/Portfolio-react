import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'
import Header from '../../components/Header';
import Particles from 'react-tsparticles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    particlesCanva: {
        position:'absolute'
    }
})
const Home = () => {
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
            <Header />

        </>
    )
}

export default Home
