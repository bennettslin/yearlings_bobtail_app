import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateActivatedStore } from '../../redux/activated/action'
import { updateAudioStore } from '../../redux/audio/action'
import { updateScrollLyricStore } from '../../redux/scrollLyric/action'
import { updateSelectedStore } from '../../redux/selected/action'
import { resetVerseBars } from '../../redux/verseBars/action'

import { getStartTimeForVerseIndex } from '../../album/api/time'
import { getSceneIndexForVerseIndex } from '../../album/api/verses'

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
            selectedSceneIndex = getSceneIndexForVerseIndex(
                selectedSongIndex,
                selectedVerseIndex
            ),
            selectedTime = getStartTimeForVerseIndex(
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

const mapStateToProps = ({
    selectedStore: { selectedSongIndex }
}) => ({
    selectedSongIndex
})

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
