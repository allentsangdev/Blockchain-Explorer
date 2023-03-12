import './App.css';
import Transfer from './Transfer';
import Transaction from './Transaction';
import Navbar from './Navbar';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


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
    <BrowserRouter>
      <ThemeProvider theme={darkTheme ? darkThemeMode : lightThemeMode}>
        <CssBaseline/>
        <div className="App">
          <Navbar switchTheme={switchTheme}/>          
        </div>
      
        <Routes>
          <Route path="/" element={<Transfer/>} />
          <Route path="/transaction" element={<Transaction/>} exact/>
        </Routes>
      
      
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;