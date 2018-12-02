import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updatePlayerStore } from 'flux/player/action'
import { updateScrollLyricStore } from 'flux/scrollLyric/action'
import { updateSessionStore } from 'flux/session/action'
import { updateSongStore } from 'flux/song/action'
import { updateToggleStore } from 'flux/toggle/action'

import { getTimeForVerseIndex } from 'helpers/dataHelper'

class VerseDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        updatePlayerStore: PropTypes.func.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,
        updateSessionStore: PropTypes.func.isRequired,
        updateSongStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        getDispatch: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getDispatch.dispatchVerse = this.dispatchVerse
    }

    dispatchVerse = ({
        selectedVerseIndex = 0,
        scrollLog
    }) => {

        const { selectedSongIndex } = this.props

        this.props.updatePlayerStore({
            playerSongIndex: selectedSongIndex,
            playerVerseIndex: selectedVerseIndex
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
        this.props.updateToggleStore({
            isVerseBarAbove: false,
            isVerseBarBelow: false
        })

        this.props.updateScrollLyricStore({
            scrollLyricLog: scrollLog,
            doScrollLyricByVerse: true,
            scrollLyricIndex: selectedVerseIndex
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
        updatePlayerStore,
        updateScrollLyricStore,
        updateSessionStore,
        updateSongStore,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(VerseDispatcher)
