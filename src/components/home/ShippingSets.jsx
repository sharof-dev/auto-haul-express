import React from 'react';
import { Grid, Card, CardContent, Typography, Container, Box } from '@mui/material';

const steps = [
    {
        title: "Request a quote.",
        description: "",
        image: "https://uscargofreight.com/wp-content/uploads/2023/09/Get-a-Quote-and-Book-Your-Order-Img.png.webp",
    },
    {
        title: "We will arrange the pickup of your vehicle.",
        description: "",
        image: "https://uscargofreight.com/wp-content/uploads/2023/09/We-Pick-Up-Your-Vehicle-Img.png.webp",
    },
    {
        title: "Receive your vehicle at the designated location.",
        description: "",
        image: "https://uscargofreight.com/wp-content/uploads/2023/09/You-Receive-Your-Vehicle-Img.png.webp",
    },
];

const ShippingSteps = () => {
    return (
        <Box sx={{
            backgroundImage: "url(https://uscargofreight.com/wp-content/uploads/2023/03/About-US-Car-Go-Freight-Bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: { xs: "10rem 1rem", sm: "10rem 2rem" },
            color: "white",
            position: "relative",
        }}>
            <Box sx={{
                backgroundColor: "transparent",
                backgroundImage: "linear-gradient(180deg, #11172B 40%, #101010 100%)",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                position: "absolute",
                opacity: 0.8,
                zIndex: 1,
            }} />
            <Container maxWidth='xl' sx={{ position: 'relative', zIndex: 2 }}>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={12} md={12} style={{ textAlign: 'center' }}>
                        <Typography sx={{ fontSize: { xs: '1.8rem', sm: '4rem' } }} fontWeight={700}>
                            How To Ship in{" "}
                            <span style={{ color: "#e01933" }}>3 easy steps</span>.{" "}
                        </Typography>
                    </Grid>
                    {steps.map((step, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} >
                            <Card sx={{ backgroundColor: 'white',
                                textAlign: 'center',
                                width: '90%',
                                p: "20px 20px",
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                height: '100%',
                                borderRadius: '20px',
                                ml: 4
                               }}>
                                <CardContent>
                                    <img src={step.image} alt={step.title} style={{width: '100%', maxHeight: '200px', objectFit: 'contain'}} />
                                    <Typography variant="h6" gutterBottom>
                                        {step.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {step.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ShippingSteps;
