import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import './less/main.less';
import Album from './components/album.jsx';
import AlbumHelper from './helpers/album-helper.js';
import YearlingsBobtail from './album/00-yearlings-bobtail.js';

// Restructure raw data to be usable by app.
AlbumHelper.prepareAlbum(YearlingsBobtail);

class App extends Component {
    render() {
        return (
            <div className="index">
                {this.props.children}
            </div>
        );
    }
}

class Index extends React.Component {
    render() {
        return (
            <Album {...YearlingsBobtail} />
        );
    }
}

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="/yearlings_bobtail" component={Index} />
    </Route>
);
