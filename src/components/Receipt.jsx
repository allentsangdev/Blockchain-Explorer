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



function Receipt(props) {
    return (
        <ThemeProvider theme={theme}>
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
                        <Typography component="h1" variant="h5">
                            Receipt
                        </Typography>
                        
                        <Box component="form" noValidate sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography component="p" variant="p"> Transaction Hash: {props.mockData.transactionHash} </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography component="p" variant="p"> Block Hash: {props.mockData.blockHash} </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography component="p" variant="p"> Block Number: {props.mockData.blockNumber} </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography component="p" variant="p"> From: {props.mockData.from} </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography component="p" variant="p"> To: {props.mockData.to} </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography component="p" variant="p"> Gas Used: {props.mockData.gasUsed}</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    
                    </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Receipt