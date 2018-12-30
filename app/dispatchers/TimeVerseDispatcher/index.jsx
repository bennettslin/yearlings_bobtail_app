// Child that knows rules to dispatch time and verse from player.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateChangeStore } from 'flux/change/action'
import { updateScrollLyricStore } from 'flux/scrollLyric/action'
import { updateSelectedStore } from 'flux/selected/action'
import { updateVerseBarsStore } from 'flux/verseBars/action'

import { getSceneIndexForVerseIndex } from 'album/api/scenes'

class TimeVerseDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAutoScroll: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        updateChangeStore: PropTypes.func.isRequired,
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

        const { selectedSongIndex } = this.props

        this.props.updateSelectedStore({
            selectedVerseIndex: nextVerseIndex,
            selectedSceneIndex: getSceneIndexForVerseIndex(
                selectedSongIndex,
                nextVerseIndex
            ),
            selectedTime: currentTime
        })

        // If autoScroll is on, scroll to selected verse.
        if (this.props.isAutoScroll) {
            this.props.updateScrollLyricStore({
                queuedScrollLyricLog: 'Player auto scroll.',
                queuedScrollLyricByVerse: true,
                queuedScrollLyricIndex: nextVerseIndex,
                queuedScrollLyricFromAutoScroll: true,
                queuedScrollLyricCallback: true
            })

        } else {
            /**
             * If manual scroll is on, selected verse may go from above window,
             * view, to in it, to below it. So, determine verse bars.
             */
            this.props.updateVerseBarsStore({ queuedDetermineVerseBars: true })

            // If there is no scrolling, finish scene preparation right away.
            this.props.updateChangeStore({ isScenePreparing: false })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    toggleStore: { isAutoScroll },
    selectedStore: { selectedSongIndex }
}) => ({
    isAutoScroll,
    selectedSongIndex
})

export default connect(
    mapStateToProps,
    {
        updateChangeStore,
        updateScrollLyricStore,
        updateSelectedStore,
        updateVerseBarsStore
    }
)(TimeVerseDispatcher)
