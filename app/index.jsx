import './less/main.less';
import AppHelper from './components/helpers/app-helper.js'

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app.jsx';
import YearlingsBobtail from './album-data/00-yearlings-bobtail.js';

// Restructure raw data to be usable by app.
AppHelper.prepareAlbumObject(YearlingsBobtail);

ReactDOM.render(<App {...YearlingsBobtail} />, document.getElementById('app'));