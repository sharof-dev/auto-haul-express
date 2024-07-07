import React from "react";
import { Container, Grid, Paper, Typography, Button, Box } from "@mui/material";

const Blog = () => {
  return (
    <Container maxWidth="xxl" fixed>
      <Grid container spacing={2}>
        {/* Job Description Section */}
        <Grid item xs={12} md={8} spacing={4}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h4" gutterBottom>
              JOB DESCRIPTION:
            </Typography>
            <Typography variant="body1" paragraph>
              We have a fantastic opportunity with immediate starts available to
              join a family operated, locally expanding logistics company.
            </Typography>
            <Typography variant="body1" paragraph>
              If you are a dynamic, keen, customer focused individual looking
              for a new challenge this is the role for you! This is your chance
              to become part of a growing delivery provider where the
              opportunities are endless.
            </Typography>
            <Typography variant="body1" paragraph>
              We have full-time vacancies available locally now as a last mile
              delivery associate. Limited part-time positions also available.
            </Typography>
            <Typography variant="body1" paragraph>
              Chartwell Logistics is an Equal Opportunities provider, and we
              value diversity.
            </Typography>
            <Box bgcolor="#1976d2" color="white" p={2} mt={2}>
              <Typography variant="h6">
                “I love working for Chartwell Logistics! The company’s
                commitment to ethical practices and efficient operations is
                truly commendable. I have been a part of the team for some time
                now, and I couldn’t recommend them more.”
              </Typography>
            </Box>
            <Typography variant="h5" mt={4}>
              WHAT WE HAVE TO OFFER:
            </Typography>
            <Typography variant="body1" paragraph>
              Full and part time positions available, part time is ideally 3
              days a week.
            </Typography>
            <Typography variant="body1" paragraph>
              WE PROVIDE THE VAN, INSURANCE, FUEL, UNIFORM AND HAND-HELD DEVICE
            </Typography>
            <Typography variant="body1" paragraph>
              This is a self-employed position – Chartwell Logistics will help
              you set this up.
            </Typography>
            <Typography variant="body1" paragraph>
              You will be responsible for loading your van within the delivery
              station and delivering to both residential and commercial
              locations. Routes are pre planned and organised on a delivery app.
              Parcels are scanned and numbered in drop order.
            </Typography>
          </Paper>
        </Grid>

        {/* Sidebar Section */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6" gutterBottom>
              DAY RATE
            </Typography>
            <Typography variant="h4" color="primary">
              120 (Inc VAT) £
            </Typography>
            <Typography variant="h6" mt={2} gutterBottom>
              HOW WE PAY
            </Typography>
            <Typography variant="body1" paragraph>
              Generous team and individual bonuses, especially during peak
              trading, are on offer. All DA’s are paid weekly on a Friday and 2
              weeks in arrears. DA’s are all self-employed independent
              contractors. All of our DA’s work with Wise who will assist with
              invoicing and accounting on behalf of the driver.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "10px" }}
            >
              Apply Now
            </Button>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              style={{ marginTop: "10px" }}
            >
              Apply Via WhatsApp
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blog;
