// PureComponent that handles all user events from keyboard.

import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateToggleStore } from 'flux/toggle/action'

import DispatchAdmin from '../../dispatchers/DispatchAdmin'
import DispatchDotsSlide from '../../dispatchers/DispatchDotsSlide'
import DispatchLyric from '../../dispatchers/DispatchLyric'
import DispatchScore from '../../dispatchers/DispatchScore'
import DispatchTitle from '../../dispatchers/DispatchTitle'

import AnnotationNavigation from './AnnotationNavigation'
import DotsSlideNavigation from './DotsSlideNavigation'
import LyricNavigation from './LyricNavigation'
import NavNavigation from './NavNavigation'

import {
    getKeyName,
    getIsNavKey,
    getShouldHandleOnKeyDown
} from './helper'

import {
    ARROW_UP,
    ARROW_DOWN,
    PAGE_UP,
    PAGE_DOWN,
    CAPS_LOCK,
    ENTER,
    ESCAPE,
    SPACE,
    TAB,
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

class KeyHandler extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAccessOn: PropTypes.bool.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,

        eventHandlers: PropTypes.shape({
            // TODO: Specify which events are used. This isn't complete.
            handleLyricWheel: PropTypes.func.isRequired,
            handleLyricVerseSelect: PropTypes.func.isRequired,
            handleAnnotationAccess: PropTypes.func.isRequired
        }).isRequired,

        setRef: PropTypes.func.isRequired,
        displayKeyLetter: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)
    }

    // shouldComponentUpdate() {
    //     return false
    // }

    handleKeyDownPress = (e) => {
        const keyName = getKeyName(e)

        // Do not allow the event to propagate if it's one of these.
        if (!keyName) {
            return false
        }

        // Show key as registered in the UI.
        this.props.displayKeyLetter(keyName)

        /**
         * Turn on access if any key other than escape was registered.
         */
        if (keyName !== ESCAPE) {
            this.props.updateToggleStore({ isAccessOn: true })
        }

        /**
         * Once access is turned on and key letter is displayed, ignore non-nav
         * keys and enter key, which are handled on key up.
         */
        if (!getShouldHandleOnKeyDown(keyName)) {
            return false
        }

        /**
         * While these keys do not register, they do scroll the lyric.
         */
        if (
            keyName === SPACE ||
            keyName === PAGE_UP ||
            keyName === PAGE_DOWN
        ) {
            this.determineVerseBarsWithParameters()
        }

        this._handleKeyRegister({
            e,
            keyName,
            isKeyDown: true
        })
    }

    handleKeyUpPress = (e) => {

        const keyName = getKeyName(e)

        // Do not allow the event to propagate if it's one of these.
        if (
            !keyName ||
            keyName === TAB ||
            keyName === CAPS_LOCK ||
            keyName === SPACE ||
            keyName === PAGE_UP ||
            keyName === PAGE_DOWN
        ) {
            return false
        }

        // Stop showing key as registered in the UI.
        this.props.displayKeyLetter()

        /**
         * Once key letter is removed from display, ignore all nav keys plus
         * rewind and fast forward, which were already handled on key down.
         */
        if (getShouldHandleOnKeyDown(keyName)) {
            return false
        }

        // Handle escape key.
        if (keyName === ESCAPE) {
            this._handleEscape(e)

        } else {

            this._handleKeyRegister({
                e,
                keyName,
                isKeyDown: false
            })
        }
    }

    _handleKeyRegister({
        e,
        keyName,
        isKeyDown
    }) {
        const shouldHandleOnKeyDown = getShouldHandleOnKeyDown(keyName),
            shouldHandle = isKeyDown === shouldHandleOnKeyDown

        if (!shouldHandle) {
            return false
        }

        const {
            annotationIndexWasAccessed,
            keyWasRegistered

        } = getIsNavKey(keyName) ?
            this._routeNavigation(e, keyName) :
            this._handleLetterKey(e, keyName)

        /**
         * If just now turning on access, also access annotation index,
         * unless we've already done so.
         */
        if (
            !this.props.selectedAnnotationIndex &&
            !this.props.isAccessOn &&
            !annotationIndexWasAccessed
        ) {

            this._accessAnnotationWithoutDirection(
                this.props.selectedVerseIndex
            )
        }

        // Prevent default for registered key.
        if (keyWasRegistered) {
            e.preventDefault()

        /**
         * At this point, up and down arrows are used to scroll lyric, so
         * turn off autoScroll and determine verse bars.
         */
        } else if (
            keyName === ARROW_DOWN ||
            keyName === ARROW_UP
        ) {
            this.determineVerseBarsWithParameters(false)
        }
    }

    determineVerseBarsWithParameters = (isAutoScroll = true) => {
        /**
         * Make duration long enough for Chrome, Firefox, and Safari. 150 is
         * fine for lyric page up and down, but 300 seems to be needed for
         * navigating between annotations.
         */
        this.props.eventHandlers.handleLyricWheel(
            null,
            {
                ...!isAutoScroll && {
                    timeoutDuration: 300,
                    setToManualScroll: true
                }
            }
        )
    }

    _accessAnnotationWithoutDirection(verseIndex) {
        /**
         * Helper method to be called when access is turned on, or when
         * interactivated verse is selected.
         */
        this.props.eventHandlers.handleAnnotationAccess({
            verseIndex
        })
    }

    _routeNavigation = (e, keyName) => {

        const {
                isHiddenLyric,
                isLyricExpanded,
                interactivatedVerseIndex,
                isScoreShown,
                selectedWikiIndex,
                isSelectedLogue,
                selectedAnnotationIndex,
                isDotsSlideShown,
                isCarouselShown,

                eventHandlers
            } = this.props,

            isVerseInteractivated = interactivatedVerseIndex > -1

        let annotationIndexWasAccessed = false,
            keyWasRegistered = false

        if (!isSelectedLogue && !isScoreShown && !selectedWikiIndex) {

            // We're selecting the interactivated verse.
            if (isVerseInteractivated && keyName === ENTER) {

                keyWasRegistered =
                    eventHandlers.handleLyricVerseSelect(
                        e, interactivatedVerseIndex
                    )

                this._accessAnnotationWithoutDirection(
                    interactivatedVerseIndex
                )
                annotationIndexWasAccessed = true

            // We're in annotation.
            } else if (selectedAnnotationIndex) {
                ({
                    annotationIndexWasAccessed,
                    keyWasRegistered
                } = this.tryNavigateAnnotation(e, keyName))

            // We're in dots section.
            } else if (isDotsSlideShown) {
                keyWasRegistered = this.tryNavigateDotsSlide(e, keyName)

            // We're in nav section.
            } else if (
                !isCarouselShown &&
                !isLyricExpanded &&
                !isVerseInteractivated
            ) {

                ({
                    annotationIndexWasAccessed,
                    keyWasRegistered
                } = this.tryNavigateNav(e, keyName))

            // We're in lyrics section.
            } else if (!isHiddenLyric || isLyricExpanded) {
                keyWasRegistered = this.tryNavigateLyric(e, keyName)

                // If key was registered, then annotation index was accessed.
                annotationIndexWasAccessed = keyWasRegistered
            }
        }

        return {
            annotationIndexWasAccessed,
            keyWasRegistered
        }
    }

    _handleLetterKey = (e, keyName) => {
        const { eventHandlers } = this.props

        let annotationIndexWasAccessed = false,
            keyWasRegistered

        switch (keyName) {
            case ADMIN_TOGGLE_KEY:
                keyWasRegistered = this.tryToggleAdmin()
                break
            case AUDIO_OPTIONS_TOGGLE_KEY:
                keyWasRegistered = eventHandlers.handleAudioOptionsToggle(e)
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

    _handleEscape = (e) => {
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
            eventHandlers.handleWikiToggle(e)

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

    setTryNavigateAnnotation = (tryNavigateAnnotation) => {
        this.tryNavigateAnnotation = tryNavigateAnnotation
    }

    setTryNavigateDotsSlide = (tryNavigateDotsSlide) => {
        this.tryNavigateDotsSlide = tryNavigateDotsSlide
    }

    setTryNavigateLyric = (tryNavigateLyric) => {
        this.tryNavigateLyric = tryNavigateLyric
    }

    setTryNavigateNav = (tryNavigateNav) => {
        this.tryNavigateNav = tryNavigateNav
    }

    setTryToggleAdmin = (tryToggleAdmin) => {
        this.tryToggleAdmin = tryToggleAdmin
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
        const {
            eventHandlers: {
                handleAnnotationPrevious,
                handleAnnotationNext,
                handleAnnotationAnchorAccess,
                handleAnnotationWikiSelect,
                handleAnnotationWormholeSelect,
                handleDotAccess,
                handleDotSelect,
                handleLyricAnnotationSelect,
                handleAnnotationAccess,
                handleVerseInteractivate,
                handleNavSongSelect,
                handleNavBookSelect,
                handleSongAccess
            }
        } = this.props

        return (
            <___>
                <AnnotationNavigation
                    {...{
                        getTryNavigateAnnotation: this.setTryNavigateAnnotation,
                        handleAnnotationPrevious,
                        handleAnnotationNext,
                        handleAnnotationAnchorAccess,
                        handleAnnotationWikiSelect,
                        handleAnnotationWormholeSelect,
                        determineVerseBarsWithParameters: this.determineVerseBarsWithParameters
                    }}
                />
                <DotsSlideNavigation
                    {...{
                        getTryNavigateDotsSlide: this.setTryNavigateDotsSlide,
                        handleDotAccess,
                        handleDotSelect
                    }}
                />
                <LyricNavigation
                    {...{
                        getTryNavigateLyric: this.setTryNavigateLyric,
                        handleLyricAnnotationSelect,
                        handleAnnotationAccess,
                        handleVerseInteractivate,
                        determineVerseBarsWithParameters: this.determineVerseBarsWithParameters
                    }}
                />
                <NavNavigation
                    {...{
                        getTryNavigateNav: this.setTryNavigateNav,
                        handleNavSongSelect,
                        handleNavBookSelect,
                        handleSongAccess
                    }}
                />
                <DispatchAdmin
                    {...{ getTryToggleAdmin: this.setTryToggleAdmin }}
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
        isCarouselShown,
        isDotsSlideShown,
        isLyricExpanded,
        isScoreShown,
        isTitleShown
    },
    responsiveStore: { isHiddenLyric },
    songStore: {
        selectedSongIndex,
        selectedVerseIndex,
        selectedAnnotationIndex,
        isSelectedLogue
    },
    dotsStore: {
        dotsBitNumber,
        ...selectedDotKeys
    },
    selectedOverviewIndex,
    selectedTipsIndex,
    selectedWikiIndex,
    interactivatedVerseIndex,
    deviceIndex
}) => ({
    isAccessOn,
    isCarouselShown,
    isDotsSlideShown,
    isLyricExpanded,
    isScoreShown,
    isTitleShown,
    isHiddenLyric,
    selectedAnnotationIndex,
    isSelectedLogue,
    dotsBitNumber,
    selectedDotKeys,
    selectedOverviewIndex,
    selectedTipsIndex,
    selectedSongIndex,
    selectedVerseIndex,
    selectedWikiIndex,
    interactivatedVerseIndex,
    deviceIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(KeyHandler)
