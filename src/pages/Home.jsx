import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import GetQuote from '../components/GetQuote'
import MainSection from '../components/home/MainSection'
import TextBox from '../components/home/TextBox'
import ShippingSteps from '../components/home/ShippingSets'

const Home = () => {
  return (
    <>
      <MainSection />
      <TextBox />
      <ShippingSteps />
    </>
  )
}

export default Home
