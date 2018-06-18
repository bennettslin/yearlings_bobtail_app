import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setUpdatedTimePlayed } from '../redux/actions/audio'
import {
    setRenderReadyVerseIndex,
    setCurrentSceneIndex
} from '../redux/actions/session'
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
import { scrollElementIntoView } from '../helpers/domHelper'

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
        setRenderReadyVerseIndex: PropTypes.func.isRequired,
        setUpdatedTimePlayed: PropTypes.func.isRequired,
        selectTimePlayed: PropTypes.func.isRequired,
        selectVerseIndex: PropTypes.func.isRequired,

        // From parent.
        getRef: PropTypes.func.isRequired,
        updatePath: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRef(this)
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
        selectedSongIndex = this.props.selectedSongIndex
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
            renderVerseImmediately
        })
    }

    _selectTimeAndVerse({
        selectedTimePlayed,
        selectedSongIndex = this.props.selectedSongIndex,
        selectedVerseIndex,
        renderVerseImmediately,
        isPlayerAdvancing
    }) {

        const { props } = this

        /** This is the only place where app will change the router path based
         * on a new song or verse index.
         */
        props.updatePath({
            props,
            selectedSongIndex,
            selectedVerseIndex
        })

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
            props.setRenderReadyVerseIndex(selectedVerseIndex)
        }

        /**
         * If called by player, and autoScroll is on, then scroll to selected
         * verse if needed.
         */
        if (
            !this.props.isManualScroll &&
            selectedVerseIndex !== props.selectedVerseIndex
        ) {
            scrollElementIntoView({
                scrollClass: VERSE_SCROLL,
                index: selectedVerseIndex,
                deviceIndex: this.props.deviceIndex,
                windowWidth: this.props.windowWidth,
                isLyricExpanded: this.props.isLyricExpanded
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
        setRenderReadyVerseIndex,
        setUpdatedTimePlayed,
        selectTimePlayed,
        selectVerseIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(TimeVerseManager)
