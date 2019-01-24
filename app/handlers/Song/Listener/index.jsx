// Singleton to listen for song change.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAccessStore } from 'flux/access/action'
import { updateLoadStore } from 'flux/load/action'
import {
    updateSessionStore,
    resetInteractivated,
    resetWiki
} from 'flux/session/action'
import { resetVerseBars } from 'flux/verseBars/action'

import { getBookForSongIndex } from 'album/api/songs'

class SongListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        updateAccessStore: PropTypes.func.isRequired,
        updateLoadStore: PropTypes.func.isRequired,
        updateSessionStore: PropTypes.func.isRequired,
        resetInteractivated: PropTypes.func.isRequired,
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
            this.props.updateLoadStore({ isScoreLoaded: false })
            this.props.updateSessionStore({ shownNavBookIndex })
            this.props.resetInteractivated()
            this.props.resetWiki()
            this.props.resetVerseBars()
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    selectedStore: { selectedSongIndex }
}) => ({
    selectedSongIndex
})

export default connect(
    mapStateToProps,
    {
        updateAccessStore,
        updateLoadStore,
        updateSessionStore,
        resetInteractivated,
        resetWiki,
        resetVerseBars
    }
)(SongListener)
