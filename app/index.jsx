import './less/dev-style.less';

import React from 'react';
import ReactDOM from 'react-dom';

// var GlobalManager = require('./components/helpers/global-manager.js');
var ProgressManager = require('./components/helpers/progress-manager.js');
// var TextFormatter = require('./components/helpers/text-formatter.jsx');

import GlobalManager from './components/helpers/global-manager.js';
// import ProgressManager from './components/helpers/progress-manager.js';
import TextFormatter from './components/helpers/text-formatter.jsx';

import DevApp from './components/dev/dev-app.jsx';
import YearlingsBobtail from './album-data/00-yearlings-bobtail.js';

ReactDOM.render(<DevApp songs={YearlingsBobtail.songs} />, document.getElementById('app'));