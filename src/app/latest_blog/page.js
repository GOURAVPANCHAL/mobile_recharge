import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import React from 'react'
const Latest_blog = () => {
    return (
        <>
            <Container mt='4rem' mb='4rem'>
                <Typography sx={{ mb: { xs: '2rem !important', sm: '0rem' }}} mb='4rem' fontStyle={{ textAlign: 'center' }}>
                {/* sx={{ fontSize: { xs: '24px !important', sm: '24px', md:'40px !important' }, */}
                    <Typography fontWeight={700}  mt='3rem !important' fontSize={"2rem"} className='heading_main'  mb='1rem'>
                        Latest Blog Post
                    </Typography>
                    <Typography sx={{mr: 2,display: { xs: 'none', md: 'block' }}} style={{ fontSize: '14px' }} className='text' variant='p' mb='3rem'>
                        Completely synergize resource taxing relationships via premier niche markets. Professionally  cultivate
                        <Typography className='text'>
                            one-to-one customer service with robust ideas.
                        </Typography>
                    </Typography>
                    <Typography sx={{ display: { md: 'none', xs: 'block' } }} style={{ fontSize: '16px' }} className='text' variant='p' mb='1rem'>Completely synergize resource taxing relationships via premier niche markets.</Typography>
                </Typography>
                <Container mt='3rem'>
                    <Grid container spacing={2}>
                        <Grid item md={4} xs={12}>
                            <Card sx={{ boxShadow: { xs: 'none', sm: 'none', md:'0px 2px 10px 0px #00000026'}, padding:{xs:'0px', sm:'0px', md:'20px'}}} boxShaddow='0px 2px 10px 0px #00000026'>
                                <CardMedia sx={{ display: { xs: 'none', sm: 'none', md:'block'},height:'180px', width:'100%'}} style={{ borderRadius: '8px' }}
                                    image="blog3.webp"
                                    title="green iguana"
                                />
                                <CardMedia sx={{ display: { xs: 'block', sm: 'block', md:'none'},height:{xs:'355px',},width:{xs:'100%'}}} style={{ borderRadius: '8px'}}
                                    image="blog_responsive.webp"
                                    title="green iguana"
                                />
                                <CardContent sx={{ display: { xs: 'none', md: 'block'}}} style={{ padding: '20px 0px 0px 0px' }}>
                                    <Typography gutterBottom variant="p" style={{ color: '#0EACB2' }} component="div">
                                        E-Money
                                    </Typography>
                                    <Typography style={{fontWeight:'500'}}  gutterBottom variant="h5" component="div">
                                        Future of Online Payment
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        How do you create compelling presentations
                                        that wow your colleagues and impress your
                                        managers?
                                    </Typography>
                                </CardContent>

                                <CardContent sx={{ display: { md: 'none !important', sm: 'block' }}} style={{padding:'0px',paddingTop:'15px'}}>
                                    <Typography>
                                        25 Apr 2022
                                    </Typography>
                                    <Typography style={{fontWeight:'700'}} gutterBottom variant="h5" component="div">
                                        Future of Online Payment
                                    </Typography>
                                    <Typography>
                                        <Link href='#' color='#0eacb2 !important'>Learn more</Link>
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ display: { xs: 'none', sm: 'block', md:'flex' }}} p={8} mt={1} display='flex'>
                                    <img src="Avatar.png" alt="" srcSet="" />
                                    <Typography marginLeft='1rem'>
                                        <Typography style={{fontWeight:'600'}} >Olivia Rhye</Typography>
                                        <Typography className='text'>20 Jan 2022</Typography>
                                    </Typography>
                                </CardActions>
                            </Card>
                        </Grid>


                        <Grid item md={4} xs={12}>
                            <Card sx={{ padding: { xs: '0', sm: '0', md:'20px'}, boxShadow :{xs:'none', sm:'none', md:'0px 2px 10px 0px #00000026' }}}>
                                <CardMedia sx={{ display: { xs: 'none', sm: 'none', md:'block'},height:'180px', width:'100%'}} style={{ borderRadius: '8px' }}
                                    image="blog2.webp"
                                    title="green iguana"
                                />
                                    <CardMedia sx={{ display: { xs: 'block', sm: 'block', md:'none'},height:{xs:'355px',},width:{xs:'100%'}}} style={{ borderRadius: '8px' }}
                                    image="Rectangle2.webp"
                                    title="green iguana"
                                />

                                <CardContent sx={{display: { xs: 'none', md: 'block' }}} style={{ padding: '20px 0px 0px 0px' }}>
                                    <Typography gutterBottom variant="p" style={{ color: '#0EACB2' }} component="div">
                                        E-Money
                                    </Typography>
                                    <Typography style={{fontWeight:'500'}} gutterBottom variant="h5" component="div">
                                        Future of Online Payment
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        How do you create compelling presentations
                                        that wow your colleagues and impress your
                                        managers?
                                    </Typography>
                                </CardContent>
                                <CardContent sx={{ display: { md: 'none !important', sm: 'block' }}} style={{padding:'0px',paddingTop:'15px'}}>
                                    <Typography>
                                        25 Apr 2022
                                    </Typography>
                                    <Typography style={{fontWeight:'500'}}  gutterBottom variant="h5" component="div">
                                        Future of Online Payment
                                    </Typography>
                                    <Typography>
                                        <Link href='#' color='#0eacb2'>Learn more</Link>
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{mr: 2,display: { xs: 'none', md: 'flex' }}}>
                                    <img src="Avatar.png" alt="" srcSet="" />
                                    <Typography marginLeft='1rem'>
                                        <Typography style={{fontWeight:'600'}} >Olivia Rhye</Typography>
                                        <Typography className='text'>20 Jan 2022</Typography>
                                    </Typography>
                                </CardActions>
                            </Card>
                        </Grid>


                        <Grid sx={{ display: { xs: 'none', sm: 'block' } }} item md={4} xs={12}>
                            <Card sx={{ padding: { xs: '0px', sm: '0px', md:'20px'}, boxShadow:{xs:'none', sm:'none', md:'0px 2px 10px 0px #00000026'}}}>
                                <CardMedia style={{ borderRadius: '8px' }}
                                    sx={{ height: 180 }}
                                    image="blog1.webp"
                                    title="green iguana"

                                />
                                <CardContent style={{ padding: '20px 0px 0px 0px' }}>
                                    <Typography gutterBottom variant="p" style={{ color: '#0EACB2' }} component="div">
                                        E-Money
                                    </Typography>
                                    <Typography style={{fontWeight:'500'}}  gutterBottom variant="h5" component="div">
                                        Future of Online Payment
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        How do you create compelling presentations
                                        that wow your colleagues and impress your
                                        managers?
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <img src="Avatar.png" alt="" srcSet="" />
                                    <Typography marginLeft='1rem'>
                                        <Typography style={{fontWeight:'600'}} >Olivia Rhye</Typography>
                                        <Typography className='text'>20 Jan 2022</Typography>
                                    </Typography>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>

            </Container>

        </>
    )
}

export default dynamic (()=> Promise.resolve(Latest_blog),{ssr:false})