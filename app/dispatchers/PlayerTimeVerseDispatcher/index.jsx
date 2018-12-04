// Child that knows rules to dispatch time and verse from player.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateScrollLyricStore } from 'flux/scrollLyric/action'
import { updateSongStore } from 'flux/song/action'
import { updateVerseBarsStore } from 'flux/verseBars/action'


class PlayerTimeVerseDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAutoScroll: PropTypes.bool.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,
        updateSongStore: PropTypes.func.isRequired,
        updateVerseBarsStore: PropTypes.func.isRequired,

        // From parent.
        parentThis: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.parentThis.dispatchPlayerTimeVerse = this.dispatchPlayerTimeVerse
    }

    dispatchPlayerTimeVerse = ({
        currentTime,
        nextVerseIndex
    }) => {
        // This is only ever called by the player.

        this.props.updateSongStore({
            selectedVerseIndex: nextVerseIndex,
            selectedTime: currentTime
        })

        // If autoScroll is on, scroll to selected verse.
        if (this.props.isAutoScroll) {
            this.props.updateScrollLyricStore({
                queuedScrollLyricLog: 'Player auto scroll.',
                queuedScrollLyricByVerse: true,
                queuedScrollLyricIndex: nextVerseIndex,
                queuedScrollLyricFromAutoScroll: true
            })

        /**
         * If manual scroll is on, selected verse may go from above window,
         * view, to in it, to below it. So, determine verse bars.
         */
        } else {
            this.props.updateVerseBarsStore({ queuedDetermineVerseBars: true })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    toggleStore: { isAutoScroll }
}) => ({
    isAutoScroll
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateScrollLyricStore,
        updateSongStore,
        updateVerseBarsStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(PlayerTimeVerseDispatcher)
