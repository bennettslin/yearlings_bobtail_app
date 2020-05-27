import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateActivatedStore } from '../../redux/activated/action'
import { updateAudioStore } from '../../redux/audio/action'
import { updateScrollLyricStore } from '../../redux/scrollLyric/action'
import { updateSelectedStore } from '../../redux/selected/action'
import { resetVerseBars } from '../../redux/verseBars/action'

import { getStartTimeForVerse } from '../../album/api/time'
import { getSceneIndexForVerse } from '../../album/api/verses'

const mapStateToProps = state => {
    const {
        selectedStore: { selectedSongIndex }
    } = state

    return {
        selectedSongIndex
    }
}

class VerseDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        updateAudioStore: PropTypes.func.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,
        updateActivatedStore: PropTypes.func.isRequired,
        updateSelectedStore: PropTypes.func.isRequired,
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

        const { selectedSongIndex } = this.props,
            selectedSceneIndex = getSceneIndexForVerse(
                selectedSongIndex,
                selectedVerseIndex
            ),
            selectedTime = getStartTimeForVerse(
                selectedSongIndex,
                selectedVerseIndex
            )

        this.props.updateAudioStore({
            queuedPlaySongIndex: selectedSongIndex,
            queuedPlayVerseIndex: selectedVerseIndex
        })

        this.props.updateSelectedStore({
            selectedVerseIndex,
            selectedSceneIndex,
            selectedTime
        })

        logSelect({
            action: 'verse',
            song: selectedSongIndex,
            verse: selectedVerseIndex,
            scene: selectedSceneIndex
        })

        // Ensure that no verse is activated.
        this.props.updateActivatedStore()

        // Selecting a verse necessarily resets the verse bars.
        this.props.resetVerseBars()

        this.props.updateScrollLyricStore({
            queuedScrollLyricLog: scrollLog,
            queuedScrollLyricByVerse: true,
            queuedScrollLyricIndex: selectedVerseIndex,
            queuedScrollLyricAlways: true,
            queuedSceneChangeExitScrollCallback: true
        })
    }

    render() {
        return null
    }
}

export default connect(
    mapStateToProps,
    {
        updateAudioStore,
        updateScrollLyricStore,
        updateSelectedStore,
        updateActivatedStore,
        resetVerseBars
    }
)(VerseDispatcher)
