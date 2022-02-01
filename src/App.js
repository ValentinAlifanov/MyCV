import * as React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header';
import Main from './components/main/main'
import Contacts from './components/contacts/contacts'
import { StyledEngineProvider } from '@mui/material/styles';
import './App.css';
import AboutMeRouter from './components/about-me-router/about-me-router';






function App() {
  return (
      <StyledEngineProvider injectFirst>
          {/* Your component tree. Now you can override MUI's styles. */}
          <Header />
          <Main />     
          <AboutMeRouter />
          <Contacts />
      </StyledEngineProvider>
      );
}

export default App;
