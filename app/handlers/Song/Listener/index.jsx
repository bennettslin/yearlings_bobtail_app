// Singleton to listen for song change.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateActivatedStore } from '../../../redux/activated/action'
import {
    updateSessionStore,
    resetWiki
} from '../../../redux/session/action'
import { resetVerseBars } from '../../../redux/verseBars/action'
import { getBookForSongIndex } from '../../../album/api/songs'
import { SELECTED_SONG_INDEX_SELECTOR } from '../../../redux/selected/selectors'

const mapStateToProps = state => {
    const selectedSongIndex = SELECTED_SONG_INDEX_SELECTOR(state)

    return {
        selectedSongIndex
    }
}

class SongListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        updateSessionStore: PropTypes.func.isRequired,
        updateActivatedStore: PropTypes.func.isRequired,
        resetWiki: PropTypes.func.isRequired,
        resetVerseBars: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkSongSelect(prevProps)
    }

    _checkSongSelect(prevProps) {
        const
            { selectedSongIndex } = this.props,
            { selectedSongIndex: prevSongIndex } = prevProps

        if (selectedSongIndex !== prevSongIndex) {
            const shownNavBookIndex = getBookForSongIndex(selectedSongIndex)
            this.props.updateSessionStore({ shownNavBookIndex })
            this.props.updateActivatedStore()
            this.props.resetWiki()
            this.props.resetVerseBars()
        }
    }

    render() {
        return null
    }
}

export default connect(
    mapStateToProps,
    {
        updateSessionStore,
        updateActivatedStore,
        resetWiki,
        resetVerseBars
    }
)(SongListener)
