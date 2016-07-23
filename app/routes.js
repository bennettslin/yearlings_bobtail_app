import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import './less/main.less';
import Album from './components/album.jsx';
import AlbumHelper from './helpers/album-helper.js';
import YearlingsBobtail from './album/00-yearlings-bobtail.js';

// Restructure raw data to be usable by app.
AlbumHelper.prepareAlbum(YearlingsBobtail);

class Index extends Component {
    render() {
        return (
            <div className="index">{this.props.children}</div>
        );
    }
}

class App extends React.Component {

    componentWillMount() {
        console.error('id', this.props.params);
    }

    render() {
        return (
            <Album {...YearlingsBobtail} />
        );
    }
}

export default (
    <Route path="/" component={Index}>
        <IndexRoute component={App} />
        <Route path="/yearlings_bobtail" component={App} />
    </Route>
);
