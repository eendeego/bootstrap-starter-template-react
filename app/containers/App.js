import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

class App extends Component {
  render() {
    // Injected by React Router
    const { location, children } = this.props;

    return (
      <div>
        <Navbar></Navbar>
        <div className="container">
          {children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
};

App.contextTypes = {
  history: PropTypes.object.isRequired
};

export default App;
