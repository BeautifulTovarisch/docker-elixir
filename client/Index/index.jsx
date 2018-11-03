'use strict';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div id="wrapper" className='h-100'>
              <Router>
                <React.Fragment>
                  <h1>Build Successful!!</h1>
                </React.Fragment>
              </Router>
            </div>
        );
    }
}

render(
    <App />,
    document.getElementById( 'react-mount-point' )
);

export default App;
