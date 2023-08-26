"use client"
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, ButtonGroup, Container, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import SchoolIcon from '@mui/icons-material/School';
import dynamic from 'next/dynamic';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  const Deta = ['']
}
const BasicTabs = () => {
  const [age, setAge] = useState('');

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <>
      <Box>
        <Container>
          <Grid sx={{ padding: { xs: '20px', md: '40px' } }} style={{ border: '1px solid #0EACB2', borderRadius: '10px',background:'#F9FFFF' }}>
            <Grid item xs={10} md={12}>
              <ButtonGroup style={{boxShadow:"none", width:'100%'}} onClick={toggleContent} variant="contained" aria-label="outlined primary button group">
                <Grid style={{textAlign:'center', justifyContent:'space-between', width:'100%'}} sx={{display:{md:'flex'}}} container>
                  <Grid   style={{textAlign:'center'}} item xs={3} md={1} >
                    <Button style={{ border: '1px solid #0EACB2', color: '#0EACB2', borderRadius: '3rem', background: 'none' }}><PhoneIphoneIcon /></Button>
                    <Typography sx={{fontSize:{xs:'12px', md:'18px', sm:'15px'}}} style={{color:'#0EACB2'}}>Mobile</Typography>
                  </Grid>
                  <Grid style={{textAlign:'center'}} item xs={3} md={1}>
                    <Button  style={{ border: '1px solid #0EACB2', color: '#0EACB2', borderRadius: '3rem', background: 'none' }}><TipsAndUpdatesIcon /></Button>
                     <Typography sx={{fontSize:{xs:'12px', md:'18px', sm:'15px'}}} style={{color:'#0EACB2'}}>Electricity</Typography>
                  </Grid>
                  <Grid style={{textAlign:'center'}} item xs={3} md={1} >
                    <Button  style={{ border: '1px solid #0EACB2', color: '#0EACB2', borderRadius: '3rem', background: 'none' }}><PodcastsIcon /></Button>
                     <Typography sx={{fontSize:{xs:'12px', md:'18px', sm:'15px'}}} style={{color:'#0EACB2'}}>Broadband</Typography>
                  </Grid>
                  <Grid style={{textAlign:'center'}} item xs={3} md={1} >
                    <Button  style={{ border: '1px solid #0EACB2', color: '#0EACB2', borderRadius: '3rem', background: 'none' }}><PhoneIphoneIcon /></Button>
                     <Typography sx={{fontSize:{xs:'12px', md:'18px', sm:'15px'}}} style={{color:'#0EACB2'}}>DTH</Typography>
                  </Grid>
                  <Grid style={{textAlign:'center'}} item xs={3} md={1} >
                    <Button  style={{ border: '1px solid #0EACB2', color: '#0EACB2', borderRadius: '3rem', background: 'none' }}><BeachAccessIcon /></Button>
                     <Typography sx={{fontSize:{xs:'12px', md:'18px', sm:'15px'}}} style={{color:'#0EACB2'}}>Insurance</Typography>
                  </Grid>
                  <Grid style={{textAlign:'center'}} item xs={3} md={1} >
                    <Button  style={{ border: '1px solid #0EACB2', color: '#0EACB2', borderRadius: '3rem', background: 'none' }}><PhoneIphoneIcon /></Button>
                     <Typography sx={{fontSize:{xs:'12px', md:'18px', sm:'15px'}}} style={{color:'#0EACB2'}}>Education</Typography>
                  </Grid>
                  <Grid style={{textAlign:'center'}} item xs={3}  md={1}>
                    <Button  style={{ border: '1px solid #0EACB2', color: '#0EACB2', borderRadius: '3rem', background: 'none' }}><SchoolIcon /></Button>
                     <Typography sx={{fontSize:{xs:'12px', md:'18px', sm:'15px'}}} style={{color:'#0EACB2'}}>Movies</Typography>
                  </Grid>
                  <Grid style={{textAlign:'center'}} item xs={3} md={1}>
                    <Button  style={{ border: '1px solid #0EACB2', color: '#0EACB2', borderRadius: '3rem', background: 'none' }}><ArrowForwardIcon /></Button>
                     <Typography sx={{fontSize:{xs:'12px', md:'18px', sm:'15px'}}} style={{color:'#0EACB2'}}>More</Typography>
                  </Grid>
                </Grid>
              </ButtonGroup>

              {/* <Button sx={{ marginRight: { xs: '28px', md: '0px' }, marginBottom: { xs: '1rem', md: '0px' } }} style={{ border: '1px solid #0EACB2', color: '#0EACB2', borderRadius: '3rem', background: 'none' }}><PhoneIphoneIcon /></Button>
                  
                  <Button sx={{ marginRight: { xs: '28px', md: '0px' }, marginBottom: { xs: '1rem', md: '0px' } }} style={{ border: '1px solid #0EACB2', color: '#0EACB2', borderRadius: '3rem', background: 'none' }}><TipsAndUpdatesIcon /></Button>
                 
                  <Button sx={{ marginRight: { xs: '28px', md: '0px' }, marginBottom: { xs: '1rem', md: '0px' } }} style={{ border: '1px solid #0EACB2', color: '#0EACB2', borderRadius: '3rem', background: 'none' }}><PodcastsIcon /></Button>
                
                  <Button sx={{ marginRight: { xs: '', md: '0px' }, marginBottom: { xs: '1rem', md: '0px' } }} style={{ border: '1px solid #0EACB2', color: '#0EACB2', borderRadius: '3rem', background: 'none' }}><PhoneIphoneIcon /></Button>
               
                  <Button sx={{ marginRight: { xs: '28px', md: '0px' }, marginBottom: { xs: '1rem', md: '0px' } }} style={{ border: '1px solid #0EACB2', color: '#0EACB2', borderRadius: '3rem', background: 'none' }}><BeachAccessIcon /></Button>
                
                  <Button sx={{ marginRight: { xs: '28px', md: '0px' }, marginBottom: { xs: '1rem', md: '0px' } }} style={{ border: '1px solid #0EACB2', color: '#0EACB2', borderRadius: '3rem', background: 'none' }}><PhoneIphoneIcon /></Button>
                 
                  <Button sx={{ marginRight: { xs: '28px', md: '0px' }, marginBottom: { xs: '1rem', md: '0px' } }} style={{ border: '1px solid #0EACB2', color: '#0EACB2', borderRadius: '3rem', background: 'none' }}><SchoolIcon /></Button>
               
                  <Button sx={{ marginRight: { xs: '', md: '0px' }, marginBottom: { xs: '1rem', md: '0px' } }} style={{ border: '1px solid #0EACB2', color: '#0EACB2', borderRadius: '3rem', background: 'none' }}><ArrowForwardIcon /></Button>
             */}



              {showContent && (

                <Grid style={{ marginTop: '0rem' }} spacing={4} item container>
                  <Grid item md={4} xs={12}>
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '100%' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Mobile Number" placeholder='+91' variant="outlined" />
                    </Box>
                  </Grid>

                  <Grid item md={2} xs={12}>
                    <FormControl sx={{ m: 1, width: '100%' }}>
                      <InputLabel id="demo-simple-select-autowidth-label">Operator</InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={age}
                        onChange={handleChange}
                        autoWidth
                        label="Age"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Twenty</MenuItem>
                        <MenuItem value={21}>Twenty one</MenuItem>
                        <MenuItem value={22}>Twenty one and a half</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item md={2}>
                    <FormControl sx={{ m: 1, width: '100%' }}>
                      <InputLabel id="demo-simple-select-autowidth-label">City</InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={age}
                        onChange={handleChange}
                        autoWidth
                        label="Age"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Twenty</MenuItem>
                        <MenuItem value={21}>Twenty one</MenuItem>
                        <MenuItem value={22}>Twenty one and a half</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item md={2}>
                    <Box
                      component="form"
                      sx={{ m: 1, width: '100%' }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Amount" placeholder='₹' variant="outlined" />
                    </Box>
                  </Grid>
                  <Grid item md={2}>
                    <Box
                      component="form"
                      sx={{ m: 1, width: '100%' }}
                      noValidate
                      autoComplete="off"
                    >
                      <Button variant="contained" style={{ background: '#0EACB2', width: '170px', height: '55px' }}>
                        Proceed
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item container paddingTop='0px !important' >
                    <Grid md={8}>
                      <FormControl>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel style={{ color: 'black' }} value="Prepaid" control={<Radio style={{ color: '#0EACB2' }} />} label="Prepaid" />
                          <FormControlLabel style={{ color: 'black' }} value="Postpaid" control={<Radio style={{ color: '#0EACB2' }} />} label="Postpaid" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid style={{ marginLeft: '22px' }} md={2}>
                      <FormControl sx={{ m: 1, width: '85%' }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Check Plans</InputLabel>
                        <Select
                          labelId="demo-simple-select-autowidth-label"
                          id="demo-simple-select-autowidth"
                          value={age}
                          onChange={handleChange}
                          autoWidth
                          label="Age"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Twenty</MenuItem>
                          <MenuItem value={21}>Twenty one</MenuItem>
                          <MenuItem value={22}>Twenty one and a half</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>)}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>

  );
}

export default dynamic(() => Promise.resolve(BasicTabs), { ssr: false });