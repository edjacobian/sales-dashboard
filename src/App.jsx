import Grid from "@mui/material/Grid";
import './App.css'

function App() {
  return (
  <>
    <Grid container spacing={2}>
      <Grid xs={8}>
      <Item>xs=8</Item>
    </Grid>
    <Grid xs={4}>
      <Item>xs=4</Item>
    </Grid>
    <Grid xs={4}>
      <Item>xs=4</Item>
    </Grid>
    <Grid xs={8}>
      <Item>xs=8</Item>
    </Grid>
    </Grid>
  </>
  )
};

export default App
