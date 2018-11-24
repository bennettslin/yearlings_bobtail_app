import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateSessionStore } from 'flux/session/action'
import { updateToggleStore } from 'flux/toggle/action'

import AdminDispatcher from '../../../dispatchers/AdminDispatcher'
import AudioOptionDispatcher from '../../../dispatchers/AudioOptionDispatcher'
import DotsSlideDispatcher from '../../../dispatchers/DotsSlideDispatcher'
import LyricExpandDispatcher from '../../../dispatchers/LyricExpandDispatcher'
import ScoreDispatcher from '../../../dispatchers/ScoreDispatcher'
import TitleDispatcher from '../../../dispatchers/TitleDispatcher'

import {
    AUDIO_REWIND_KEY,
    AUDIO_FAST_FORWARD_KEY,

    ADMIN_TOGGLE_KEY,
    AUDIO_PLAY_KEY,
    AUDIO_OPTIONS_TOGGLE_KEY,
    AUDIO_PREVIOUS_SONG_KEY,
    AUDIO_NEXT_SONG_KEY,
    CAROUSEL_TOGGLE_KEY,
    DOTS_SLIDE_TOGGLE_KEY,
    LYRIC_COLUMN_TOGGLE_KEY,
    LYRIC_SECTION_EXPAND_KEY,
    LYRIC_SCROLL_TOGGLE_KEY,
    OVERVIEW_TOGGLE_KEY,
    SCORE_TOGGLE_KEY,
    SCENE_REWIND_KEY,
    SCENE_FORWARD_KEY,
    TIPS_TOGGLE_KEY,
    TITLE_TOGGLE_KEY
} from 'constants/access'
import {
    SHOWN,
    OVERVIEW_OPTIONS,
    TIPS_OPTIONS
} from 'constants/options'

class ToggleHandler extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAccessOn: PropTypes.bool.isRequired,
        updateSessionStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        getTryLetterKey: PropTypes.func.isRequired,
        getTryEscape: PropTypes.func.isRequired,
        eventHandlers: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getTryLetterKey(this.tryLetterKey)
        this.props.getTryEscape(this.tryEscape)
    }

    tryLetterKey = (e, keyName) => {
        const { eventHandlers } = this.props

        let annotationIndexWasAccessed = false,
            keyWasRegistered

        switch (keyName) {
            case ADMIN_TOGGLE_KEY:
                keyWasRegistered = this.dispatchAdmin()
                break
            case AUDIO_OPTIONS_TOGGLE_KEY:
                keyWasRegistered = this.dispatchAudioOption()
                break
            case AUDIO_PLAY_KEY:
                keyWasRegistered = eventHandlers.handleAudioPlay(e)
                break
            case AUDIO_PREVIOUS_SONG_KEY:
                keyWasRegistered = eventHandlers.handleAudioPreviousSong(e)
                annotationIndexWasAccessed = keyWasRegistered
                break
            case AUDIO_NEXT_SONG_KEY:
                keyWasRegistered = eventHandlers.handleAudioNextSong(e)
                annotationIndexWasAccessed = keyWasRegistered
                break
            case AUDIO_REWIND_KEY:
                keyWasRegistered = eventHandlers.handleVerseDirectionAccess(-1)
                break
            case AUDIO_FAST_FORWARD_KEY:
                keyWasRegistered = eventHandlers.handleVerseDirectionAccess(1)
                break
            case CAROUSEL_TOGGLE_KEY:
                keyWasRegistered = eventHandlers.handleCarouselNavToggle(e)
                break
            case DOTS_SLIDE_TOGGLE_KEY:
                keyWasRegistered = this.dispatchDotsSlide()
                break
            case LYRIC_COLUMN_TOGGLE_KEY:
                keyWasRegistered = eventHandlers.handleLyricColumnSelect(e)
                annotationIndexWasAccessed = keyWasRegistered
                break
            case LYRIC_SECTION_EXPAND_KEY:
                keyWasRegistered = this.dispatchLyricExpand()
                break
            case LYRIC_SCROLL_TOGGLE_KEY:
                keyWasRegistered = eventHandlers.handleLyricAutoScroll(e)
                break
            case OVERVIEW_TOGGLE_KEY:
                keyWasRegistered = eventHandlers.handleOverviewToggle(e)
                break
            case SCENE_REWIND_KEY:
                keyWasRegistered = eventHandlers.handleSceneDirection(e, -1)
                break
            case SCENE_FORWARD_KEY:
                keyWasRegistered = eventHandlers.handleSceneDirection(e, 1)
                break
            case SCORE_TOGGLE_KEY:
                keyWasRegistered = this.dispatchScore()
                break
            case TIPS_TOGGLE_KEY:
                keyWasRegistered = eventHandlers.handleTipsToggle(e)
                break
            case TITLE_TOGGLE_KEY:
                keyWasRegistered = this.dispatchTitle()
                break
            default:
                keyWasRegistered = false
                break
        }

        logger.info(keyName, 'letter key was registered:', keyWasRegistered)

        return {
            annotationIndexWasAccessed,
            keyWasRegistered
        }
    }

    tryEscape = (e) => {
        const { props } = this,
            { eventHandlers } = props

        // Close score popup.
        if (props.isScoreShown) {
            this.dispatchScore(false)

        // Close title popup.
        } else if (props.isTitleShown) {
            this.dispatchTitle(false)

        // Close wiki popup.
        } else if (props.selectedWikiIndex) {
            this.props.updateSessionStore({ selectedWikiIndex: 0 })

        // Close tips popup.
        } else if (TIPS_OPTIONS[props.selectedTipsIndex] === SHOWN) {
            // Just hide if shown.
            eventHandlers.handleTipsToggle(e, true)

        // Close overview popup.
        } else if (OVERVIEW_OPTIONS[props.selectedOverviewIndex] === SHOWN) {
            // Just hide if shown.
            eventHandlers.handleOverviewToggle(e, true)

        // Close dots popup.
        } else if (props.isDotsSlideShown) {
            this.dispatchDotsSlide(false)

        // Close annotation popup.
        } else if (props.selectedAnnotationIndex) {
            eventHandlers.handleLyricAnnotationSelect(e)

        // Collapse lyric
        } else if (props.isLyricExpanded) {
            this.dispatchLyricExpand(false)

        // Turn access off.
        } else {
            this.props.updateToggleStore({ isAccessOn: false })
            this.props.updateSessionStore({ interactivatedVerseIndex: -1 })
        }
    }

    render() {
        return (
            <___>
                <AdminDispatcher {...{ getDispatch: this }} />
                <AudioOptionDispatcher {...{ getDispatch: this }} />
                <DotsSlideDispatcher {...{ getDispatch: this }} />
                <LyricExpandDispatcher {...{ getDispatch: this }} />
                <ScoreDispatcher {...{ getDispatch: this }} />
                <TitleDispatcher {...{ getDispatch: this }} />
            </___>
        )
    }
}

const mapStateToProps = ({
    toggleStore: {
        isAccessOn,
        isDotsSlideShown,
        isLyricExpanded,
        isScoreShown,
        isTitleShown
    },
    songStore: {
        selectedAnnotationIndex
    },
    sessionStore: {
        selectedOverviewIndex,
        selectedTipsIndex,
        selectedWikiIndex
    }
}) => ({
    isAccessOn,
    isDotsSlideShown,
    isLyricExpanded,
    isScoreShown,
    isTitleShown,
    selectedAnnotationIndex,
    selectedOverviewIndex,
    selectedTipsIndex,
    selectedWikiIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSessionStore,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(ToggleHandler)
