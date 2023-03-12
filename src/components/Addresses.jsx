import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import { Link } from 'react-router-dom';

// Defining the mock data
// With only one object for testing
const nodeAddresses = [ "0x6dC70bEa16f1ef94A7350989ca5413a2E180860f", "0x03d0cf3f4A832C8E2c224BaA4a049110F39E630F", "0x36Ea572e283b1E6d18942d3344c178c810A0d8dD", "0x49F0B7F9B45Ed3a139E345B14530a9D92B30B04e",
"0x69CE2776D92bcC75ab4148B54d8C86A6F136C8AC"
]

export default function Addresses() {
  
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <SensorOccupiedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Node Addresses
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
                {nodeAddresses.map((address) => (
                    <Grid item xs={12}>
                        <Link to="/transfer"> {address} </Link>
                    </Grid>
                ))}

            </Grid>
            
            <Grid container justifyContent="flex-end">
              <Grid item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

  </div>
  );
}
