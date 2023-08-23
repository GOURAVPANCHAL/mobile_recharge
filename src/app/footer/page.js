"use client"
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <>
      <Box style={{ background: '#FAFBFC', paddingTop: '4rem', paddingBottom: '2rem' }}>

        <Container>
          <Grid container spacing={2}>
            <Grid item xs={6} md={4}>
              <Box>
                <h3 className='text_color' style={{ marginBottom: '1rem' }}>Logo</h3>
                <Typography className='text' style={{ maxWidth: '15rem' }}>Generate outside the box thinking with the possibility to targtet the low.</Typography>
              </Box>
              <Box>
              <h4 className='text_color' style={{ marginBottom: '1rem' }}>Resources</h4>
              <ul className='text' style={{ listStyle: 'none', lineHeight: '2' }}>
                <li>Community</li>
                <li>Payment</li>
                <li>Help Center</li>
                <li>Partners</li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={6} md={2}>
              <h4 className='text_color' style={{ marginBottom: '1rem' }}>Resources</h4>

              <ul className='text' style={{ listStyle: 'none', lineHeight: '2' }}>
                <li>Community</li>
                <li>Payment</li>
                <li>Help Center</li>
                <li>Partners</li>
              </ul>
            </Grid>
            <Grid item xs={6} md={3}>
              <h4 className='text_color' style={{ marginBottom: '1rem' }}>
                Products
              </h4>

              <ul className='text' style={{ listStyle: 'none', lineHeight: '2' }}>
                <li>Integrations</li>
                <li>Solution</li>
                <li>Features</li>
                <li>Enterprise</li>
              </ul>
            </Grid>
            <Grid item xs={6} md={3}>
              <h4 className='text_color' style={{ marginBottom: '1rem' }}>Get Email Notification</h4>
              <Typography className='text'>Generate outside the box thinking with the possibility to target the low</Typography>
            </Grid>
          </Grid>

          <hr style={{ marginTop: '3rem', marginBottom: '2rem' }} />
          <Box>
            <Grid container spacing={2} >
              <Grid item md={10} xs={12}>
                <Typography className='text'>© 2023 MobileRecharge. All Rights Reserved.</Typography>
              </Grid>
              <Grid display='flex' justifyContent='space-between' color='#0eacb2' gap={1} item md={2} xs={6}>
                <Box>
                  <FacebookRoundedIcon />
                </Box>
                <Box>
                  <GoogleIcon />
                </Box>
                <Box>
                  <AppleIcon />
                </Box>
                <Box>
                  <InstagramIcon />
                </Box>
              </Grid>
            </Grid>
          </Box>

        </Container>

      </Box>

    </>
  )
}

export default Footer