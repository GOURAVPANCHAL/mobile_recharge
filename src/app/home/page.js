"use client"
import React, { useState } from 'react';
import { Box, Button, ButtonGroup, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const GridComponent = () => {
    return (
        <>
            <Container>
                <Grid style={{ marginTop: '2rem', marginBottom: '4rem' }} container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Box sx={{ mt: { xs: '1rem', sm: '3rem', md: '8rem' }, textAlign: { xs: 'center', md: 'start', sm: 'center' }, marginTop: { xs: '-2rem' } }} mt={5} maxWidth='25rem' textAlign='start'>
                            <Typography sx={{ fontSize: { xs: '30px', sm: '40px' } }} color={'#121212'} variant="h3" fontWeight='700' component="h3" gutterBottom>
                                DIGITILIZE YOUR
                            </Typography>
                            <Typography sx={{ fontSize: { xs: '30px', sm: '40px' }, textAlign: { xs: 'center', md: 'start' } }} variant="h3" fontWeight='700' component="h3" color={'#0eacb2'} gutterBottom>
                                FINANCIALS
                            </Typography>
                            <Typography className='text_color' variant="body1" mb='1rem'>
                                Effortlessly pay bills and recharge online with our
                                user-friendly payment system. Simplify your life with
                                just a few clicks!
                            </Typography>
                            <Typography>
                                <Button style={{ backgroundColor: '#0eacb2', marginRight: '1rem', width: '170px' }} variant="contained">Get Started</Button>
                                <Link href="#" style={{ color: '#0eacb2' }} underline="always">How it works?</Link>
                            </Typography>

                        </Box>

                    </Grid>
                    <Grid item xs={12} md={6} sm={6} sx={{ mr: 2, display: { xs: 'none', md: 'flex', sm:'none' } }}>
                        <Image
                            style={{ marginLeft: '3rem' }} src="/group.webp"
                            alt="Image"
                            width={620}
                            height={544}
                        />
                    </Grid>
                </Grid>
            </Container>
        </>

    );
};

export default dynamic(() => Promise.resolve(GridComponent), { ssr: false })