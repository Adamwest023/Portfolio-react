import React from 'react'
import { Grid, Typography, Card, Box, CardContent, TextField, Button } from '@material-ui/core'
import Navbar from '../../components/Navbar'


const Contact = () => {
    return (
        <>
            <Navbar />
            <Box>
                <Grid container spacing={0}>
                    <Grid item xs={11} md={6} sx={{ borderRight: 2, borderColor: 'error.main' }}>
                    </Grid>
                    <Grid item xs={11} md={5} alignContent="center" alignItems="center">
                        <Card style={{maxWidth:500, margin:'0  auto'}}>
                            <CardContent>
                                <form action="https://formsubmit.co/6c927c0a52e3584dc0fdf5e096217647" method="POST">
                                <Grid container spacing={1} md={12} >
                                    <Grid item xs={12} fullWidth style={{ textAlign: 'center' }}>
                                        <Typography gutterBottom variant="h5">
                                            Contact Me
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1} sm={6}>
                                        <TextField label="First Name" name="First Name" placeholder="Enter first name" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField label="Last Name" name="Last Name" placeholder="Enter last name" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField type="email" name="email" label="Email" placeholder="'Enter your email address" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField type="number" name="number" label="Phone" placeholder="Enter phone number" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField multiline name="message" rows={4} label="message" placeholder="Type your message here" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button type="submit" variant='contained' color="primary" fullWidth> Submit</Button>
                                    </Grid>
                                    <input type="hidden" name="_next" value="http://localhost:3000/success"></input>
                                    <input type="hidden" name="_captcha" value="false"></input>
                                </Grid>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Contact
