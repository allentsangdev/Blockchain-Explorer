import './App.css';
import Transfer from './Transfer';
import Navbar from './Navbar';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className="App">
        <Navbar/>
        <Transfer/>
      </div>
    </ThemeProvider>
  );
}

export default App;