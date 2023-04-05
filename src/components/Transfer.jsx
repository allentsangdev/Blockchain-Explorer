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
import axios from 'axios'
import { useForm } from "react-hook-form";


const sourceAccount = "3b848f051702b26765853c28d6f8b5d4777c198e251073fbd62fb2937bf2eaae"
const destinationAccount = "0x6dC70bEa16f1ef94A7350989ca5413a2E180860f"

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
  
  React.useEffect(()=> {
    alert('💡 Please note that the backend api of this transaction component is pointing to a local blockchain on HTTP://127.0.0.1:7545, please replace the "From Address Private Key" and "To Address" with info obtained from your local blockchain 💡')
  },[])


  // declare useRef hook to track the state change of the user input in the Amount text box
  const valueRef = useRef(0)
  // declare state variable to keep track to submited amount value
  const [amount, setAmount] = useState(0)
  // declare state variable to handle toggle the render of the receipt
  const [receiptDisplay, setReceiptDisplay] = useState(false)
  
  /* Form Submit Event Handlers
  const handleSubmit = (event) => {
    event.preventDefault();
    setAmount(valueRef.current.value)
    // console.log(valueRef.current.value)
    setReceiptDisplay(true)
  }; */

  // Testing function. To check if valueRef being updated
  const amountChange = (value) => {
    console.log(value.current.value)
  }
  

  // Submit Event Handler
  // Send a POST request to the api to trigger a transaction
  // api endpoint expect following JSON structure from the request body
  /*{
			"source":"3b848f051702b26765853c28d6f8b5d4777c198e251073fbd62fb2937bf2eaae",
			"destination":"0x6dC70bEa16f1ef94A7350989ca5413a2E180860f",
			"value":"5000000000000000000"
		} */

  async function handleTransfer(data) {
    
    try{
      const requestBody = {
        source: data.source ,
        destination: data.destination,
        value: data.value
      }

      axios.post('http://localhost:4000/transaction/send', requestBody)
      .then(function(response) {
        alert('Transaction Completed ✅. Please check the transaction receipt below.')
        setReceiptDisplay(true)
        console.log(data)
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          alert(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
      });
        //.then( alert('Transaction Completed ✅. Please check the transaction receipt below.'))
        //.then(setReceiptDisplay(true))
        //.then(console.log(data))

    }catch(error){
      alert(`Client Side Error: ${error}`)
    }

  }

  // react hook form
  const { register, handleSubmit, formState: {errors} } = useForm();

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> <LockOutlinedIcon /> </Avatar>
          <Typography component="h1" variant="h5"> Transfer </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(handleTransfer)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="fromAddress"
                  label="From Address Private Key"
                  autoFocus
                  type="password"
                  defaultValue={sourceAccount}
                  {...register("source", {required:"Required"})}
                  error={!!errors.source ? errors.source.message : null}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="toAddress"
                  label="To Address"
                  defaultValue={destinationAccount}
                  {...register("destination", {required:"Required"})}
                  error={!!errors.destination ? errors.destination.message : null}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="amount"
                  label="Amount"
                  placeholder="Please input amount in Wei"
                  inputRef={valueRef}
                  onChange={() => amountChange(valueRef)}
                  {...register("value", {required:"Required"})}
                  error={!!errors.value ? errors.value.message : null}
                  helperText={errors.value ? errors.value.message : null}
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}> Submit </Button>
          </Box>
        </Box>
      </Container>

    {receiptDisplay && <Receipt mockData={recieptData}/>}
  </>
  );
}
