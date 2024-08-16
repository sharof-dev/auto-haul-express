import React from 'react';
import { Typography, Card, CardContent, Container, CardMedia, Box } from '@mui/material';

import AOS from 'aos'
import 'aos/dist/aos.css'



import { styled } from '@mui/system';
const FlipCardContainer = styled(Box)(({ theme }) => ({
  perspective: '1000px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column', 
  margin: 'auto',
  padding: theme.breakpoints.down('sm') ? "2rem 1rem" : "10rem 2rem",
  gap: '5rem',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row', 
  },
}))

const FlipCardInner = styled('div')({
  width: '100%',
  height: '300px',
  transformStyle: 'preserve-3d',
  transition: 'transform 1s',
  position: 'relative',
  display: 'flex',
  border: 'none',
  boxShadow: '3px solid #e01933',
});

const FlipCard = styled(Card)({
  width: '100%',
  height: '100%',
  position: 'relative',
  borderRadius: 50,
  transformStyle: 'preserve-3d',
  transition: 'transform 0.5s',
  boxShadow: '4px 3px 3px #991933',
  border: 'none',
  '&:hover': {
    boxShadow: '-4px 3px 3px #991933',
  },
  '&:hover .flip-card-inner': {
    transform: 'rotateY(180deg)',
  },
  "&:hover .icon": {
    transformStyle: 'translateZ(90px) scale(.91)'
  },
});

const FlipCardFace = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
});

const FlipCardFront = styled(FlipCardFace)({
  backgroundColor: '#11172b',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',  
});

const FlipCardBack = styled(FlipCardFace)({
  backgroundColor: '#11172b',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  transform: 'rotateY(180deg)',
});

const step = [
  {
    icon: 'fas fa-dollar-sign',
    title: "We are ",
    mark: "Affordable",
    weare: true,
    backContent: 'We provide comprehensive & affordable car shipping  services to suit your unique needs.'
  },
  {
    icon: 'fas fa-jedi',
    title: "We are ",
    mark: "reliable",
    weare: true,
    backContent: 'We take pride in providing a one-of-a-kind reliable auto transport  experience that is both secure and hassle-free.'
  },
  {
    id: 1,
    image: 'https://img.icons8.com/ios/50/trophy--v1.png',
    title: "We are ",
    mark: "experienced",
    weare: true,
    backContent: 'Our experienced auto transport  team has years of experience in the shipping industry, delivering stress-free solutions for all your vehicle transport needs.'
  },
]

const  TransportCard = () => {

  return (
    <Container maxWidth="xl" sx={{ textAlign: 'center', marginTop: '4rem', padding: { xs: "10rem 1rem", sm: "5rem 2rem" }, }}>
      <FlipCardContainer data-aos='fade-up' data-aos-duration='2000'>
        {step.map((step, index) => (
          <FlipCard key={index}>
            <FlipCardInner className="flip-card-inner">
              <FlipCardFront>
                <Box className='icon' sx={{
                  width: '100px',
                  height: '100px',
                  display: 'grid',
                  placeItems: 'center',
                  borderStyle: 'solid',
                  borderWidth: ' 4px 4px 4px 4px',
                  borderColor: '#565656',
                  padding: '20px 20px 20px 20px',
                  borderRadius: '50%',
                  perspective: '1000px'
                }}>
                  {step.image ? (
                    <CardMedia
                      sx={{ width: '50px', objectFit: 'contain', filter: 'invert(1)' }}
                      component="img"
                      image={step.image}
                      alt={step.title}
                      
                    />) : (
                    <i className={step.icon} style={{ color: 'white', fontSize: '3rem' }} ></i>
                  )}
                </Box>
                <CardContent>
                  <Typography variant="h3" fontWeight={600}>
                    {step.title} <br /> <span style={{ color:'#e01933'}}>{step.mark}</span>
                  </Typography>
                </CardContent>
              </FlipCardFront>
              <FlipCardBack>
                <CardContent>
                  <Typography variant="h5">
                    {step.backContent}
                  </Typography>
                </CardContent>
              </FlipCardBack>
            </FlipCardInner>
          </FlipCard>
        ))}
      </FlipCardContainer>
    </Container >
  );
};

export default TransportCard;
