import 'bootstrap-css-only/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import './assets/styles/google/googleapis.css';
import './assets/styles/sass/app.css';
import 'react-select/dist/react-select.css';


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { useScroll } from 'react-router-scroll';
import ReduxToastr from 'react-redux-toastr';
import { createHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import { applyRouterMiddleware, Router, useRouterHistory } from 'react-router';
import createRoutes from './routes';
import { translationMessages } from './i18n';
import configureStore from './store';
import App from './App';
import LanguageProvider from './containers/LanguageProvider';
import { selectLocationState } from './containers/App/selectors';


const browserHistory = useRouterHistory(createHistory)({
  basename: '/mapa/',
});

const initialState = {};
const store = configureStore(initialState, browserHistory);

const syncHistory = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: selectLocationState(),
});

const rootRoute = {
    component: App,
    childRoutes: createRoutes(store),
};


const render = (translatedMessages) => {
  
    ReactDOM.render(
      
        <Provider store={store}>
          <div>
            <LanguageProvider messages={translatedMessages}>
              <Router
                history={syncHistory}
                routes={rootRoute}
                render={
                  // Scroll to top when going to a new page, imitating default browser
                  // behaviour
                  applyRouterMiddleware(
                    useScroll()
                  )
                }
              />
            </LanguageProvider>
            <ReduxToastr
              timeOut={5000}
              newestOnTop
              preventDuplicates
              position="top-right"
              transitionIn="fadeIn"
              transitionOut="fadeOut"
              progressBar
            />
          </div>
        </Provider>,
      document.getElementById('root')
    );
 
};



// Hot reloadable translation json files
if (module.hot) {
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept('./i18n', () => {
    render(translationMessages);
  });
}
// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  (new Promise((resolve) => {
    resolve(import('intl'));
  }))
    .then(() => Promise.all([
      import('intl/locale-data/jsonp/de.js'),
    ]))
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err;
    });
} else {
  render(translationMessages);
}

