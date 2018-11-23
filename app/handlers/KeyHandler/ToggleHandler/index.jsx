import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateSessionStore } from 'flux/session/action'
import { updateToggleStore } from 'flux/toggle/action'

import DispatchAdmin from '../../../dispatchers/DispatchAdmin'
import DispatchAudioOption from '../../../dispatchers/DispatchAudioOption'
import DispatchDotsSlide from '../../../dispatchers/DispatchDotsSlide'
import DispatchLyric from '../../../dispatchers/DispatchLyric'
import DispatchScore from '../../../dispatchers/DispatchScore'
import DispatchTitle from '../../../dispatchers/DispatchTitle'

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
                keyWasRegistered = this.tryToggleAdmin()
                break
            case AUDIO_OPTIONS_TOGGLE_KEY:
                keyWasRegistered = this.tryToggleAudioOption()
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
                keyWasRegistered = this.tryToggleDotsSlide()
                break
            case LYRIC_COLUMN_TOGGLE_KEY:
                keyWasRegistered = eventHandlers.handleLyricColumnSelect(e)
                annotationIndexWasAccessed = keyWasRegistered
                break
            case LYRIC_SECTION_EXPAND_KEY:
                keyWasRegistered = this.tryToggleLyric()
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
                keyWasRegistered = this.tryToggleScore()
                break
            case TIPS_TOGGLE_KEY:
                keyWasRegistered = eventHandlers.handleTipsToggle(e)
                break
            case TITLE_TOGGLE_KEY:
                keyWasRegistered = this.tryToggleTitle()
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
            this.tryToggleScore(false)

        // Close title popup.
        } else if (props.isTitleShown) {
            this.tryToggleTitle(false)

        // Close wiki popup.
        } else if (props.selectedWikiIndex) {
            this.props.updateSessionStore({
                selectedWikiIndex: 0,
                carouselAnnotationIndex: 0
            })

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
            this.tryToggleDotsSlide(false)

        // Close annotation popup.
        } else if (props.selectedAnnotationIndex) {
            eventHandlers.handleLyricAnnotationSelect(e)

        // Collapse lyric
        } else if (props.isLyricExpanded) {
            this.tryToggleLyric(false)

        // Turn access off.
        } else {
            this.props.updateToggleStore({ isAccessOn: false })
            eventHandlers.handleVerseInteractivate(e)
        }
    }

    setTryToggleAdmin = (tryToggleAdmin) => {
        this.tryToggleAdmin = tryToggleAdmin
    }

    setTryToggleAudioOption = (tryToggleAudioOption) => {
        this.tryToggleAudioOption = tryToggleAudioOption
    }

    setTryToggleDotsSlide = (tryToggleDotsSlide) => {
        this.tryToggleDotsSlide = tryToggleDotsSlide
    }

    setTryToggleLyric = (tryToggleLyric) => {
        this.tryToggleLyric = tryToggleLyric
    }

    setTryToggleScore = (tryToggleScore) => {
        this.tryToggleScore = tryToggleScore
    }

    setTryToggleTitle = (tryToggleTitle) => {
        this.tryToggleTitle = tryToggleTitle
    }

    render() {
        return (
            <___>
                <DispatchAdmin
                    {...{ getTryToggleAdmin: this.setTryToggleAdmin }}
                />
                <DispatchAudioOption
                    {...{ getTryToggleAudioOption: this.setTryToggleAudioOption }}
                />
                <DispatchDotsSlide
                    {...{ getTryToggleDotsSlide: this.setTryToggleDotsSlide }}
                />
                <DispatchLyric
                    {...{ getTryToggleLyric: this.setTryToggleLyric }}
                />
                <DispatchScore
                    {...{ getTryToggleScore: this.setTryToggleScore }}
                />
                <DispatchTitle
                    {...{ getTryToggleTitle: this.setTryToggleTitle }}
                />
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
