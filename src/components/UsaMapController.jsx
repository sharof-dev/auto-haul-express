import { Container } from "@mui/material";
import { USAMapSelect } from "react-usa-map-select";

const UsaMapController = () => {
    const handleClick = (event) => {
        // Handle click event
        alert(`Clicked on state: ${event.currentTarget.getAttribute('name')}`);
    };

    const handleMouseEnter = (event) => {
    };

    const handleMouseLeave = () => {
        console.log('Mouse left a state');
    };

    return (
        <Container maxWidth='xl' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <USAMapSelect
                onClick={handleClick}
                onUSAStateMouseEnter={handleMouseEnter}
                onUSAStateMouseLeave={handleMouseLeave}
                showStateNameOnHover={true}
                USAStateOnHoverColor="blue"
                USAStateOnHoverStrokeColor="white"
                USAStatePosition={'center'}

            />
        </Container>
    );
};

export default UsaMapController;