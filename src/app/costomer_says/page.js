import { Box, Button, Card, CardActions, CardContent, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import dynamic from 'next/dynamic'



const Costomer_says = () => {
    return (
        <Box sx={{ mt: { xs: '4rem', sm: '1rem', md: '4rem' }, marginBottom: { xs: '2rem', md: '4rem', sm: '4rem' }, paddingBottom: { xs: '0rem', md: '3rem', sm: '3rem' }, background: { md: '#FAFBFC', xs: 'white', sm: '#FAFBFC' } }} style={{ paddingTop: '3rem !important', paddingBottom: '3rem !important', mb: '4rem !important' }}>
            <Container>
                <Typography sx={{ paddingTop: { xs: '0px', md: '3rem' }, paddingBottom: { md: '2rem' } }} style={{ textAlign: 'center', mb: '4rem' }}>
                    <Typography sx={{ fontSize: { xs: '24px', sm: '24px', md: '40px' } }} fontWeight={700} className='heading_main' gutterBottom variant="h4">
                        What Our Customers Say
                    </Typography>

                    <Typography sx={{ display: { xs: 'none', md: 'block' } }} className='text' gutterBottom variant="p">
                        Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                        <Typography className='text'>
                            Bring to the table win-win strategies to ensure domination.
                        </Typography>
                    </Typography>                    <Typography className='text' sx={{ display: { md: 'none !important', sm: 'block' } }} >
                        Organically grow the holistic world view of disruptive innovation via workplace.
                    </Typography>
                </Typography><Grid container spacing={2}><Grid item md={3} xs={12}>
                    <Card style={{ boxShadow: 'none', background: 'transparent' }} sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <img src="Icon.png" alt="" srcSet="" />
                            </Typography>
                            <Typography variant="body2" fontWeight={500}>
                                “Thank you for making it painless, and pleasant and most of all hassle free! I love this. I can't say enough about this.”
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <img src="Avatar1.png" alt="" srcSet="" />
                            <Typography marginLeft='1rem'>
                                <Typography fontSize='15px' fontWeight={500}>Dave Jones</Typography>
                                <Typography className='text' fontSize='14px' fontWeight={500}>CEO</Typography>
                            </Typography>
                        </CardActions>
                    </Card>
                </Grid>
                    <Grid item md={3} xs={12}>
                        <Card style={{ boxShadow: 'none', background: 'transparent' }} sx={{ minWidth: 275 }}>
                            <CardContent>

                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    <img src="Icon.png" alt="" srcSet="" />
                                </Typography>
                                <Typography fontWeight={500} variant="body2">
                                    “Wow what great service, I love it! This is great. LookScout has surpassed our expectations. I use this often.”
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <img src="Avatar2.png" alt="" srcSet="" />
                                <Typography marginLeft='1rem'>
                                    <Typography fontSize='15px' fontWeight={500}>Andrew Drue</Typography>
                                    <Typography className='text' fontSize='14px' fontWeight={500}>UI/UX Designer</Typography>
                                </Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid sx={{ display: { xs: 'none', md: 'block' } }} item md={3} xs={12}>
                        <Card style={{ boxShadow: 'none', background: 'transparent' }} sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    <img src="Icon.png" alt="" srcSet="" />
                                </Typography>
                                <Typography fontWeight={500} variant="body2">
                                    “I could probably go into sales for you. The service was excellent. The service was excellent. Great job, I will definitely again!”                                </Typography>
                            </CardContent>
                            <CardActions>
                                <img src="Avatar3.png" alt="" srcSet="" />
                                <Typography marginLeft='1rem'>
                                    <Typography fontSize='15px' fontWeight={500}>Olivia Monson</Typography>
                                    <Typography className='text' fontSize='14px' fontWeight={500}>Project Manager</Typography>
                                </Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid sx={{ display: { xs: 'none', md: 'block' } }} item md={3} xs={12}>
                        <Card style={{ boxShadow: 'none', background: 'transparent' }} sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    <img src="Icon.png" alt="" srcSet="" />
                                </Typography>
                                <Typography fontWeight={500} variant="body2">
                                    “Message then already cc uat. Me optimal on agile lean our key. Last solutions guys version goalposts close. Social supervisor fured.”                                </Typography>
                            </CardContent>
                            <CardActions>
                                <img src="Avatar4.png" alt="" srcSet="" />
                                <Typography marginLeft='1rem'>
                                    <Typography fontSize='15px' fontWeight={500}>Travis Ryan</Typography>
                                    <Typography className='text' fontSize='14px' fontWeight={500}>Supervisor</Typography>
                                </Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default dynamic(() => Promise.resolve(Costomer_says), { ssr: false })