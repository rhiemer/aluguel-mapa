
import React, {Component} from 'react';
import Mapa from './containers/mapa';
import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';


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
