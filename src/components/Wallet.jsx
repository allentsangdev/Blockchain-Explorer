import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

// Defining the mock data
// With only one object for testing
const walletData =
  {
      address: "0x1367409cddde9a7c8571d34f935adcb2a50214f2afbb151bb16eaf8847dda2ff",
      balance: "100 ETH"
  }

export default function Wallet() {
  
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
          <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <AccountBalanceWalletIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              My Wallet
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography component="p" variant="p"> Address: {walletData.address} </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography component="p" variant="p"> Balance: {walletData.balance} </Typography>
                </Grid>
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
