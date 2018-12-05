/**
 * TODO: This is rendered nine times. Consider whether to just listen for a
 * promised song change event instead. For now, there doesn't seem to be any
 * issues.
 */

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateAccessStore } from 'flux/access/action'
import { updatePlayerStore } from 'flux/player/action'
import { updateSongStore } from 'flux/song/action'

import {
    getSongsAndLoguesCount,
    getTimeForVerseIndex
} from '../../../helpers/data'

class SongDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        updateAccessStore: PropTypes.func.isRequired,
        updatePlayerStore: PropTypes.func.isRequired,
        updateSongStore: PropTypes.func.isRequired,

        // From parent.
        parentThis: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.parentThis.dispatchSong = this.dispatchSong
    }

    dispatchSong = ({
        isPlayingFromLogue,
        selectedSongIndex = 0,
        selectedVerseIndex = 0,
        selectedAnnotationIndex = 0,
        earColumnIndex,
        destinationWormholeIndex,
        direction
    }) => {
        const isWormholeSelected = Boolean(destinationWormholeIndex)

        // Called from audio section's previous or next buttons.
        if (direction) {
            selectedSongIndex = this.props.selectedSongIndex + direction

            if (
                selectedSongIndex < 0 ||
                selectedSongIndex >= getSongsAndLoguesCount()
            ) {
                return false
            }
        }

        this.props.updatePlayerStore({
            queuedPlayingFromLogue: isPlayingFromLogue,
            queuedPlayerSongIndex: selectedSongIndex,
            queuedPlayerVerseIndex: selectedVerseIndex
        })

        this.props.updateSongStore({
            selectedSongIndex,
            selectedVerseIndex,
            selectedAnnotationIndex,
            selectedTime: getTimeForVerseIndex(
                selectedSongIndex,
                selectedVerseIndex
            ),
            ...!isNaN(earColumnIndex) && { earColumnIndex }
        })

        this.props.updateAccessStore({
            accessedAnnotationIndex:
                isWormholeSelected ?
                    selectedAnnotationIndex :
                    1,
            ...isWormholeSelected && {
                accessedWikiWormholeIndex: destinationWormholeIndex
            }
        })

        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    songStore: { selectedSongIndex }
}) => ({
    selectedSongIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateAccessStore,
        updatePlayerStore,
        updateSongStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(SongDispatcher)
