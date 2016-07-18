import './less/main.less';
import Album from './components/helpers/album-helper.js'

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app.jsx';
import YearlingsBobtail from './album-data/00-yearlings-bobtail.js';

// Restructure raw data to be usable by app.
Album.prepareAlbumObject(YearlingsBobtail);

ReactDOM.render(<App {...YearlingsBobtail} />, document.getElementById('app'));