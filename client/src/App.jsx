import React from 'react';
// IMPORTING ALL REQUIRED MATERIAl-UI COMPONENT FROM @MATERIAL-UI/CORE
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
// IMPORTING IMAGE
import memories from './assets/images/memories.png';

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        {/* USING TYPOGRAPHY COMPONENT USUALLY FOR TEXTUAL CONTENT  */}
        <Typography variant="h2" align="center">
          Memories
        </Typography>
        <img src={memories} alt="memories" height="60" />
      </AppBar>
    </Container>
  );
};

export default App;
