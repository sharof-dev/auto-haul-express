import { Box, Container, Grid, Typography, IconButton } from '@mui/material'
import React from 'react'
import WhatOur from '../CrosCountry/WhatOur'
import { Swiper, SwiperSlide } from 'swiper/react';
const bottomText = true;
const ClientsSay = () => {
    return (
        <>
            <WhatOur text={bottomText} />
        </>
    )
}

export default ClientsSay
