import React from 'react';
import { AppBar, Box, Container, Toolbar, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useMediaQuery } from '@mui/material';

const Root = styled('div')({
    flexGrow: 1,
});

const CustomAppBar = styled(AppBar)({
    backgroundColor: '#003366',
});

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'center', // Center items on small screens
    },
    [theme.breakpoints.up('md')]: {
        justifyContent: 'space-between', // Space items between on medium screens
    },
}));

const Logo = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16,
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
        marginBottom: 0, 
    },
    [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
        marginBottom: 0, 
        color: 'black'
    },
}));

const LogoImg = styled('img')(({ theme }) => ({
    marginRight: theme.spacing(1),
    width: '100px',
    height: '80px',

}));

const ContactInfo = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    '& > *': {
        marginLeft: theme.spacing(3),
        display: 'flex',
        alignItems: 'center',
    },
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'left',
        fontSize: theme.headerFont,
        '& > *': {
            marginLeft: 0,
            marginBottom: theme.spacing(1),
        },
    },
    [theme.breakpoints.down('md')]: {
        display: 'none',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
        '& > *': {
            marginBottom: 0,
        },
    },
}));

const ContactText = styled(Typography)(({ theme }) => ({
    marginLeft: theme.spacing(1),
    fontSize: theme.spacing(2),
    marginRight: theme.spacing(3),
    
}));

const Header = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            <Root>
                <CustomAppBar position="static">
                    <CustomToolbar>
                        <Logo style={{ order: isSmallScreen ? {md: 0 , lg: 1} : 0 }}>
                            <LogoImg src="./public/assets/logo-re.png" alt="Chartwell Logistics" />
                            <Typography variant="h6" >
                                AUTO HAUL EXPRESS LLC 
                            </Typography>
                        </Logo>
                        <ContactInfo style={{ order: isSmallScreen ? 1 : 0, justifyContent: isSmallScreen ? 'left' : 'flex-start' }}>
                            <Box sx={{marginBottom: {md: 2}}}>
                                <AccessTimeIcon />
                                <ContactText variant="body1">
                                    Mon - Sat 9:00 - 18:00<br />Sunday Closed
                                </ContactText>
                            </Box>
                            <Box sx={{marginBottom: {md: 2}}}>
                                <EmailIcon />
                                <ContactText variant="body1">
                                    info@chartwelllogistics.co.uk
                                </ContactText>
                            </Box>
                            <Box sx={{marginBottom: {md: 2}}}>
                                <PhoneIcon />
                                <ContactText variant="body1">
                                    +44 7986 594051
                                </ContactText>
                            </Box>
                        </ContactInfo>
                    </CustomToolbar>
                </CustomAppBar>
            </Root>
        </>
    );
}

export default Header;