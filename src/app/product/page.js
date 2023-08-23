import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Features = () => {
    return (
        <>
            <Container style={{ marginTop: '4rem' }}>
                <Box sx={{ marginTop: { xs: '1rem', sm: '2rem' }, marginBottom: '0rem' }} fontStyle={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <Typography sx={{
                        fontSize: { xs: '24px !important', md: '40px !important' },
                    }} className='heading_main' marginBottom='1rem' variant="h4">
                        Redefining Product Features
                    </Typography>
                    <Typography variant="p" className='text'>
                        Fast and convenient online recharge for mobile phones, with various payment options, special offers,
                        <Typography sx={{ marginBottom: { xs: '2rem !important', md: '4rem !important' }, }}>
                            and excellent customer service.
                        </Typography>
                    </Typography>

                    <Typography sx={{ display: { xs: 'block', sm: 'none' }}}>
                        <img width='100%' src="responsive1.webp" alt="mobileImg" />
                    </Typography>

                </Box>

                <Grid sx={{ marginBottom: { xs: '0rem', sm: '0rem' }, }} marginBottom='4rem' container spacing={2}>
                    <Grid sx={{ marginBottom: { xs: '0rem !important', md: '1rem !important' }, }} item xs={12} sm={5} marginTop='1rem'>

                        <Typography sx={{ marginTop: { xs: '0rem !important', sm: '0rem' }, }} className='heading' variant="h4" gutterBottom>
                            Secure Payment Gateways
                        </Typography>
                        <Typography className='text'>
                            <Typography style={{ marginBottom: '2rem' }} variant='p'>
                                Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt. Aenean malesuada tellus tellus faucibus mauris quisque mauris in.
                            </Typography>
                            <Box marginTop='1rem' marginBottom='2rem'>
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
                            <Typography sx={{ marginBottom: { xs: '2rem !important', sm: '2rem' }, }}>
                                <Button style={{ backgroundColor: '#0eacb2' }} variant="contained">Start Now <ArrowForwardIcon style={{ marginLeft: '0.400rem' }} /></Button>
                            </Typography>


                            <Typography sx={{ display: { xs: 'block', sm: 'none' }}}>
                                <img width='100%' src="responsive2.webp" alt="mobileImg" />
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                    </Grid>
                    <Grid sx={{ display: { xs: 'none', sm: 'block' } }} item xs={12} sm={5}>
                        <Image
                            src="/Photo.webp"
                            alt="Image"
                            width={500}
                            height={320}
                        />
                    </Grid>

                </Grid>
            </Container>

            <Box sx={{ marginTop: { xs: '0rem', sm: '1rem' }, marginBottom: '2rem !important', paddingBottom: '0rem !important', paddingTop: '3rem !important' }} style={{ background: '#FAFBFC', paddingTop: '3rem !important', paddingBottom: '3rem !important', marginBottom: '4rem !important' }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid sx={{ display: { xs: 'none', sm: 'block' }, paddingTop: '0rem' }} item xs={12} sm={5}>
                            <Image
                                src="/Photo2.webp"
                                alt="Image"
                                width={500}
                                height={320}
                            />
                        </Grid>
                        <Grid item xs={12} sm={1}>
                        </Grid>
                        <Grid sx={{ paddingBottom: { xs: '0px', md: '4rem' }, marginTop:'-3rem !important'}} item xs={12} sm={5} marginTop='1rem'>
                            <Typography className='heading' variant="h4" gutterBottom>
                                Multiple payment options
                            </Typography>
                            <Typography className='text'>
                                <Typography variant='p'>
                                    Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt. Aenean malesuada tellus tellus faucibus mauris quisque mauris in.
                                </Typography>

                                <Box marginTop='1rem' marginBottom='2rem'>
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
                <Grid marginBottom='3rem' container spacing={2}>
                    <Grid item xs={12} sm={5} marginTop='1rem'>
                        <Typography className='heading' variant="h4" gutterBottom>
                            User-Friendly Interface
                        </Typography>
                        <Typography className='text'>
                            <Typography style={{ marginBottom: '2rem' }} variant='p'>
                                Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt. Aenean malesuada tellus tellus faucibus mauris quisque mauris in.
                            </Typography>
                            <Box marginTop='1rem' marginBottom='2rem'>
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
                        <Typography sx={{ display: { xs: 'block', sm: 'none' },width:'100% !important' }}>
                            <img src="responsive2.webp" alt="responsive2" srcset="" />
                        </Typography>

                    </Grid>
                    <Grid item xs={12} sm={1}>
                    </Grid>
                    <Grid sx={{ display: { xs: 'none', sm: 'block' } }} item xs={12} sm={5}>
                        <Image
                            src="/Photo3.webp"
                            alt="Image"
                            width={500}
                            height={320}
                        />
                    </Grid>

                </Grid>
            </Container>



            <Box sx={{ display: { xs: 'none', sm: 'block' } }} style={{ background: '#FAFBFC', paddingTop: '3rem', paddingBottom: '3rem', marginBottom: '4rem' }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={5}>
                            <Image
                                src="/Photo4.webp"
                                alt="Image"
                                width={500}
                                height={320}
                            />
                        </Grid>
                        <Grid item xs={12} sm={1}>
                        </Grid>
                        <Grid item xs={12} sm={5} marginTop='1rem'>
                            <Typography className='heading' variant="h4" gutterBottom>
                                24/7 Availability
                            </Typography>
                            <Typography className='text'>
                                <Typography variant='p'>
                                    Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt. Aenean malesuada tellus tellus faucibus mauris quisque mauris in.
                                </Typography>

                                <Box marginTop='1rem' marginBottom='2rem'>
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

export default Features