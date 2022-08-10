import React from 'react';
// IMPORTING ALL REQUIRED MATERIAl-UI COMPONENT FROM @MATERIAL-UI/CORE
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
// IMPORTING IMAGE
import memories from './assets/images/memories.png';
import Form from './component/form/form';
import Posts from './component/posts/posts';
import ustStyles from './styles';

const App = () => {
  const classes = ustStyles();

  return (
    <Container maxWidth="lg">
      <AppBar className={ classes.appBar } position="static" color="inherit">
        {/* USING TYPOGRAPHY COMPONENT USUALLY FOR TEXTUAL CONTENT  */}
        <Typography className={ classes.heading } variant="h2" align="center">
          Memories
        </Typography>
        <img className={ classes.image } src={memories} alt="memories" height="60" />
      </AppBar>
      {/* GROW COMPONENT PROVIDE SIMPLE ANIMATION. */}
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
