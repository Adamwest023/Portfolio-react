import React from 'react'
import { Box, Typography, Card, CardMedia, Grid, CardContent } from '@material-ui/core'


const Success = () => {

    // setTimeout(() => {
    //     window.location.assign('/');
    // }, 3000);

    return (
        <Box container width='100%'>
            <Card style={{width:'75%', margin:"20px auto", textAlign:'center' }} >
                <CardContent>
                    <Typography>
                        Looking forward to connecting with you!
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Success
