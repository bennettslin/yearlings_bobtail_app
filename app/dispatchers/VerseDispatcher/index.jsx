import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAudioStore } from 'flux/audio/action'
import { updateScrollLyricStore } from 'flux/scrollLyric/action'
import { updateSessionStore } from 'flux/session/action'
import { updateSongStore } from 'flux/song/action'
import { resetVerseBars } from 'flux/verseBars/action'

import { getTimeForVerseIndex } from 'album/api/time'
import { getSceneIndexForVerseIndex } from 'album/api/scenes'

class VerseDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        updateAudioStore: PropTypes.func.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,
        updateSessionStore: PropTypes.func.isRequired,
        updateSongStore: PropTypes.func.isRequired,
        resetVerseBars: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchVerse: this.dispatchVerse
        })
    }

    dispatchVerse = ({
        selectedVerseIndex = 0,
        scrollLog
    }) => {

        const { selectedSongIndex } = this.props

        this.props.updateAudioStore({
            queuedPlaySongIndex: selectedSongIndex,
            queuedPlayVerseIndex: selectedVerseIndex
        })

        this.props.updateSongStore({
            selectedVerseIndex,
            selectedSceneIndex: getSceneIndexForVerseIndex(
                selectedSongIndex,
                selectedVerseIndex
            ),
            selectedTime: getTimeForVerseIndex(
                selectedSongIndex,
                selectedVerseIndex
            )
        })

        // Ensure that no verse is interactivated.
        this.props.updateSessionStore({ interactivatedVerseIndex: -1 })

        // Verse bars always get reset.
        this.props.resetVerseBars()

        this.props.updateScrollLyricStore({
            queuedScrollLyricLog: scrollLog,
            queuedScrollLyricByVerse: true,
            queuedScrollLyricIndex: selectedVerseIndex,
            queuedScrollLyricAlways: true
        })
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

export default connect(
    mapStateToProps,
    {
        updateAudioStore,
        updateScrollLyricStore,
        updateSessionStore,
        updateSongStore,
        resetVerseBars
    }
)(VerseDispatcher)
