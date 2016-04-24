import './less/dev/main.less';
import DataHelper from './components/helpers/data-helper.js'

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/dev/app.jsx';
import YearlingsBobtail from './album-data/00-yearlings-bobtail.js';

DataHelper.parseAlbumObject(YearlingsBobtail);

ReactDOM.render(<App {...YearlingsBobtail} />, document.getElementById('app'));