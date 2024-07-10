import React, { useState } from 'react';
import { Box, Tab, Tabs, TextField, Button, Typography, Link } from '@mui/material';

const InputCom = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                // backgroundColor: '#121D50',
                padding: 2,
                borderRadius: 2,
                width: 'fit-content',
                mt: -5,
            }}
        >
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="tracking tabs"
                TabIndicatorProps={{ style: { backgroundColor: '#ff5722', } }}
                textColor="inherit"
            >
                <Tab label="TRACKING" sx={{ color: value === 0 ? '#ff5722' : 'inherit',  backgroundColor: '#121D50', borderRadius: '1rem 0 0 0'}} />
                <Tab label="RATE & SHIP" sx={{ color: value === 1 ? '#fff' : 'inherit', backgroundColor: '#121D50', borderRadius: '0 1rem 0 0'}} />
            </Tabs>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    backgroundColor: '#0e162b',
                    padding: 2,
                    borderRadius: '0 1rem 1rem 1rem',
                }}
            >
                <TextField
                    label="TRACKING ID"
                    variant="outlined"
                    InputLabelProps={{
                        style: { color: '#6b7280' },
                    }}
                    sx={{
                        input: { color: 'white' },
                        label: { color: '#6b7280' },
                        fieldset: { borderColor: '#374151' },
                    }}
                />
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#ff5722',
                        '&:hover': {
                            backgroundColor: '#e64a19',
                        },
                    }}
                >
                    TRACK
                </Button>
            </Box>
            <Typography variant="body2" color="white" sx={{ marginTop: 1, ml: 1 }}>
                See the tracking id on shipping document.{' '}
                <Link href="#" sx={{ color: '#ff5722', textDecoration: 'none' }}>
                    Help
                </Link>
            </Typography>
        </Box>
    );
};

export default InputCom;
