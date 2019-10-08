import React from 'react';

import { CssBaseline, Grid } from '@material-ui/core';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          Pedalboard
        </Grid>
        <Grid item xs={3}>
          Nav
        </Grid>
        <Grid item xs={9}>
          Content
        </Grid>
      </Grid>
    </>
  );
};

export default App;
