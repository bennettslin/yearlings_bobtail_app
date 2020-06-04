/**
 * TODO: This is rendered nine times. Consider whether to just listen for a
 * promised song change event instead. For now, there doesn't seem to be any
 * issues.
 */
import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAccessStore } from '../../../redux/access/action'
import { updateAudioStore } from '../../../redux/audio/action'
import { updateSelectedStore } from '../../../redux/selected/action'
import { updateToggleStore } from '../../../redux/toggle/action'
import { getStartTimeForVerse } from '../../../api/album/time'
import { getSceneIndexForVerse } from '../../../api/album/verses'
import { getSongsAndLoguesCount } from '../../../api/album/songs'
import { mapSelectedSongIndex } from '../../../redux/selected/selectors'

const mapStateToProps = state => {
    const selectedSongIndex = mapSelectedSongIndex(state)

    return {
        selectedSongIndex
    }
}

class SongDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        updateAccessStore: PropTypes.func.isRequired,
        updateAudioStore: PropTypes.func.isRequired,
        updateSelectedStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchSong: this.dispatchSong
        })
    }

    dispatchSong = ({
        isPlayFromLogue = false,
        selectedSongIndex: nextSongIndex = 0,
        selectedVerseIndex = 0,
        selectedAnnotationIndex = 0,
        earColumnIndex,
        destinationWormholeIndex,
        direction,
        doDismissNav
    }) => {
        const isWormholeSelected = Boolean(destinationWormholeIndex)

        // Called from audio section's previous or next buttons.
        if (direction) {
            nextSongIndex = this.props.selectedSongIndex + direction

            if (
                nextSongIndex < 0 ||
                nextSongIndex >= getSongsAndLoguesCount()
            ) {
                return false
            }
        }

        this.props.updateAudioStore({
            queuedPlayFromLogue: isPlayFromLogue,
            queuedPlaySongIndex: nextSongIndex,
            queuedPlayVerseIndex: selectedVerseIndex
        })

        const
            selectedSceneIndex = getSceneIndexForVerse(
                nextSongIndex,
                selectedVerseIndex
            ),
            selectedTime = getStartTimeForVerse(
                nextSongIndex,
                selectedVerseIndex
            )

        this.props.updateSelectedStore({
            selectedSongIndex: nextSongIndex,
            selectedVerseIndex,
            selectedAnnotationIndex,
            selectedSceneIndex,
            selectedTime,
            ...Number.isFinite(earColumnIndex) && { earColumnIndex }
        })

        logSelect({
            action: 'song',
            song: nextSongIndex,
            verse: selectedVerseIndex,
            annotation: selectedAnnotationIndex,
            scene: selectedSceneIndex
        })

        this.props.updateAccessStore({
            accessedNavIndex: nextSongIndex,
            accessedAnnotationIndex:
                isWormholeSelected ?
                    selectedAnnotationIndex : 1,
            ...isWormholeSelected && {
                accessedWikiWormholeIndex: destinationWormholeIndex
            }
        })

        if (doDismissNav) {
            this.props.updateToggleStore({ isNavShown: false })
        }

        return true
    }

    render() {
        return null
    }
}

export default connect(
    mapStateToProps,
    {
        updateAccessStore,
        updateAudioStore,
        updateSelectedStore,
        updateToggleStore
    }
)(SongDispatcher)
