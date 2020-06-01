// Singleton to listen for song change.
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import WikiWormholeDispatcher from '../Dispatcher'
import {
    SELECTED_SONG_INDEX_SELECTOR,
    SELECTED_ANNOTATION_INDEX_SELECTOR
} from '../../../redux/selected/selectors'

const mapStateToProps = state => {
    const
        selectedSongIndex = SELECTED_SONG_INDEX_SELECTOR(state),
        selectedAnnotationIndex = SELECTED_ANNOTATION_INDEX_SELECTOR(state)

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
            this.dispatchAccessedWikiWormhole({ selectedAnnotationIndex })
        }
    }

    getDispatchAccessedWikiWormhole = dispatch => {
        this.dispatchAccessedWikiWormhole = dispatch
    }

    render() {
        return (
            <WikiWormholeDispatcher {...{ ref: this.getDispatchAccessedWikiWormhole }} />
        )
    }
}

export default connect(mapStateToProps)(WikiWormholeListener)
