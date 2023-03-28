import * as React from 'react';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import HistoryIcon from '@mui/icons-material/History';

// Defining the mock data
// With only one object for testing
/*
const transactionHistoryData =
  {
      transactionHash: "0x1367409cddde9a7c8571d34f935adcb2a50214f2afbb151bb16eaf8847dda2ff",
      status: "SUCCESS",
      timeStamp: "2022-03-29T044:08:03.172Z",
      from: "0x6dC70bEa16f1ef94A7350989ca5413a2E180860f",
      to: "0x03d0cf3f4A832C8E2c224BaA4a049110F39E630F",
      value: "250 ETH",
      gasUsed: "21000"
  }
  */

export default function Transaction() {
  
  const apiUri = 'https://blockchain-explorer-api-z0rh.onrender.com/account/history'
  const [transactionHistoryData, setTransactionHistoryData] = useState({})

  // component did mount hook to fetch data from api 
  useEffect(() => {
    axios.get(apiUri).then(response => {
      setTransactionHistoryData(response.data)
      console.log(transactionHistoryData)
    })
  }, [])

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
          <Avatar sx={{ m: 1, bgcolor: 'success.light' }}>
            <HistoryIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Transaction History
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
          {transactionHistoryData && <Grid container spacing={2}>
              <Grid item xs={12}>
                 <Typography component="p" variant="p"> Transaction Hash: {transactionHistoryData[0].transactionHash} </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="p" variant="p"> Status: {transactionHistoryData[0].status} </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="p" variant="p"> Timestamp: {transactionHistoryData[0].timeStamp} </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="p" variant="p"> Form: {transactionHistoryData[0].from} </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="p" variant="p"> To: {transactionHistoryData[0].to} </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="p" variant="p"> Value: {transactionHistoryData[0].value}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="p" variant="p"> Gas Used: {transactionHistoryData[0].gasUsed}</Typography>
              </Grid>
            </Grid>}
            
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
