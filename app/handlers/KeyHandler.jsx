// Component that handles all user events from keyboard.

import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getSongsAndLoguesCount,
         getSongIsLogue,
         getBookColumnIndex,
         getWormholeLink,
         getAnnotationObject } from 'helpers/dataHelper'

import {
    getKeyName,
    getIsNavKey,
    getShouldHandleOnKeyDown
} from './keyHelper'

import { ARROW_LEFT,
         ARROW_RIGHT,
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
         DOTS_SECTION_EXPAND_KEY,
         LYRIC_COLUMN_TOGGLE_KEY,
         LYRIC_SECTION_EXPAND_KEY,
         LYRIC_SCROLL_TOGGLE_KEY,
         OVERVIEW_TOGGLE_KEY,
         SCORE_TOGGLE_KEY,
         SCENE_REWIND_KEY,
         SCENE_FORWARD_KEY,
         TIPS_TOGGLE_KEY,
         TITLE_TOGGLE_KEY } from 'constants/access'
import { ALL_DOT_KEYS } from 'constants/dots'
import { SHOWN,
         OVERVIEW_OPTIONS,
         TIPS_OPTIONS } from 'constants/options'

class KeyHandler extends Component {

    static propTypes = {

        eventHandlers: PropTypes.shape({
            // TODO: Specify which events are used. This isn't complete.
            handleAccessToggle: PropTypes.func.isRequired,
            handleLyricWheel: PropTypes.func.isRequired,
            handleLyricVerseSelect: PropTypes.func.isRequired,
            handleAnnotationAccess: PropTypes.func.isRequired
        }).isRequired,

        setRef: PropTypes.func.isRequired,
        displayKeyLetter: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)
    }

    shouldComponentUpdate() {
        return false
    }

    handleKeyDownPress = (e) => {
        const { eventHandlers } = this.props

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
            eventHandlers.handleAccessToggle(true)
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
            this._determineVerseBarsWithParameters()
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
            !this.props.selectedAccessIndex &&
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
            this._determineVerseBarsWithParameters(true)
        }
    }

    _determineVerseBarsWithParameters(isManualScroll) {
        /**
         * Make duration long enough for Chrome, Firefox, and Safari. 150 is
         * fine for lyric page up and down, but 300 seems to be needed for
         * navigating between annotations.
         */
        this.props.eventHandlers.handleLyricWheel(
            null,
            {
                ...isManualScroll && {
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

        const { isHeightlessLyricColumn,
                isLyricExpanded,
                interactivatedVerseIndex,
                selectedScoreIndex,
                selectedWikiIndex,
                selectedSongIndex,
                selectedAnnotationIndex,
                selectedDotsIndex,
                selectedCarouselNavIndex,

                eventHandlers } = this.props,

            isLogue = getSongIsLogue(selectedSongIndex),

            isVerseInteractivated = interactivatedVerseIndex > -1

        let annotationIndexWasAccessed = false,
            keyWasRegistered = false

        if (!isLogue && !selectedScoreIndex && !selectedWikiIndex) {

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
                ({ annotationIndexWasAccessed,
                    keyWasRegistered } = this._handleAnnotationNavigation(e, keyName))

            // We're in dots section.
            } else if (selectedDotsIndex) {
                keyWasRegistered = this._handleDotsNavigation(e, keyName)

            // We're in nav section.
            } else if (
                !selectedCarouselNavIndex &&
                !isLyricExpanded &&
                !isVerseInteractivated
            ) {

                ({ annotationIndexWasAccessed,
                    keyWasRegistered } = this._handleNavNavigation(e, keyName))

            // We're in lyrics section.
            } else if (!isHeightlessLyricColumn || isLyricExpanded) {
                keyWasRegistered = this._handleLyricNavigation(e, keyName)

                // If key was registered, then annotation index was accessed.
                annotationIndexWasAccessed = keyWasRegistered
            }
        }

        return { annotationIndexWasAccessed,
                 keyWasRegistered }
    }

    _handleAnnotationNavigation = (e, keyName) => {
        const { props } = this,
            { eventHandlers } = props

        let { accessedAnnotationAnchorIndex } = props,
            annotationIndexWasAccessed = false,
            keyWasRegistered = true

        switch (keyName) {
            case ARROW_LEFT:
                annotationIndexWasAccessed = true
                eventHandlers.handleAnnotationPrevious(e)
                break
            case ARROW_RIGHT:
                annotationIndexWasAccessed = true
                eventHandlers.handleAnnotationNext(e)
                break
            case ARROW_UP:
            case ARROW_DOWN: {
                // If not accessed on, do nothing and just turn access on.
                if (props.selectedAccessIndex) {
                    const direction = keyName === ARROW_UP ? -1 : 1
                    eventHandlers.handleAnnotationAnchorAccess(
                        direction
                    )
                }
                break
            }
            case ENTER: {
                const { selectedSongIndex,
                        selectedAnnotationIndex } = props,

                    annotationObject = getAnnotationObject(selectedSongIndex, selectedAnnotationIndex)

                // TODO: Move this logic to AnnotationManager.
                if (accessedAnnotationAnchorIndex > 0 &&
                    annotationObject &&
                    annotationObject.annotationAnchors &&
                    annotationObject.annotationAnchors.length) {

                    const annotationAnchorEntity = annotationObject.annotationAnchors[accessedAnnotationAnchorIndex - 1]

                    // It's a wiki anchor.
                    if (typeof annotationAnchorEntity === 'string') {
                        eventHandlers.handleAnnotationWikiSelect(e, accessedAnnotationAnchorIndex)

                    // It's a wormhole index.
                    } else {
                        const
                            wormholeLink = getWormholeLink(
                                annotationObject,
                                annotationAnchorEntity
                            )

                        keyWasRegistered =
                            eventHandlers.handleAnnotationWormholeSelect(
                                e,
                                wormholeLink
                            )

                        /**
                         * If song was selected, then annotation index was
                         * accessed.
                         */
                        annotationIndexWasAccessed = keyWasRegistered
                    }

                } else {
                    keyWasRegistered = false
                }
                break
            }
            default:
                keyWasRegistered = false
                break
        }

        // Accessing annotation might scroll lyric.
        if (keyName === ARROW_LEFT || keyName === ARROW_RIGHT) {
            this._determineVerseBarsWithParameters()
        }

        return { annotationIndexWasAccessed,
                 keyWasRegistered }
    }


    _handleDotsNavigation = (e, keyName) => {
        const { selectedAccessIndex,
                eventHandlers } = this.props

        if (selectedAccessIndex) {
            const dotKeysCount = ALL_DOT_KEYS.length
            let { accessedDotIndex } = this.props

            switch (keyName) {
                case ARROW_LEFT:
                    accessedDotIndex = (accessedDotIndex + (dotKeysCount - 1)) % dotKeysCount
                    break
                case ARROW_RIGHT:
                    accessedDotIndex = (accessedDotIndex + 1) % dotKeysCount
                    break
                case ARROW_UP:
                    if (accessedDotIndex >= dotKeysCount / 2) {
                        accessedDotIndex = (accessedDotIndex + (dotKeysCount / 2)) % dotKeysCount
                    } else if (accessedDotIndex !== 0) {
                        accessedDotIndex = (accessedDotIndex + (dotKeysCount / 2) - 1) % dotKeysCount
                    } else {
                        accessedDotIndex = (accessedDotIndex + (dotKeysCount - 1)) % dotKeysCount
                    }
                    break
                case ARROW_DOWN:
                    if (accessedDotIndex < dotKeysCount / 2) {
                        accessedDotIndex = (accessedDotIndex + (dotKeysCount / 2)) % dotKeysCount
                    } else if (accessedDotIndex !== dotKeysCount - 1) {
                        accessedDotIndex = (accessedDotIndex + (dotKeysCount / 2) + 1) % dotKeysCount
                    } else {
                        accessedDotIndex = (accessedDotIndex + 1) % dotKeysCount
                    }
                    break
                case ENTER:
                    return eventHandlers.handleDotSelect(e, accessedDotIndex)
                default:
                    return false
            }

            return eventHandlers.handleDotAccess(accessedDotIndex)
        }

        return false
    }

    _handleNavNavigation = (e, keyName) => {
        const { selectedAccessIndex,
                interactivatedVerseIndex,
                eventHandlers } = this.props

        let annotationIndexWasAccessed = false,
            keyWasRegistered = true

        /**
         * If access is off, just turn it on. Also ensure there is no
         * interactivated verse.
         */
        if (selectedAccessIndex && interactivatedVerseIndex < 0) {
            let { accessedNavSongIndex } = this.props,
                direction

            // Skip appropriate songs if showing single book column.
            switch (keyName) {
                case ARROW_LEFT:
                    direction = -1
                    break
                case ARROW_RIGHT:
                    direction = 1
                    break
                case ENTER:
                    keyWasRegistered = eventHandlers.handleNavSongSelect(e, accessedNavSongIndex)
                    /**
                     * If song was successfully selected, then annotation index
                     * was also accessed.
                     */
                    annotationIndexWasAccessed = keyWasRegistered
                    break
                default:
                    keyWasRegistered = false
            }

            if (direction) {
                const { shownBookColumnIndex } = this.props,
                    songsCount = getSongsAndLoguesCount()

                accessedNavSongIndex = (accessedNavSongIndex + songsCount + direction) % songsCount

                // Select the book column that contains the accessed song index.
                if (shownBookColumnIndex !== getBookColumnIndex(accessedNavSongIndex)) {
                    eventHandlers.handleNavBookSelect(e)
                }

                eventHandlers.handleSongAccess(accessedNavSongIndex)
            }
        }

        return { annotationIndexWasAccessed,
                 keyWasRegistered }
    }

    _handleLyricNavigation = (e, keyName) => {
        const { props } = this,
            {
                interactivatedVerseIndex,
                accessedAnnotationIndex,
                eventHandlers
            } = props,

            isVerseInteractivated = interactivatedVerseIndex > -1

        let direction

        switch (keyName) {
            case ARROW_LEFT:
                direction = -1
                break
            case ARROW_RIGHT:
                direction = 1
                break
            case ENTER:
                return eventHandlers.handleLyricAnnotationSelect(
                    e, accessedAnnotationIndex
                )
            default:
                return false
        }

        /**
         * If this key will turn on access, choose annotation based on selected
         * verse.
         */
        if (
            !props.selectedAccessIndex ||
            isVerseInteractivated
        ) {
            const
                verseIndex = isVerseInteractivated ?
                    interactivatedVerseIndex :
                    props.selectedVerseIndex

            eventHandlers.handleAnnotationAccess({
                verseIndex,
                direction,
                doScroll: true
            })

            if (isVerseInteractivated) {
                eventHandlers.handleVerseInteractivate()
            }

        } else {
            eventHandlers.handleAnnotationAccess({
                annotationIndex: accessedAnnotationIndex,
                direction,
                doScroll: true
            })
        }

        // Accessing annotation might scroll lyric.
        if (keyName === ARROW_LEFT || keyName === ARROW_RIGHT) {
            this._determineVerseBarsWithParameters()
        }

        return true
    }

    _handleLetterKey = (e, keyName) => {
        const { eventHandlers } = this.props

        let annotationIndexWasAccessed = false,
            keyWasRegistered

        switch (keyName) {
            case ADMIN_TOGGLE_KEY:
                keyWasRegistered = eventHandlers.handleAdminToggle(e)
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
            case LYRIC_COLUMN_TOGGLE_KEY:
                keyWasRegistered = eventHandlers.handleLyricColumnSelect(e)
                annotationIndexWasAccessed = keyWasRegistered
                break
            case LYRIC_SECTION_EXPAND_KEY:
                keyWasRegistered = eventHandlers.handleLyricSectionExpand(e)
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
                keyWasRegistered = eventHandlers.handleScoreToggle(e)
                break
            case TIPS_TOGGLE_KEY:
                keyWasRegistered = eventHandlers.handleTipsToggle(e)
                break
            case TITLE_TOGGLE_KEY:
                keyWasRegistered = eventHandlers.handleTitleToggle(e)
                break
            case DOTS_SECTION_EXPAND_KEY:
                keyWasRegistered = eventHandlers.handleDotsSectionToggle(e)
                break
            default:
                keyWasRegistered = false
                break
        }

        return {
            annotationIndexWasAccessed,
            keyWasRegistered
        }
    }

    _handleEscape = (e) => {
        const { props } = this,
            { eventHandlers } = props

        // Close score popup.
        if (props.selectedScoreIndex) {
            eventHandlers.handleScoreToggle(e)

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
        } else if (props.selectedDotsIndex) {
            eventHandlers.handleDotsSectionToggle(e)

        // Close annotation popup.
        } else if (props.selectedAnnotationIndex) {
            eventHandlers.handleLyricAnnotationSelect(e)

        // Turn access off.
        } else {
            eventHandlers.handleAccessToggle(false)
            eventHandlers.handleVerseInteractivate(e)
        }
    }

    render() {
        return null
    }
}

export default connect(({
    responsiveStore: { isHeightlessLyricColumn },
    isLyricExpanded,
    selectedStore: {
        selectedSongIndex,
        selectedVerseIndex,
        selectedAnnotationIndex
    },
    selectedAccessIndex,
    selectedCarouselNavIndex,
    selectedDotsIndex,
    selectedDotKeys,
    selectedOverviewIndex,
    selectedTipsIndex,
    selectedScoreIndex,
    selectedWikiIndex,
    accessedAnnotationIndex,
    accessedAnnotationAnchorIndex,
    accessedDotIndex,
    accessedNavSongIndex,
    interactivatedVerseIndex,
    shownBookColumnIndex,
    deviceIndex
}) => ({
    isHeightlessLyricColumn,
    isLyricExpanded,
    selectedAccessIndex,
    selectedAnnotationIndex,
    selectedCarouselNavIndex,
    selectedDotsIndex,
    selectedDotKeys,
    selectedOverviewIndex,
    selectedTipsIndex,
    selectedScoreIndex,
    selectedSongIndex,
    selectedVerseIndex,
    selectedWikiIndex,
    accessedAnnotationIndex,
    accessedAnnotationAnchorIndex,
    accessedDotIndex,
    accessedNavSongIndex,
    interactivatedVerseIndex,
    shownBookColumnIndex,
    deviceIndex
}))(KeyHandler)
