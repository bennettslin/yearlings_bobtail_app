// Singleton to listen for song change.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAccessStore } from 'flux/access/action'
import { updateLoadStore } from 'flux/load/action'
import { updateSessionStore } from 'flux/session/action'
import { resetVerseBars } from 'flux/verseBars/action'

import { getBookForSongIndex } from 'album/api/songs'

class SongListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        updateAccessStore: PropTypes.func.isRequired,
        updateLoadStore: PropTypes.func.isRequired,
        updateSessionStore: PropTypes.func.isRequired,
        resetVerseBars: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._handleSongChangeIfNeeded(prevProps)
    }

    _handleSongChangeIfNeeded(prevProps) {
        const
            { selectedSongIndex } = this.props,
            { selectedSongIndex: prevSongIndex } = prevProps

        if (selectedSongIndex !== prevSongIndex) {
            const shownNavBookIndex = getBookForSongIndex(selectedSongIndex)

            this.props.updateAccessStore({
                accessedNavSongIndex: selectedSongIndex
            })
            this.props.updateLoadStore({ isScoreLoaded: false })
            this.props.updateSessionStore({
                interactivatedVerseIndex: -1,
                selectedWikiIndex: 0,
                shownNavBookIndex
            })
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
        resetVerseBars
    }
)(SongListener)
