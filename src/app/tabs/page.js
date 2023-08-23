"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Container, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import SchoolIcon from '@mui/icons-material/School';
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  const Deta = ['']

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [age, setAge] = React.useState('');

  const handleChanged = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Container style={{ marginTop: '4rem' }}>
        <Grid container>
          <Grid style={{ background: '#f9ffff', border: '1px solid #0EACB2', borderRadius: '10px', padding:'20px' }} id item={1} md={12} xs={12}>

            <Box style={{ background: '#f9ffff', color: '#F9FFFF' }} sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs inkBarStyle={{ backgroundColor: '#e77600' }} value={value} onChange={handleChange} aria-icon="basic tabs example">
                  <Tab className='tabsbg' icon={<PhoneIphoneIcon  {...a11yProps(0)} />} />
                  <Tab className='tabsbg' icon={<TipsAndUpdatesIcon {...a11yProps(1)} />} />
                  <Tab className='tabsbg' icon={<PodcastsIcon {...a11yProps(2)} />} />
                  <Tab className='tabsbg' icon={<TipsAndUpdatesIcon {...a11yProps(3)} />} />
                  <Tab className='tabsbg' icon={<BeachAccessIcon {...a11yProps(4)} />} />
                  <Tab className='tabsbg' icon={<SchoolIcon {...a11yProps(5)} />} />
                  <Tab className='tabsbg' icon={<TipsAndUpdatesIcon {...a11yProps(6)} />} />
                  <Tab className='tabsbg' icon={<ArrowForwardIcon {...a11yProps(7)} />} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <Grid spacing={2}>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={4}>
                    <Box
                      component="form"
                      sx={{'& > :not(style)': { m: 1, width: '32ch' },width:'20ch !important'}}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Mobile Number" placeholder='+91' variant="outlined" />
                    </Box>
                  </Grid>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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

                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <Box
                      component="form"
                      sx={{
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Amount" placeholder='₹' variant="outlined" />
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant="contained" style={{ background: '#0EACB2', marginTop: '1rem' }}>
                      Proceed
                    </Button>
                  </Grid>
                </Grid>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className='text'>
                    <FormControlLabel value="prepaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Prepaid" />
                    <FormControlLabel value="postpaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Postpaid" />
                  </RadioGroup>
                </FormControl>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Grid container spacing={2}>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={4}>
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '32ch' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Mobile Number" placeholder='+91' variant="outlined" />
                    </Box>

                  </Grid>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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

                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <Box
                      component="form"
                      sx={{
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Amount" placeholder='₹' variant="outlined" />
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant="contained" style={{ background: '#0EACB2', marginTop: '1rem' }}>
                      Proceed
                    </Button>
                  </Grid>
                </Grid>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className='text'>
                    <FormControlLabel value="prepaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Prepaid" />
                    <FormControlLabel value="postpaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Postpaid" />
                  </RadioGroup>
                </FormControl>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <Grid container spacing={2}>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={4}>
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '32ch' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Mobile Number" placeholder='+91' variant="outlined" />
                    </Box>

                  </Grid>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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

                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <Box
                      component="form"
                      sx={{
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Amount" placeholder='₹' variant="outlined" />
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant="contained" style={{ background: '#0EACB2', marginTop: '1rem' }}>
                      Proceed
                    </Button>
                  </Grid>
                </Grid>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className='text'>
                    <FormControlLabel value="prepaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Prepaid" />
                    <FormControlLabel value="postpaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Postpaid" />
                  </RadioGroup>
                </FormControl>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                <Grid container spacing={2}>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={4}>
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '32ch' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Mobile Number" placeholder='+91' variant="outlined" />
                    </Box>

                  </Grid>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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

                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <Box
                      component="form"
                      sx={{
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Amount" placeholder='₹' variant="outlined" />
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant="contained" style={{ background: '#0EACB2', marginTop: '1rem' }}>
                      Proceed
                    </Button>
                  </Grid>
                </Grid>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className='text'>
                    <FormControlLabel value="prepaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Prepaid" />
                    <FormControlLabel value="postpaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Postpaid" />
                  </RadioGroup>
                </FormControl>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={4}>
                <Grid container spacing={2}>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={4}>
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '32ch' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Mobile Number" placeholder='+91' variant="outlined" />
                    </Box>

                  </Grid>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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

                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <Box
                      component="form"
                      sx={{
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Amount" placeholder='₹' variant="outlined" />
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant="contained" style={{ background: '#0EACB2', marginTop: '1rem' }}>
                      Proceed
                    </Button>
                  </Grid>
                </Grid>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className='text'>
                    <FormControlLabel value="prepaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Prepaid" />
                    <FormControlLabel value="postpaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Postpaid" />
                  </RadioGroup>
                </FormControl>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={5}>
                <Grid container spacing={2}>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={4}>
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '32ch' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Mobile Number" placeholder='+91' variant="outlined" />
                    </Box>

                  </Grid>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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

                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <Box
                      component="form"
                      sx={{
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Amount" placeholder='₹' variant="outlined" />
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant="contained" style={{ background: '#0EACB2', marginTop: '1rem' }}>
                      Proceed
                    </Button>
                  </Grid>
                </Grid>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className='text'>
                    <FormControlLabel value="prepaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Prepaid" />
                    <FormControlLabel value="postpaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Postpaid" />
                  </RadioGroup>
                </FormControl>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={6}>
                <Grid container spacing={2}>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={4}>
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '32ch' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Mobile Number" placeholder='+91' variant="outlined" />
                    </Box>

                  </Grid>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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

                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <Box
                      component="form"
                      sx={{
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Amount" placeholder='₹' variant="outlined" />
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant="contained" style={{ background: '#0EACB2', marginTop: '1rem' }}>
                      Proceed
                    </Button>
                  </Grid>
                </Grid>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className='text'>
                    <FormControlLabel value="prepaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Prepaid" />
                    <FormControlLabel value="postpaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Postpaid" />
                  </RadioGroup>
                </FormControl>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={7}>
                <Grid container spacing={2}>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={4}>
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '32ch' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Mobile Number" placeholder='+91' variant="outlined" />
                    </Box>

                  </Grid>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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

                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <Box
                      component="form"
                      sx={{
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Amount" placeholder='₹' variant="outlined" />
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant="contained" style={{ background: '#0EACB2', marginTop: '1rem' }}>
                      Proceed
                    </Button>
                  </Grid>
                </Grid>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className='text'>
                    <FormControlLabel value="prepaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Prepaid" />
                    <FormControlLabel value="postpaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Postpaid" />
                  </RadioGroup>
                </FormControl>
              </CustomTabPanel>
            </Box>
          </Grid>
        </Grid>
      </Container>



{/* 
      <Container style={{ marginTop: '4rem' }}>
        <Grid>
          <Grid style={{ background: '#f9ffff', border: '1px solid #0EACB2', padding: '30px', borderRadius: '10px' }} id item={1} xs='6' sm='6'>
            <Box style={{ background: '#f9ffff', color: '#F9FFFF' }} sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs inkBarStyle={{ backgroundColor: '#e77600' }} value={value} onChange={handleChange} aria-icon="basic tabs example">
                  <Tab className='tabsbg' icon={<PhoneIphoneIcon  {...a11yProps(0)} />} />
                  <Tab className='tabsbg' icon={<TipsAndUpdatesIcon {...a11yProps(1)} />} />
                  <Tab className='tabsbg' icon={<PodcastsIcon {...a11yProps(2)} />} />
                  <Tab className='tabsbg' icon={<TipsAndUpdatesIcon {...a11yProps(3)} />} />
                  <Tab className='tabsbg' icon={<BeachAccessIcon {...a11yProps(4)} />} />
                  <Tab className='tabsbg' icon={<SchoolIcon {...a11yProps(5)} />} />
                  <Tab className='tabsbg' icon={<TipsAndUpdatesIcon {...a11yProps(6)} />} />
                  <Tab className='tabsbg' icon={<ArrowForwardIcon {...a11yProps(7)} />} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <Grid container spacing={2}>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={4}>
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '32ch' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Mobile Number" placeholder='+91' variant="outlined" />
                    </Box>

                  </Grid>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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

                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <Box
                      component="form"
                      sx={{
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Amount" placeholder='₹' variant="outlined" />
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant="contained" style={{ background: '#0EACB2', marginTop: '1rem' }}>
                      Proceed
                    </Button>
                  </Grid>
                </Grid>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className='text'>
                    <FormControlLabel value="prepaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Prepaid" />
                    <FormControlLabel value="postpaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Postpaid" />
                  </RadioGroup>
                </FormControl>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Grid container spacing={2}>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={4}>
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '32ch' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Mobile Number" placeholder='+91' variant="outlined" />
                    </Box>

                  </Grid>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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

                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <Box
                      component="form"
                      sx={{
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Amount" placeholder='₹' variant="outlined" />
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant="contained" style={{ background: '#0EACB2', marginTop: '1rem' }}>
                      Proceed
                    </Button>
                  </Grid>
                </Grid>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className='text'>
                    <FormControlLabel value="prepaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Prepaid" />
                    <FormControlLabel value="postpaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Postpaid" />
                  </RadioGroup>
                </FormControl>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <Grid container spacing={2}>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={4}>
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '32ch' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Mobile Number" placeholder='+91' variant="outlined" />
                    </Box>

                  </Grid>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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

                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <Box
                      component="form"
                      sx={{
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Amount" placeholder='₹' variant="outlined" />
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant="contained" style={{ background: '#0EACB2', marginTop: '1rem' }}>
                      Proceed
                    </Button>
                  </Grid>
                </Grid>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className='text'>
                    <FormControlLabel value="prepaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Prepaid" />
                    <FormControlLabel value="postpaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Postpaid" />
                  </RadioGroup>
                </FormControl>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                <Grid container spacing={2}>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={4}>
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '32ch' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Mobile Number" placeholder='+91' variant="outlined" />
                    </Box>

                  </Grid>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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

                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <Box
                      component="form"
                      sx={{
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Amount" placeholder='₹' variant="outlined" />
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant="contained" style={{ background: '#0EACB2', marginTop: '1rem' }}>
                      Proceed
                    </Button>
                  </Grid>
                </Grid>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className='text'>
                    <FormControlLabel value="prepaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Prepaid" />
                    <FormControlLabel value="postpaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Postpaid" />
                  </RadioGroup>
                </FormControl>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={4}>
                <Grid container spacing={2}>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={4}>
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '32ch' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Mobile Number" placeholder='+91' variant="outlined" />
                    </Box>

                  </Grid>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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

                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <Box
                      component="form"
                      sx={{
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Amount" placeholder='₹' variant="outlined" />
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant="contained" style={{ background: '#0EACB2', marginTop: '1rem' }}>
                      Proceed
                    </Button>
                  </Grid>
                </Grid>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className='text'>
                    <FormControlLabel value="prepaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Prepaid" />
                    <FormControlLabel value="postpaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Postpaid" />
                  </RadioGroup>
                </FormControl>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={5}>
                <Grid container spacing={2}>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={4}>
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '32ch' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Mobile Number" placeholder='+91' variant="outlined" />
                    </Box>

                  </Grid>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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

                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <Box
                      component="form"
                      sx={{
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Amount" placeholder='₹' variant="outlined" />
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant="contained" style={{ background: '#0EACB2', marginTop: '1rem' }}>
                      Proceed
                    </Button>
                  </Grid>
                </Grid>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className='text'>
                    <FormControlLabel value="prepaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Prepaid" />
                    <FormControlLabel value="postpaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Postpaid" />
                  </RadioGroup>
                </FormControl>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={6}>
                <Grid container spacing={2}>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={4}>
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '32ch' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Mobile Number" placeholder='+91' variant="outlined" />
                    </Box>

                  </Grid>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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

                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <Box
                      component="form"
                      sx={{
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Amount" placeholder='₹' variant="outlined" />
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant="contained" style={{ background: '#0EACB2', marginTop: '1rem' }}>
                      Proceed
                    </Button>
                  </Grid>
                </Grid>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className='text'>
                    <FormControlLabel value="prepaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Prepaid" />
                    <FormControlLabel value="postpaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Postpaid" />
                  </RadioGroup>
                </FormControl>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={7}>
                <Grid container spacing={2}>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={4}>
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '32ch' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Mobile Number" placeholder='+91' variant="outlined" />
                    </Box>

                  </Grid>
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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
                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
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

                  <Grid style={{ padding: '20px 0px 0px 0px' }} item xs={12} md={2}>
                    <Box
                      component="form"
                      sx={{
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Amount" placeholder='₹' variant="outlined" />
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant="contained" style={{ background: '#0EACB2', marginTop: '1rem' }}>
                      Proceed
                    </Button>
                  </Grid>
                </Grid>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className='text'>
                    <FormControlLabel value="prepaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Prepaid" />
                    <FormControlLabel value="postpaid" control={<Radio style={{ color: 'rgb(14, 172, 178)' }} />} label="Postpaid" />
                  </RadioGroup>
                </FormControl>
              </CustomTabPanel>
            </Box>
          </Grid>
        </Grid>
      </Container> */}



    </>

  );
}