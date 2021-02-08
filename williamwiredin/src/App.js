import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AutoGrid from './components/AutoGrid';

class App extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="fullwidth">
        <Typography component="div" style={{ backgroundColor: 'teal', height: '160vh'}}>
          <AutoGrid />
        </Typography>
       
      </Container>
      </div>
    )
  }
}

export default App;
