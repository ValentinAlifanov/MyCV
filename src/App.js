import * as React from 'react';
import Header from './components/header/header';
import Main from './components/main/main'
import AboutMe from './components/about-me/about-me'
import Contacts from './components/contacts/contacts'
import { StyledEngineProvider } from '@mui/material/styles';
import './App.css';




function App() {
  return (
    <StyledEngineProvider injectFirst>
      {/* Your component tree. Now you can override MUI's styles. */}
      <Header />
      <Main />
      <AboutMe />
      <Contacts />
    </StyledEngineProvider>
      );
}

export default App;
