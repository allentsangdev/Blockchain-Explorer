import Receipt from "./Receipt"
import { useState, useRef } from "react"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const sourceAccount = "0x6dC70bEa16f1ef94A7350989ca5413a2E180860f"
const destinationAccount = "0x03d0cf3f4A832C8E2c224BaA4a049110F39E630F"

// Defining the mock data
// With only one object for testing
const recieptData =
  {
      transactionHash: "0x1367409cddde9a7c8571d34f935adcb2a50214f2afbb151bb16eaf8847dda2ff",
      blockHash: "0xf32c44c730609dbbf6d5ba0ab7d9747460b8ab4f3d1c81d822cc10a6e48f2613",
      blockNumber: "10",
      from: "0x6dC70bEa16f1ef94A7350989ca5413a2E180860f",
      to: "0x03d0cf3f4A832C8E2c224BaA4a049110F39E630F",
      gasUsed: "21000"
  }

export default function Transfer() {
  
  // declare useRef hook to track the state change of the user input in the Amount text box
  const valueRef = useRef(0)
  // declare state variable to keep track to submited amount value
  const [amount, setAmount] = useState(0)
  // declare state variable to handle toggle the render of the receipt
  const [receiptDisplay, setReceiptDisplay] = useState(false)
  
  // Event Handlers
  const handleSubmit = (event) => {
    event.preventDefault();
    setAmount(valueRef.current.value)
    // console.log(valueRef.current.value)
    setReceiptDisplay(true)
  };

  // Testing function
  // To check if valueRef being updated
  const amountChange = (value) => {
    console.log(value.current.value)
  }

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Transfer
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="fromAddress"
                  label="From Address"
                  autoFocus
                  defaultValue={sourceAccount}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="ToAddress"
                  label="To Address"
                  defaultValue={destinationAccount}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="amount"
                  label="Amount"
                  inputRef={valueRef}
                  onChange={() => amountChange(valueRef)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

    {receiptDisplay && <Receipt mockData={recieptData}/>}
  </div>
  );
}
