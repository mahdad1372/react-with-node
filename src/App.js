import React from 'react';
import logo from './logo.svg';
import Route from './pages/Route';
import ThemeContextProvider from './contexts/ThemeContext';
import New1 from './components/New1';
import New2 from './components/New2';
import './App.css';

function App() {
  return (
   
      // <ThemeContextProvider>
      //   <New1 />
      // <New2 />
      // </ThemeContextProvider>
      <Route />
    
  );
}

export default App;
