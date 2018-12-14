// Singleton to listen for song change.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import WikiWormholeDispatcher from '../Dispatcher'

import { populateDispatch } from 'helpers/dispatch'

class WikiWormholeListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired
    }

    componentDidMount() {
        this.dispatch.accessedWikiWormhole()
    }

    componentDidUpdate(prevProps) {
        this._accessWikiWormhole(prevProps)
    }

    _accessWikiWormhole(prevProps) {
        /**
         * If closing dots slide, check if accessed annotation index is now
         * invalid, and change if so.
         */
        const
            {
                selectedSongIndex,
                selectedAnnotationIndex
            } = this.props,
            {
                selectedSongIndex: prevSongIndex,
                selectedAnnotationIndex: prevAnnotationIndex
            } = prevProps

        if (
            selectedSongIndex !== prevSongIndex ||
            selectedAnnotationIndex !== prevAnnotationIndex
        ) {
            this.dispatch.accessedWikiWormhole()
        }
    }

    _setDispatch = (payload) => {
        populateDispatch(this, payload)
    }

    render() {
        return (
            <WikiWormholeDispatcher {...{ setDispatch: this._setDispatch }} />
        )
    }
}

const mapStateToProps = ({
    songStore: {
        selectedSongIndex,
        selectedAnnotationIndex
    }
}) => ({
    selectedSongIndex,
    selectedAnnotationIndex
})

export default connect(mapStateToProps)(WikiWormholeListener)
