import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updatePlayingStore } from 'flux/playing/action'
import { updateScrollLyricStore } from 'flux/scrollLyric/action'
import { updateSessionStore } from 'flux/session/action'
import { updateSongStore } from 'flux/song/action'
import { resetVerseBars } from 'flux/verseBars/action'

import { getTimeForVerseIndex } from 'helpers/data'

class VerseDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        updatePlayingStore: PropTypes.func.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,
        updateSessionStore: PropTypes.func.isRequired,
        updateSongStore: PropTypes.func.isRequired,
        resetVerseBars: PropTypes.func.isRequired,

        // From parent.
        parentThis: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.parentThis.dispatchVerse = this.dispatchVerse
    }

    dispatchVerse = ({
        selectedVerseIndex = 0,
        scrollLog
    }) => {

        const { selectedSongIndex } = this.props

        this.props.updatePlayingStore({
            queuedPlaySongIndex: selectedSongIndex,
            queuedPlayVerseIndex: selectedVerseIndex
        })

        this.props.updateSongStore({
            selectedVerseIndex,
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

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updatePlayingStore,
        updateScrollLyricStore,
        updateSessionStore,
        updateSongStore,
        resetVerseBars
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(VerseDispatcher)
