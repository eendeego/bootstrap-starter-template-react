import 'babel-core/polyfill';
import React, { Component } from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import configureStore from '../store/configureStore';
import App from './App';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

const history = createBrowserHistory();
const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        {() =>
          <Router history={history}>
            <Route component={App}>
              <Route path="/" component={HomePage}/>
              <Route path="/about" component={AboutPage}/>
              <Route path="/contact" component={ContactPage}/>
            </Route>
          </Router>
        }
      </Provider>
    );
  }
}
