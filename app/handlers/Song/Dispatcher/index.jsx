/**
 * TODO: This is rendered nine times. Consider whether to just listen for a
 * promised song change event instead. For now, there doesn't seem to be any
 * issues.
 */

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { updateAccessStore } from 'flux/access/action'
import { updateAudioStore } from 'flux/audio/action'
import { updateSelectedStore } from 'flux/selected/action'

import { getStartTimeForVerseIndex } from 'album/api/time'
import { getSceneIndexForVerseIndex } from 'album/api/scenes'

import { getSongsAndLoguesCount } from 'album/api/songs'

class SongDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        updateAccessStore: PropTypes.func.isRequired,
        updateAudioStore: PropTypes.func.isRequired,
        updateSelectedStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchSong: this.dispatchSong
        })
    }

    // TODO: Move to individual dispatcher.
    dispatchSong = ({
        isPlayFromLogue,
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

        this.props.updateAudioStore({
            queuedPlayFromLogue: isPlayFromLogue,
            queuedPlaySongIndex: selectedSongIndex,
            queuedPlayVerseIndex: selectedVerseIndex
        })

        this.props.updateSelectedStore({
            selectedSongIndex,
            selectedVerseIndex,
            selectedAnnotationIndex,
            selectedSceneIndex: getSceneIndexForVerseIndex(
                selectedSongIndex,
                selectedVerseIndex
            ),
            selectedTime: getStartTimeForVerseIndex(
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
    selectedStore: { selectedSongIndex }
}) => ({
    selectedSongIndex
})

export default connect(
    mapStateToProps,
    {
        updateAccessStore,
        updateAudioStore,
        updateSelectedStore
    }
)(SongDispatcher)
