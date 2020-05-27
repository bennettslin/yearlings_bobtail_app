// Child that knows rules to dispatch time and verse from player.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateEntranceStore } from '../../redux/entrance/action'
import { updateScrollLyricStore } from '../../redux/scrollLyric/action'
import { updateSelectedStore } from '../../redux/selected/action'
import { updateVerseBarsStore } from '../../redux/verseBars/action'

import { getSceneIndexForVerse } from '../../album/api/verses'

const mapStateToProps = state => {
    const {
        toggleStore: { isAutoScroll },
        selectedStore: { selectedSongIndex }
    } = state

    return {
        isAutoScroll,
        selectedSongIndex
    }
}

class TimeVerseDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAutoScroll: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        updateEntranceStore: PropTypes.func.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,
        updateSelectedStore: PropTypes.func.isRequired,
        updateVerseBarsStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchTimeVerse: this.dispatchTimeVerse
        })
    }

    dispatchTimeVerse = ({
        currentTime,
        nextVerseIndex
    }) => {
        // This is only ever called by the player.

        const { selectedSongIndex } = this.props,
            selectedSceneIndex = getSceneIndexForVerse(
                selectedSongIndex,
                nextVerseIndex
            )

        this.props.updateSelectedStore({
            selectedVerseIndex: nextVerseIndex,
            selectedSceneIndex,
            selectedTime: currentTime
        })

        logSelect({
            action: 'playerVerse',
            song: selectedSongIndex,
            verse: nextVerseIndex,
            scene: selectedSceneIndex
        })

        // If autoScroll is on, scroll to selected verse.
        if (this.props.isAutoScroll) {
            this.props.updateScrollLyricStore({
                queuedScrollLyricLog:
                    `Player autoScroll to verse ${nextVerseIndex}.`,
                queuedScrollLyricByVerse: true,
                queuedScrollLyricIndex: nextVerseIndex,
                queuedScrollLyricFromAutoScroll: true,
                queuedSceneChangeExitScrollCallback: true
            })

        } else {
            /**
             * If manual scroll is on, selected verse may go from above window,
             * view, to in it, to below it. So, determine verse bars.
             */
            this.props.updateVerseBarsStore({ queuedDetermineVerseBars: true })

            // There is no scrolling, so complete scene change exit right away.
            logTransition('Scene scroll did exit from time verse.')
            this.props.updateEntranceStore({ didSceneScrollExit: true })
        }
    }

    render() {
        return null
    }
}

export default connect(
    mapStateToProps,
    {
        updateEntranceStore,
        updateScrollLyricStore,
        updateSelectedStore,
        updateVerseBarsStore
    }
)(TimeVerseDispatcher)
