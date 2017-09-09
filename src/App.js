import './assets/styles/react-toolbox/theme.css';

import React, {Component} from 'react';
import theme from './assets/styles/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Mapa from './containers/mapa';


class App extends Component {
  render() {
    return (
      <div id="root">
        <ThemeProvider theme={theme}>
          <div className="App">
            <Mapa/>          
          </div>
        </ThemeProvider>        
      </div>
    );
  }
}

export default App;
