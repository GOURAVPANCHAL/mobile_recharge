import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import dynamic from 'next/dynamic';
const Features = () => {

    return (
        <>
            <Container>
                <Box sx={{ mt: { xs: '1rem', sm: '2rem', md: '4rem' }, mb: '0rem' }} fontStyle={{ textAlign: 'center', mb: '4rem' }}>
                    <Typography fontWeight={700} sx={{
                        fontSize: { xs: '23px', md: '40px' },
                    }} className='heading_main' mb='1rem' variant="h4">
                        Redefining Product Features
                    </Typography>
                    <Typography variant="p" className='text'>
                        Fast and convenient online recharge for mobile phones, with various payment options, special offers,
                        <Typography sx={{ mb: { xs: '2rem', md: '4rem' }, }}>
                            and excellent customer service.
                        </Typography>
                    </Typography>

                    <Typography sx={{ display: { xs: 'block', sm: 'none' } }}>
                        <img width='100%' src="responsive1.webp" alt="mobileImg" />
                    </Typography>
                </Box>
                <Grid sx={{ mb: { xs: '0rem', sm: '0rem' }, }} mb='4rem' container spacing={2}>
                    <Grid sx={{ mb: { xs: '0rem', md: '1rem' }, }} item xs={12} sm={5} mt='1rem'>
                        <Typography sx={{ mt: { xs: '0rem', sm: '0rem' }, }} className='heading' variant="h4" gutterBottom>
                            Secure Payment Gateways
                        </Typography>
                        <Typography className='text'>
                            <Typography style={{ mb: '2rem' }} variant='p'>
                                Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt. Aenean malesuada tellus tellus faucibus mauris quisque mauris in.
                            </Typography>
                            <Box mt='1rem' mb='2rem' lineHeight='2'>
                                <Box display='flex' alignItems='center' gap='0.50rem'>
                                    <CheckIcon style={{ color: '#0eacb2' }} />
                                    Enterprise-grade security
                                </Box>
                                <Box display='flex' alignItems='center' gap='0.50rem'>
                                    <CheckIcon style={{ color: '#0eacb2' }} />
                                    99.9% guaranteed uptime SLA
                                </Box>
                                <Box display='flex' alignItems='center' gap='0.50rem'>
                                    <CheckIcon style={{ color: '#0eacb2' }} />
                                    Designated customer success team
                                </Box>
                            </Box>
                            <Typography sx={{ mb: { xs: '2rem', sm: '2rem' } }}>
                                <Button style={{ backgroundColor: '#0eacb2' }} variant="contained">Start Now <ArrowForwardIcon style={{ marginLeft: '0.400rem' }} /></Button>
                            </Typography>
                            <Typography sx={{ display: { xs: 'block', sm: 'none' } }}>
                                <img width='100%' src="responsive2.webp" alt="mobileImg" />
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                    </Grid>
                    <Grid sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }} item xs={12} sm={5}>
                        <img sx={{ width: {xs:'100% !important', sm:'100% !important'}}}
                            src="Photo.webp"
                            alt="img"
                            width='603px'
                            height='376px'
                        />
                    </Grid>
                </Grid>
            </Container>

            <Box sx={{ mt: { xs: '0rem', sm: '1rem', md:'3rem' }, mb: '3rem', paddingBottom: '2rem', paddingTop: '3rem' }} style={{ background: '#FAFBFC', paddingTop: '3rem', paddingBottom: '3rem', mb: '4rem' }}>
                <Container>
                    <Grid container>
                        <Grid sx={{ display: { xs: 'none', sm: 'block', md: 'block' }, paddingTop: '0rem' }} item xs={12} sm={6} >
                            <img
                                src="Photo2.webp"
                                alt="img"
                                width={603}
                                height={376}
                            />
                        </Grid>
                        <Grid item xs={12} sm={1}>
                        </Grid>
                        <Grid sx={{ paddingBottom: { xs: '0px', md: '4rem' }, marginTop: { xs: '-3rem', md: '1rem' } }} item xs={12} sm={5}>
                            <Typography className='heading' variant="h4" gutterBottom>
                                Multiple payment options
                            </Typography>
                            <Typography className='text'>
                                <Typography variant='p'>
                                    Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt. Aenean malesuada tellus tellus faucibus mauris quisque mauris in.
                                </Typography>

                                <Box mt='1rem' mb='2rem' lineHeight='2'>
                                    <Box display='flex' alignItems='center' gap='0.50rem'>
                                        <CheckIcon style={{ color: '#0eacb2' }} />
                                        Enterprise-grade security
                                    </Box>
                                    <Box display='flex' alignItems='center' gap='0.50rem'>
                                        <CheckIcon style={{ color: '#0eacb2' }} />
                                        99.9% guaranteed uptime SLA
                                    </Box>
                                    <Box display='flex' alignItems='center' gap='0.50rem'>
                                        <CheckIcon style={{ color: '#0eacb2' }} />
                                        Designated customer success team
                                    </Box>
                                </Box>
                                <Typography>
                                    <Button style={{ backgroundColor: '#0eacb2' }} variant="contained">Start Now <ArrowForwardIcon style={{ marginLeft: '0.400rem' }} /></Button>
                                </Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Container sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>
                <Grid mb='3rem' container spacing={2}>
                    <Grid item xs={12} sm={5} mt='1rem'>
                        <Typography className='heading' variant="h4" gutterBottom>
                            User-Friendly Interface
                        </Typography>
                        <Typography className='text'>
                            <Typography style={{ mb: '2rem' }} variant='p'>
                                Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt. Aenean malesuada tellus tellus faucibus mauris quisque mauris in.
                            </Typography>
                            <Box mt='1rem' mb='2rem' lineHeight='2'>
                                <Box display='flex' alignItems='center' gap='0.50rem'>
                                    <CheckIcon style={{ color: '#0eacb2' }} />
                                    Enterprise-grade security
                                </Box>
                                <Box display='flex' alignItems='center' gap='0.50rem'>
                                    <CheckIcon style={{ color: '#0eacb2' }} />
                                    99.9% guaranteed uptime SLA
                                </Box>
                                <Box display='flex' alignItems='center' gap='0.50rem'>
                                    <CheckIcon style={{ color: '#0eacb2' }} />
                                    Designated customer success team
                                </Box>
                            </Box>
                            <Typography>
                                <Button style={{ backgroundColor: '#0eacb2' }} variant="contained">Start Now <ArrowForwardIcon style={{ marginLeft: '0.400rem' }} /></Button>
                            </Typography>
                        </Typography>
                        <Typography sx={{ display: { xs: 'block', sm: 'none' }, width: '100%' }}>
                            <img src="responsive2.webp" alt="responsive2" srcSet="" />
                        </Typography>

                    </Grid>
                    <Grid item xs={12} sm={1}>
                    </Grid>
                    <Grid sx={{ display: { xs: 'none', sm: 'block' } }} item xs={12} sm={5}>
                        <img
                            src="/Photo3.webp"
                            alt="img"
                            width={603}
                            height={376}
                        />
                    </Grid>

                </Grid>
            </Container>



            <Box item sx={{ display: { xs: 'none', sm: 'block' } }} style={{ background: '#FAFBFC', paddingTop: '3rem', paddingBottom: '3rem', mb: '4rem' }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <img item sx={{ display: { xs: 'none', sm: 'block' } }} src="/Photo4.webp" alt="img" width={603} height={376} />
                        </Grid>
                        <Grid item xs={12} sm={1}>
                        </Grid>
                        <Grid item xs={12} sm={5} mt='1rem'>
                            <Typography className='heading' variant="h4" gutterBottom>
                                24/7 Availability 
                            </Typography>
                            <Typography className='text'>
                                <Typography variant='p'>
                                    Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt. Aenean malesuada tellus tellus faucibus mauris quisque mauris in.
                                </Typography>

                                <Box mt='1rem' mb='2rem' lineHeight='2'>
                                    <Box display='flex' alignItems='center' gap='0.50rem'>
                                        <CheckIcon style={{ color: '#0eacb2' }} />
                                        Enterprise-grade security
                                    </Box>
                                    <Box display='flex' alignItems='center' gap='0.50rem'>
                                        <CheckIcon style={{ color: '#0eacb2' }} />
                                        99.9% guaranteed uptime SLA
                                    </Box>
                                    <Box display='flex' alignItems='center' gap='0.50rem'>
                                        <CheckIcon style={{ color: '#0eacb2' }} />
                                        Designated customer success team
                                    </Box>
                                </Box>
                                <Typography>
                                    <Button style={{ backgroundColor: '#0eacb2' }} variant="contained">Start Now<ArrowForwardIcon style={{ marginLeft: '0.400rem' }} /></Button>
                                </Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default dynamic(() => Promise.resolve(Features), { ssr: false })