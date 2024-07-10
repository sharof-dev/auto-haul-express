import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import AnchorIcon from '@mui/icons-material/Anchor';
import React from 'react'
import InputCom from '../component/InputCom'

const Home = () => {
  return (
    < >
      <Box
        component='main'
        sx={{
          backgroundImage: 'url(/assets/header_image.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'revert-layer',
          justifyContent: 'center',
          alignItems: 'center',
          py: 6,
          pl: 5,
        }}
      >
        <Grid container spacing={3} color={'white'}>
          <Grid item xs={12} sm={12} md={6} lg={12} sx={{ textAlign: { sm: 'center', md: 'left', lg: 'left' } }} color={'white'}>
            <Typography variant='body1' pl={1}>
              we are best logistic company
            </Typography>
            <Typography sx={{ fontSize: { sm: '2rem', md: '3rem', lg: '3.2rem' }, }}>
              Streamline Your Shipping with <br /> Our Cargo Services
            </Typography>
            <Typography variant='body1' mb={5}>
              Simplify your shipping process and make it more efficient with our <br /> cargo services. From start to finish, we'll handle everything to ensure <br /> your cargo arrives safely.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={12}>
            <Box display={'flex'}>
              <Box display={'flex'} gap={3} mr={70}>
                <Box>
                  <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="image" />
                </Box>
                <Typography variant='h3' display={'flex'} justifyContent={"center"} flexDirection={"column"}>
                  26 K
                  <Typography variant='body1'>
                    satisfied Clients
                  </Typography>
                </Typography>
                <Box
                  sx={{
                    width: '2px',
                    background: 'repeating-linear-gradient(white, white 5px, transparent 5px, transparent 10px)',
                  }}
                />
                <Typography variant='h3' display={'flex'} justifyContent={"center"} flexDirection={"column"}>
                  12+
                  <Typography variant='body1'>
                    Years of Experience
                  </Typography>
                </Typography>
              </Box>
              <Box></Box>
              <InputCom />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3} mt={'6.875rem'}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography variant='h6' gutterBottom ml={.5}>
              Our Services
            </Typography>
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} width={"80%"}>
                <Typography variant='h3' gutterBottom>
                  Empowering Your <br /> Business with Tailored <br /> Logistics Solutions
                </Typography>
                <Typography variant='body2' gutterBottom>
                  At FastGo, we believe in providing our clients with personalized and <br />
                  efficient logistics solutions that meet their unique needs. With years of<br /> experience and a team of
                  experts, we are dedicated to empowering your  <br />business with seamless shipping experiences.
                </Typography>
                <Box>
                  <Button variant='contained' color='warning' sx={{ p: '.5rem 7rem' }}>Learn More</Button>
                </Box>
              </Box>

            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>

            <Box
              component='div'
              sx={{
                backgroundColor: '#121D50',
                width: '506px',
                height: '410px',
                display: 'flex',
                alignItems: 'flex-end',
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)',
                cursor: 'pointer',
                padding: '0 0 60px 60px',
                borderRadius: 1
              }}>
              <Box
                sx={{
                  width: '190px',
                  height: '202px',
                  backgroundColor: '#fff',
                  borderRadius: 1
                }}
              >
                <Box
                  variant="contained"
                  color='white'
                  width={'60px'}
                  height={'60px'}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  position={'relative'}
                  top={'-2rem'}
                  left={'1rem'}
                  sx={{ backgroundColor: '#ffc107', borderRadius: '50%' }}>
                  <AnchorIcon />
                </Box>
                <Box sx={{ display: 'grid', placeItems: 'center' }}>
                  <Typography variant='h3' color={"#121D50"} sx={{ fontSize: '2rem', fontWeight: 900 }}>
                    1000+
                  </Typography>
                  <Typography variant='body2'
                    textAlign={"center"}
                    color={"white"}
                    sx={{
                      marginTop: 1,
                      bgcolor: '#0E33CB',
                      padding: '1rem 3rem',
                      borderRadius: 1
                    }}>
                    AWWARDS <br /> WINNING
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home
