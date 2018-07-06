import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setUpdatedTimePlayed } from '../redux/actions/audio'
import { setRenderableVerseIndex } from '../redux/actions/render'
import { setCurrentSceneIndex } from '../redux/actions/session'
import {
    selectTimePlayed,
    selectVerseIndex
} from '../redux/actions/storage'

import { VERSE_SCROLL } from '../constants/dom'

import {
    getSongVerseTimes,
    getVerseIndexForTime,
    getSceneIndexForVerseIndex
} from '../helpers/dataHelper'

class TimeVerseManager extends Component {

    static propTypes = {
        // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        windowWidth: PropTypes.number.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isManualScroll: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,

        setCurrentSceneIndex: PropTypes.func.isRequired,
        setRenderableVerseIndex: PropTypes.func.isRequired,
        setUpdatedTimePlayed: PropTypes.func.isRequired,
        selectTimePlayed: PropTypes.func.isRequired,
        selectVerseIndex: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired,
        scrollElementIntoView: PropTypes.func.isRequired,
        updatePath: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)
    }

    selectTime({
        selectedTimePlayed = 0,
        isPlayerAdvancing
    }) {
        const selectedVerseIndex = getVerseIndexForTime(
            this.props.selectedSongIndex, selectedTimePlayed
        )

        if (selectedVerseIndex !== null) {
            this._selectTimeAndVerse({
                selectedTimePlayed,
                selectedVerseIndex,

                // When time is being selected, always render verse immediately.
                renderVerseImmediately: true,
                isPlayerAdvancing
            })
        }
    }

    selectVerse({
        selectedVerseIndex = 0,
        selectedSongIndex = this.props.selectedSongIndex,

        scrollLog
    }) {
        const songVerseTimes = getSongVerseTimes(selectedSongIndex),
            selectedTimePlayed = songVerseTimes[selectedVerseIndex],

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
            scrollLog
        })
    }

    _selectTimeAndVerse({
        selectedTimePlayed,
        selectedSongIndex = this.props.selectedSongIndex,
        selectedVerseIndex,
        renderVerseImmediately,
        scrollLog,
        isPlayerAdvancing
    }) {

        const { props } = this

        /**
         * Since time and verse are in sync, this helper method can be called
         * by either one.
         */

        props.selectVerseIndex(selectedVerseIndex)
        props.selectTimePlayed(selectedTimePlayed)

        /**
         * If selecting or changing verse in same song, change index to be
         * rendered right away.
         */
        if (selectedSongIndex === props.selectedSongIndex) {
            props.setRenderableVerseIndex(selectedVerseIndex)
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
                index: selectedVerseIndex,
                deviceIndex: this.props.deviceIndex,
                windowWidth: this.props.windowWidth,
                isLyricExpanded: this.props.isLyricExpanded,

                ...scrollLog && {
                    doSetCanSceneRender: true
                }
            })
        }

        /**
         * If time was not changed by the audio element advancing, tell player
         * to update audio element's time.
         */
        if (!isPlayerAdvancing) {
            props.setUpdatedTimePlayed(selectedTimePlayed)
        }

        // Render verse and scene immediately.
        if (renderVerseImmediately) {

            props.setCurrentSceneIndex(getSceneIndexForVerseIndex(
                props.selectedSongIndex,
                selectedVerseIndex
            ))
        }

        /**
         * This is the only place where router path will change based on a new
         * verse index for the same song.
         */
        if (selectedSongIndex === this.props.selectedSongIndex) {
            props.updatePath({
                selectedSongIndex,
                selectedVerseIndex
            })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    deviceIndex,
    windowWidth,
    isLyricExpanded,
    isManualScroll,
    selectedSongIndex,
    selectedVerseIndex
}) => ({
    deviceIndex,
    windowWidth,
    isLyricExpanded,
    isManualScroll,
    selectedSongIndex,
    selectedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setCurrentSceneIndex,
        setRenderableVerseIndex,
        setUpdatedTimePlayed,
        selectTimePlayed,
        selectVerseIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(TimeVerseManager)
