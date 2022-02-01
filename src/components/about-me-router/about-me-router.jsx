import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alexander from '../../fonts/Alexander.otf';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AboutMeСareer from './about-me-career/about-me-career';
import AboutMeTeam from './about-me-team/about-me-team';
import AboutMeAnimals from './about-me-animals/about-me-animals';

const font = createTheme({
  typography: {
    fontFamily: 'Alexander, Arial',
    fontSize: 24,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Alexander';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Alexander'), local('Alexander-Regular'), url(${Alexander}) format('otf);
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box pt={3}sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const [windowSize, setWindowSize] = React.useState(window.outerWidth);


  return (
    <ThemeProvider theme={font}>
    <CssBaseline/>
    <Box id='about-me' sx={{ bgcolor: '#282c34', width:setWindowSize, fontFamily: 'Alexander' }}>
      <AppBar position="static" sx={{color: '#61DAFB', bgcolor: 'black' }} >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Карьера" {...a11yProps(0)} />
          <Tab label="Команда" {...a11yProps(1)} />
          <Tab label="12 лап" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <AboutMeСareer/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <AboutMeTeam />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <AboutMeAnimals />
        </TabPanel>
      </SwipeableViews>
    </Box>
    </ThemeProvider>
  );
}