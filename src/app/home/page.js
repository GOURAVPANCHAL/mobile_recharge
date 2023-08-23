"use client"
import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const GridComponent = () => {
    return (
        <>
<Container>
        <Grid style={{marginTop:'2rem'}} container spacing={2}>
            <Grid item xs={12} sm={6}>
            <Box sx={{ marginTop: { xs: '-2rem', sm: '3rem', md: '5rem' },textAlign:'center'}} style={{marginTop:'5rem !important', maxWidth:'25rem'}}>
                <Typography sx={{ fontSize: { xs: '30px', sm: '40px' } }} color={'#121212'} variant="h3" fontWeight='700' component="h3" gutterBottom>
                    DIGITILIZE YOUR
                </Typography>
                <Typography sx={{ fontSize: { xs: '30px', sm: '40px' } }} variant="h3" fontWeight='700' component="h3" color={'#0eacb2'} gutterBottom>
                    FINANCIALS
                </Typography>
                <Typography className='text_color' variant="body1" marginBottom='1rem'>
                    Effortlessly pay bills and recharge online with our
                    user-friendly payment system. Simplify your life with
                    just a few clicks!
                </Typography>


                <Typography>
                <Button  style={{backgroundColor:'#0eacb2',marginRight:'1rem'}} variant="contained">Get Started</Button>
                    <Link href="#" style={{color:'#0eacb2'}} underline="always">How it works?</Link>
                </Typography>

                </Box>

            </Grid>
            <Grid sx={{mr: 2,display: { xs: 'none', md: 'flex' }}}>
                <Image
                    src="/group.webp"
                    alt="Image"
                    width={550}
                    height={450}
                />
            </Grid>
        </Grid>
</Container>

        </>

    );
};

export default GridComponent;
