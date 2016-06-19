import './less/main.less';
import DataHelper from './components/helpers/data-helper.js'

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/classes/app.jsx';
import YearlingsBobtail from './album-data/00-yearlings-bobtail.js';

// Restructure raw data to be usable by app.
DataHelper.prepareAlbumObject(YearlingsBobtail);

ReactDOM.render(<App {...YearlingsBobtail} />, document.getElementById('app'));