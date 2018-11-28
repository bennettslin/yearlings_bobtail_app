// Singleton to listen for song change.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import WikiWormholeDispatcher from '../Dispatcher'

class WikiWormholeListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired
    }

    componentDidMount() {
        this.dispatchAccessedWikiWormhole()
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
            this.dispatchAccessedWikiWormhole()
        }
    }

    render() {
        return (
            <WikiWormholeDispatcher {...{ getDispatch: this }} />
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
