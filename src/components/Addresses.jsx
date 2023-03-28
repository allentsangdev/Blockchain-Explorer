import * as React from 'react';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import { Link } from 'react-router-dom';

export default function Addresses(props) {

  const apiUri = 'https://blockchain-explorer-api-z0rh.onrender.com/account/addresses'
  const [nodeAddresses, setNodeAddresses] = useState([])

  // component did mount hook to fetch data from api 
  useEffect(() => {
    axios.get(apiUri).then(response => {
      setNodeAddresses(response.data)
    })
  }, [])

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
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
                  <Link to="/transfer" style={{ color: props.currentTheme.palette.text.primary }}> {address} </Link>
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
    </>
  );
}
