import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Home() {
    
    /* const handleMove = (event) => {
        var x = event.clientX;
        var y = event.clientY;
        var icon = document.querySelector('.landing-icon');
        icon.style.left = x + 'px';
        icon.style.top = y + 'px';
    }
    */
    
    return (
        <>
            <div>
                <CssBaseline/>
                    <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                        <Typography variant="h4"> Blockchain Explorer </Typography>
                        <Typography variant="h5"> Welcome Back! </Typography>
                    </Box>
            </div>
        </>
    )
}

export default Home