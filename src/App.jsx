import React from 'react';
import Grid from "@mui/material/Grid";
import './App.css'

function App() {
  return (
      <>
        <Grid container spacing={2}
        <Grid item xs={2} className="stretched-box">
          <div>Stretched Box</div>
        </Grid>
        <Grid item xs={10}>
          <div>Remaining Content</div>
        </Grid>
      </>
  );
};

export default App;
