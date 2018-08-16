import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateRenderableStore } from 'flux/actions/renderable'
import { updateSelectedStore } from 'flux/actions/storage'

import { VERSE_SCROLL } from 'constants/dom'

import {
    getNextVerseIndexIfNeededForCurrentTime,
    getSceneIndexForVerseIndex,
    getTimeForVerseIndex
} from 'helpers/dataHelper'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'

class TimeVerseManager extends Component {

    static propTypes = {
        // Through Redux.
        isManualScroll: PropTypes.bool.isRequired,
        isPlaying: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,

        updateRenderableStore: PropTypes.func.isRequired,
        updateSelectedStore: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired,
        determineVerseBars: PropTypes.func.isRequired,
        scrollElementIntoView: PropTypes.func.isRequired,
        updateSelectedPlayer: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    componentDidUpdate(prevProps) {

        // If just now paused, reset time to start of selected verse.
        if (!this.props.isPlaying && prevProps.isPlaying) {
            const {
                    selectedSongIndex,
                    selectedVerseIndex
                } = this.props,

                selectedTime = getTimeForVerseIndex(
                    selectedSongIndex,
                    selectedVerseIndex
                )

            this.props.updateSelectedStore({
                selectedTime
            })
        }
    }

    selectTime(currentTime) {
        // This is only ever called by the player.

        const {
            selectedSongIndex,
            selectedVerseIndex
        } = this.props,

            nextVerseIndex = getNextVerseIndexIfNeededForCurrentTime(
                selectedSongIndex,
                selectedVerseIndex,
                currentTime
            )

        /**
         * If value returned by helper method is null, this means we're still
         * in the same verse, or the song has ended.
         */
        if (nextVerseIndex === null) {
            this.props.updateSelectedStore({
                selectedTime: currentTime
            })

            // Otherwise, select the next verse.
        } else {
            /**
             * If manual scroll is off, selected verse may go from above
             * window view, to in it, to below it. So, determine verse bars.
             */
            if (this.props.isManualScroll) {
                this.props.determineVerseBars()
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
            this.props.updateSelectedStore({
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
                !this.props.isManualScroll &&
                selectedVerseIndex !== this.props.selectedVerseIndex
            )
        ) {
            this.props.scrollElementIntoView({
                log: scrollLog || 'Player autoscroll.',
                scrollClass: VERSE_SCROLL,
                index: selectedVerseIndex
            })
        }

        if (selectedSongIndex === this.props.selectedSongIndex) {
            /**
             * If selecting or changing verse in same song, change index to be
             * rendered right away.
             */
            this.props.updateRenderableStore({
                renderableVerseIndex: selectedVerseIndex,
                renderableSceneIndex: getSceneIndexForVerseIndex(
                    selectedSongIndex,
                    selectedVerseIndex
                )
            })

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
    isManualScroll,
    isPlaying,
    selectedStore: {
        selectedSongIndex,
        selectedVerseIndex
    }
}) => ({
    isManualScroll,
    isPlaying,
    selectedSongIndex,
    selectedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateRenderableStore,
        updateSelectedStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(TimeVerseManager)
