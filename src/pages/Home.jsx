import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <Container maxWidth='xl'>
      <Box
        sx={{
          display: { xs: 'none', lg: 'block' }
        }}
      >
        <Typography>Desktop</Typography>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', md: 'block', lg: 'none' },
          opacity: 0.5
        }}>
        <Typography>Tablet</Typography>
      </Box>
      <Box
        sx={{
          display: { xs: 'block', md: 'none' }
        }}
      >
        <Typography>Phone</Typography>
      </Box>
    </Container>
  )
}

export default Home
