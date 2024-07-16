import React, { useState } from 'react';
import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';
import { blue, pink } from '@mui/material/colors';

const FormContainer = styled(Box)(({ theme }) => ({
    backgroundColor: '#FFFFFF',
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    maxWidth: 500,
    margin: 'auto',
    marginTop: theme.spacing(4),
    color: 'black'
}));

const CustomButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
}));

const Form = () => {
    const [selectedValue, setSelectedValue] = useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });
    return (
        <FormContainer>
            <Typography variant="p" fontSize={18} mb={3} component="h6" >
                Get an <b>instant quote</b> or <b>call</b> now <Link href="tel:5133187369">(513) 318-7369</Link>
            </Typography>
            <form>
                <FormLabel >Transport car From *</FormLabel>
                <TextField
                    placeholder="ZIP or City"
                    fullWidth
                    required
                    margin="normal"
                />
                <FormLabel component="legend">Transport car To *</FormLabel>
                <TextField
                    placeholder="ZIP or City"
                    fullWidth
                    required
                    margin="normal"
                />
                <FormControl component="fieldset" margin="normal">
                    <FormLabel component="legend">Transport Type *</FormLabel>
                    <RadioGroup row aria-label="transport-type" name="transportType"

                    >
                        <FormControlLabel value="open" control={<Radio {...controlProps('a')}
                            sx={{
                                '&.Mui-checked': {
                                    color: blue[600],
                                },
                            }} />} label="Open" />
                        <FormControlLabel value="enclosed" control={<Radio {...controlProps('e')}
                            sx={{
                                '&.Mui-checked': {
                                    color: blue[600],
                                },
                            }} />} label="Enclosed" />
                    </RadioGroup>
                </FormControl>
                <Box display="flex" justifyContent="space-between">
                    <CustomButton variant="outlined">Back</CustomButton>
                    <CustomButton variant="contained" color="primary">Vehicle Details</CustomButton>
                </Box>
            </form>
        </FormContainer>
    );
};

export default Form;
