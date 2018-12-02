import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updatePlayerStore } from 'flux/player/action'
import { updateRenderedStore } from 'flux/rendered/action'
import { updateScrollLyricStore } from 'flux/scrollLyric/action'
import { updateSongStore } from 'flux/song/action'
import { updateVerseBarsStore } from 'flux/verseBars/action'

import { getTimeForVerseIndex } from 'helpers/dataHelper'

class TimeVerseHandler extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAutoScroll: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        updatePlayerStore: PropTypes.func.isRequired,
        updateRenderedStore: PropTypes.func.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,
        updateSongStore: PropTypes.func.isRequired,
        updateVerseBarsStore: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)
    }

    selectVerse({
        selectedSongIndex = this.props.selectedSongIndex,
        selectedVerseIndex = 0,
        scrollLog,
        bypassUpdateSelected
    }) {
        const
            selectedTime =
                getTimeForVerseIndex(
                    selectedSongIndex,
                    selectedVerseIndex
                )

        this._selectTimeAndVerse({
            selectedTime,
            selectedSongIndex,
            selectedVerseIndex,
            scrollLog,
            bypassUpdateSelected
        })
    }

    _selectTimeAndVerse({
        selectedTime,
        selectedSongIndex = this.props.selectedSongIndex,
        selectedVerseIndex,
        scrollLog,
        bypassUpdateSelected
    }) {

        /**
         * Since time and verse are in sync, this helper method can be called
         * by either one.
         */

        if (!bypassUpdateSelected) {
            this.props.updateSongStore({
                selectedVerseIndex,
                selectedTime
            })
        }

        if (scrollLog) {
            this.props.updateScrollLyricStore({
                scrollLyricLog: scrollLog,
                doScrollLyricByVerse: true,
                scrollLyricIndex: selectedVerseIndex
            })
        }

        if (selectedSongIndex === this.props.selectedSongIndex) {
            /**
             * This is the only place where selected player will be updated
             * based on a new verse index for the same song.
             */
            this.props.updatePlayerStore({
                playerSongIndex: selectedSongIndex,
                playerVerseIndex: selectedVerseIndex
            })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    toggleStore: { isAutoScroll },
    songStore: { selectedSongIndex }
}) => ({
    isAutoScroll,
    selectedSongIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updatePlayerStore,
        updateRenderedStore,
        updateScrollLyricStore,
        updateSongStore,
        updateVerseBarsStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(TimeVerseHandler)
