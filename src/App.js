
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Container, CssBaseline, Grid } from '@mui/material';
import theme from './theme';
import AlertFrequency from './components/AlertsFrequency';
import AlertsBySource from './components/AlertsBySource';
import AlertsByPort from './components/AlertsByPort';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <h1>Network Alerts Dashboard</h1>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <AlertFrequency />
          </Grid>
          <Grid item xs={12} md={6}>
            <AlertsBySource />
          </Grid>
          <Grid item xs={12}>
            <AlertsByPort />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
