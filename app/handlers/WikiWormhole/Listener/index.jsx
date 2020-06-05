// Singleton to listen for song change.
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import WikiWormholeDispatcher from '../Dispatcher'
import {
    mapSelectedSongIndex,
    mapSelectedAnnotationIndex
} from '../../../redux/selected/selectors'

const mapStateToProps = state => {
    const
        selectedSongIndex = mapSelectedSongIndex(state),
        selectedAnnotationIndex = mapSelectedAnnotationIndex(state)

    return {
        selectedSongIndex,
        selectedAnnotationIndex
    }
}

class WikiWormholeListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired
    }

    componentDidMount() {
        this._accessWikiWormhole()
    }

    componentDidUpdate(prevProps) {
        this._accessWikiWormhole(prevProps)
    }

    _accessWikiWormhole(prevProps = {}) {
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
            this.dispatchWikiWormhole({ selectedAnnotationIndex })
        }
    }

    getDispatchAccessedWikiWormhole = dispatch => {
        this.dispatchWikiWormhole = dispatch
    }

    render() {
        return (
            <WikiWormholeDispatcher {...{ ref: this.getDispatchAccessedWikiWormhole }} />
        )
    }
}

export default connect(mapStateToProps)(WikiWormholeListener)
