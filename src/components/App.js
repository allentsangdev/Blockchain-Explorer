import './App.css';
import Transfer from './Transfer';
import Navbar from './Navbar';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

// Dark Mode and Light Mode Material UI theme setting
const darkThemeMode = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightThemeMode = createTheme({
  palette: {
    mode: 'light',
  },
});

// Rendering App Component
function App() {  
  const [darkTheme, setTheme] = useState(true)
  const switchTheme = (_theme) => setTheme(_theme)

  return (
    <ThemeProvider theme={darkTheme ? darkThemeMode : lightThemeMode}>
      <CssBaseline/>
      <div className="App">
        <Navbar switchTheme={switchTheme}/>
        <Transfer/>
      </div>
    </ThemeProvider>
  );
}

export default App;