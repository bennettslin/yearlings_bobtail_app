import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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
        updateRenderedStore: PropTypes.func.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,
        updateSongStore: PropTypes.func.isRequired,
        updateVerseBarsStore: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired,
        updateSelectedPlayer: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)
    }

    updateTime({
        currentTime,
        nextVerseIndex
    }) {
        // This is only ever called by the player.

        /**
         * If we're still in the same verse, or the song has ended, just update
         * the current time.
         */
        if (!nextVerseIndex) {
            this.props.updateSongStore({
                selectedTime: currentTime
            })

        // Otherwise, select the next verse.
        } else {
            /**
             * If manual scroll is on, selected verse may go from above
             * window view, to in it, to below it. So, determine verse bars.
             */
            if (!this.props.isAutoScroll) {
                this.props.updateVerseBarsStore({ doDetermineVerseBars: true })
            }

            this._selectTimeAndVerse({
                selectedTime: currentTime,
                selectedVerseIndex: nextVerseIndex,
                isPlayerAdvancing: true
            })
        }
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
        bypassUpdateSelected,
        isPlayerAdvancing
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

        /**
         * If called by player, and autoScroll is on, then scroll to selected
         * verse if needed. If a scrollLog string is passed, scroll and then
         * log the string.
         */
        if (
            scrollLog ||
            (
                this.props.isAutoScroll && isPlayerAdvancing
            )
        ) {
            this.props.updateScrollLyricStore({
                scrollLyricLog: scrollLog || 'Player autoscroll.',
                doScrollLyricByVerse: true,
                scrollLyricIndex: selectedVerseIndex
            })
        }

        if (selectedSongIndex === this.props.selectedSongIndex) {
            /**
             * This is the only place where selected player will be updated
             * based on a new verse index for the same song.
             */
            if (!isPlayerAdvancing) {
                this.props.updateSelectedPlayer({
                    selectedSongIndex,
                    selectedVerseIndex
                })
            }
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
        updateRenderedStore,
        updateScrollLyricStore,
        updateSongStore,
        updateVerseBarsStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(TimeVerseHandler)
