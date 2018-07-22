import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setUpdatedTimePlayed } from '../redux/actions/audio'
import { setCanRenderScene } from '../redux/actions/render'
import { updateRenderableStore } from '../redux/actions/renderable'
import {
    selectTimePlayed,
    selectVerseIndex
} from '../redux/actions/storage'

import { VERSE_SCROLL } from '../constants/dom'

import {
    getTimeForVerseIndex,
    getVerseIndexForTime,
    getSceneIndexForVerseIndex
} from '../helpers/dataHelper'
import { getPropsAreShallowEqual } from '../helpers/generalHelper'

class TimeVerseManager extends Component {

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,
        isManualScroll: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,

        updateRenderableStore: PropTypes.func.isRequired,
        setCanRenderScene: PropTypes.func.isRequired,
        setUpdatedTimePlayed: PropTypes.func.isRequired,
        selectTimePlayed: PropTypes.func.isRequired,
        selectVerseIndex: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired,
        determineVerseBars: PropTypes.func.isRequired,
        scrollElementIntoView: PropTypes.func.isRequired,
        updatePath: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._setCanRenderScene =
            this._setCanRenderScene.bind(this)
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

    selectTime({
        selectedTimePlayed = 0,
        isPlayerAdvancing
    }) {
        const selectedVerseIndex = getVerseIndexForTime(
            this.props.selectedSongIndex, selectedTimePlayed
        )

        if (selectedVerseIndex !== null) {

            /**
             * If manual scroll is off, selected verse may go from above window
             * view, to in it, to below it. So determine verse bars.
             */
            if (
                this.props.isManualScroll &&
                selectedVerseIndex !== this.props.selectedVerseIndex
            ) {
                this.props.determineVerseBars()
            }

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
        selectedSongIndex = this.props.selectedSongIndex,
        selectedVerseIndex = 0,

        scrollLog
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
                index: selectedVerseIndex,
                callback: this._setCanRenderScene
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

    _setCanRenderScene() {
        if (!this.props.canSceneRender) {
            this.props.setCanRenderScene(true)
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    canSceneRender,
    isManualScroll,
    selectedSongIndex,
    selectedVerseIndex
}) => ({
    canSceneRender,
    isManualScroll,
    selectedSongIndex,
    selectedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setCanRenderScene,
        updateRenderableStore,
        setUpdatedTimePlayed,
        selectTimePlayed,
        selectVerseIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(TimeVerseManager)
