import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router'

import './less/main.less'
import App from './components/app.jsx'
import AlbumData from './album/00-yearlings-bobtail.js'
import { prepareAlbumData } from './helpers/album-build-helper.js'

// Restructure raw data to be usable by app.
prepareAlbumData(AlbumData)

class Root extends Component {
    render() {
        return (
            <div className="index">
                {this.props.children}
            </div>
        )
    }
}

/**
 * FIXME: This component passes the album data as props to the app. This is just
 * a workaround until I figure out how to structure the components to play well
 * with React Router.
 */
class Wrapper extends React.Component {
    render() {
        return (
            <App {...AlbumData} />
        )
    }
}

export default (
    <Route path="/" component={Root}>
        <IndexRoute component={Wrapper} />
        <Route path="/yearlings_bobtail" component={Wrapper} />
    </Route>
)
