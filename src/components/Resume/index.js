import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box, Grid, CardMedia, Card } from '@material-ui/core'
import Navbar from '../Navbar'
import CodeResume from '../../assets/images/AdamWestResumeCoding1024_1.png'

const Resume = () => {
    return (
        <>
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
                                image={CodeResume}
                                alt="green iguana" />
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Resume
