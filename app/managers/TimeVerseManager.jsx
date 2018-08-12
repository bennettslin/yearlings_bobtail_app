import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateRenderableStore } from 'flux/actions/renderable'
import {
    selectTimePlayed,
    updateSelectedStore
} from 'flux/actions/storage'

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
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,

        updateRenderableStore: PropTypes.func.isRequired,
        updateSelectedStore: PropTypes.func.isRequired,
        selectTimePlayed: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired,
        determineVerseBars: PropTypes.func.isRequired,
        scrollElementIntoView: PropTypes.func.isRequired,
        updateSelectedPlayer: PropTypes.func.isRequired,
        updatePath: PropTypes.func.isRequired
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

    resetTimeOfSelectedVerse() {
        // Called by audio manager when audio is paused.
        const { selectedVerseIndex } = this.props

        this.selectVerse({
            selectedVerseIndex
        })
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
            this.props.selectTimePlayed(currentTime)

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
                selectedTimePlayed: currentTime,
                selectedVerseIndex: nextVerseIndex,

                // When time is being selected, always render verse immediately.
                renderVerseImmediately: true,
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
            selectedTimePlayed =
                getTimeForVerseIndex(
                    selectedSongIndex,
                    selectedVerseIndex
                ),

            /**
             * If selecting or changing verse in same song, change index to be
             * rendered right away.
             */
            renderVerseImmediately =
                selectedSongIndex === this.props.selectedSongIndex

        this._selectTimeAndVerse({
            selectedTimePlayed,
            selectedSongIndex,
            selectedVerseIndex,
            renderVerseImmediately,
            scrollLog,
            bypassUpdateSelected
        })
    }

    _selectTimeAndVerse({
        selectedTimePlayed,
        selectedSongIndex = this.props.selectedSongIndex,
        selectedVerseIndex,
        renderVerseImmediately,
        scrollLog,
        bypassUpdateSelected,
        isPlayerAdvancing
    }) {

        const { props } = this

        /**
         * Since time and verse are in sync, this helper method can be called
         * by either one.
         */

        if (!bypassUpdateSelected) {
            props.updateSelectedStore({
                selectedVerseIndex
            })
        }

        props.selectTimePlayed(selectedTimePlayed)

        /**
         * If selecting or changing verse in same song, change index to be
         * rendered right away.
         */
        if (selectedSongIndex === props.selectedSongIndex) {
            this.props.updateRenderableStore({
                renderableVerseIndex: selectedVerseIndex,
                renderableSceneIndex: getSceneIndexForVerseIndex(
                    selectedSongIndex,
                    selectedVerseIndex
                )
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
                selectedVerseIndex !== props.selectedVerseIndex
            )
        ) {
            this.props.scrollElementIntoView({
                log: scrollLog || 'Player autoscroll.',
                scrollClass: VERSE_SCROLL,
                index: selectedVerseIndex
            })
        }

        // Render verse and scene immediately.
        if (renderVerseImmediately) {
            const { selectedSongIndex } = props

            this.props.updateRenderableStore({
                renderableSongIndex: selectedSongIndex,
                renderableVerseIndex: selectedVerseIndex,
                renderableSceneIndex: getSceneIndexForVerseIndex(
                    selectedSongIndex,
                    selectedVerseIndex
                )
            })
        }

        if (selectedSongIndex === this.props.selectedSongIndex) {
            /**
             * This is the only place where router path will change based on a
             * new verse index for the same song.
             */
            props.updatePath({
                selectedSongIndex,
                selectedVerseIndex
            })

            /**
             * This is the only place where selected player will be updated
             * based on a new verse index for the same song.
             */
            if (!isPlayerAdvancing) {
                props.updateSelectedPlayer({
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
    selectedStore: {
        selectedSongIndex,
        selectedVerseIndex
    }
}) => ({
    isManualScroll,
    selectedSongIndex,
    selectedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateRenderableStore,
        updateSelectedStore,
        selectTimePlayed
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(TimeVerseManager)
