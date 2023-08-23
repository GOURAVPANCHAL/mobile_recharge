"use client"
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Container } from '@mui/material';

const page = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (

        <>
            <Container sx={{ marginTop: { xs: '1rem !important', md: '2rem' },marginBottom:'3rem !important'}} style={{marginTop:'4rem', marginBottom:'4rem'}}>
                <Box sx={{ marginBottom: { xs: '2rem !important', sm: '0rem' }}} style={{marginBottom:'4rem'}} >
                    <Typography>
                    <div style={{textAlign:'center'}}>
                        <Typography sx={{ fontSize: { xs: '24px !important', sm: '24px', md:'40px !important' }}} className='heading_main' variant="h4" marginBottom='1rem'>Frequently Asked Questions</Typography>
                        <Typography sx={{display: { xs: 'none', md: 'block' }}}  className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        <Typography className='text'>
                         industry's standard dummy text ever since the 1500s, </Typography>
                        </Typography>
                        <Typography className='text' sx={{ display: { md: 'none !important', sm: 'block' }}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </Typography>
                    </div>
                    </Typography>
                </Box>

                <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary style={{padding:'15px'}}
                        expandIcon={<ExpandMoreIcon  sx={{display: { xs: 'none', md: 'block' },color:'text.secondary'}} />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"> 
                        <Typography sx={{width: { xs: '100%', md: '45%' },flexShrink: 0 ,color:'black'}}>
                        Mi est diam hendrerit ut ipsum, sodales aliquam mauris neque.
                        </Typography>
                        
                        <Typography  sx={{display: { xs: 'none', md: 'block' },color:'text.secondary'}}>Updated last week</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                            Aliquam eget maximus est, id dignissim quam.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary  style={{padding:'15px'}}
                        expandIcon={<ExpandMoreIcon  sx={{display: { xs: 'none', md: 'block' },color:'text.secondary'}} />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography sx={{width: { xs: '100%', md: '45%' },flexShrink: 0 ,color:'black'}}>Cras vitae, scelerisque tortor augue.</Typography>
                        <Typography  sx={{display: { xs: 'none', md: 'block' },color:'text.secondary'}}>
                            Updated today
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                            laoreet.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary  style={{padding:'15px'}}
                        expandIcon={<ExpandMoreIcon  sx={{display: { xs: 'none', md: 'block' },color:'text.secondary'}} />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography sx={{width: { xs: '100%', md: '48%' },flexShrink: 0 ,color:'black'}}>
                        Venenatis malesuada turpis sit integer felis rhoncus dictum eget ut.
                        </Typography>
                        <Typography  sx={{display: { xs: 'none', md: 'block' },color:'text.secondary'}}>
                        Updated 2 days ago
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                            amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary  style={{padding:'15px'}}
                        expandIcon={<ExpandMoreIcon  sx={{display: { xs: 'none', md: 'block' },color:'text.secondary'}} />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography sx={{width: { xs: '100%', md: '45%' },flexShrink: 0 ,color:'black'}}>Pretium ultricies donec non mollis senectus lectus libero tellus.</Typography>
                        <Typography  sx={{display: { xs: 'none', md: 'block' },color:'text.secondary'}}>
                        Updated 3 days ago
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                            amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary  style={{padding:'15px'}}
                        expandIcon={<ExpandMoreIcon  sx={{display: { xs: 'none', md: 'block' },color:'text.secondary'}} />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography sx={{width: { xs: '100%', md: '45%' },flexShrink: 0 ,color:'black'}}>Elit massa amet aenean ultrices vitae placerat augue.</Typography>
                        <Typography  sx={{display: { xs: 'none', md: 'block' },color:'text.secondary'}}>
                        Updated 4 days ago
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                            amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </Container>
        </>
    )
}

export default page