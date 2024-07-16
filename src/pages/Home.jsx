import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import Form from '../components/Form'

const Home = () => {
  return (
    <Box
      component='main'
      sx={{
        position: 'relative',
        display: 'flex',
        background: 'url(https://broadwayautotransport.com/assets/front/img/first-section.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }
      }}
    >
      <Container maxWidth='xl'>
        <Box sx={{
          height: '700px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}>
          <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',  }}>
            <Box>
              <Typography variant='h2'>
                Car Shipping To Any Destination From State To State
              </Typography>
              <Button variant='contained' color='info' sx={{ p: '.9rem 4rem', mt: 4 }} size='large'>
                Get a Quote
              </Button>
            </Box>
            <Typography variant='p' sx={{ mt: 10, fontSize: '12px', color: 'rgb(148, 163, 184)' }}>
              BROADWAY AUTO TRANSPORT IS A TOP RATED CAR TRANSPORT MANAGEMENT COMPANY, LOCATED IN NEW YORK
            </Typography>
          </Box>
          <Box sx={{ width: '50%' }}>
            <Form />
          </Box>
        </Box>

        <Box>

        </Box>
      </Container>
    </Box>
  )
}

export default Home
