import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

import registerServiceWorker from './registerServiceWorker';

const ReactGA = require('react-ga');

ReactGA.initialize('UA-85365382-4');

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
