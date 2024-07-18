import { Box, Button, Container, Typography, Grid } from '@mui/material'
import React from 'react'
import Form from '../components/Form'
const reasons = [
  { number: '120+', description: 'Shipped heavy equipments' },
  { number: '1300+', description: 'Vehicles Shipped' },
  { number: '10+', description: 'Years in Business' },
  { number: '37+', description: 'Regular Customers' },
];

const features = [
  {
    title: 'Experienced Team',
    img: 'https://broadwayautotransport.com/assets/front/img/reason-1.svg',
    description: 'Our professional car shipping coordinators are providing top services to our customers. All our agents have deep eagerness to help you with your car shipping needs.',
  },
  {
    title: 'Integrated Innovations',
    img: 'https://broadwayautotransport.com/assets/front/img/reason-2.svg',
    description: 'We have an experienced customer service team that is available to you 24 hours a day, 365 days a year to make sure our services are the best option for you!',
  },
  {
    title: 'Safe & Secure Transport',
    img: 'https://broadwayautotransport.com/assets/front/img/reason-3.svg',
    description: 'We prioritize the safety and security of your vehicle during transport. Our team of experienced shippers carefully loads and secures your vehicle to ensure it arrives in the same condition it was picked up in.',
  },
  {
    title: 'Competitive Pricing',
    img: 'https://broadwayautotransport.com/assets/front/img/reason-4.svg',
    description: 'We offer competitive pricing for our auto transport services. Our pricing is transparent, and we will work with you to find the best solution for your needs and budget.',
  },
];

const Home = () => {
  return (
    <Box component='main'>
      <Box sx={{
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
      }}>
        <Container maxWidth='xl'>
          <Box sx={{
            height: '600px',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}>
            <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', }}>
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
        </Container>
      </Box>
      <Container maxWidth='xl' >
        <Box py={"120px"}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Box sx={{ flex: 1 }}>
              {reasons.map((reason, index) => (
                <Box key={index} sx={{ mb: 4, p: 3, backgroundColor: '#f5f8fc', borderRadius: 1, textAlign: 'center' }}>
                  <Typography variant="h3" component="p" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {reason.number}
                  </Typography>
                  <Typography variant="body1" component="p">
                    {reason.description}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box sx={{ flex: 2.5, pl: '120px' }}>
              <Typography variant="h4" component="h2" fontSize={'52px'} gutterBottom>
                A Few Reasons <Typography component="span" sx={{ color: '#2969FF', fontSize: '52px' }}>Why You Choose Us</Typography> to Ship Your Car
              </Typography>
              <Typography variant="body1" gutterBottom mb={'60px'}>
                At Broadway Auto Transport, our vision is to be a driving force in our industry, setting new standards for excellence, innovation, and customer satisfaction. We aspire to become a trusted partner for our clients, delivering solutions that exceed expectations while maintaining a commitment to environmental and social responsibility.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {features.map((feature, index) => (
                  <Box key={index} sx={{ width: { xs: '100%', sm: '45%', md: '47%' }, mb: 4 }}>
                    <Box sx={{ mb: 1 }}>
                      <Box sx={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#f5f8fc', mr: 1, display: 'grid', placeItems: 'center'}}>
                        <img src={feature.img} />  
                      </Box> 
                      <Typography variant="h6" component="h3">
                        {feature.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" component="p" lineHeight={1.5}>
                      {feature.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Home
