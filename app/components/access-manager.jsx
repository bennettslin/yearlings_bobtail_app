// Component that handles all user events from keyboard.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import DomManager from './dom-manager'
import { getSongsAndLoguesCount,
         getSongIsLogue,
         getBookColumnIndex,
         getPortalLink,
         getAnnotationObject } from '../helpers/data-helper'
import { getAnnotationIndexForDirection,
         getAnnotationIndexForVerseIndex,
         getAnnotationAnchorIndexForDirection } from '../helpers/logic-helper'
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

         ADMIN_TOGGLE_KEY,
         AUDIO_PLAY_KEY,
         AUDIO_OPTIONS_TOGGLE_KEY,
         AUDIO_PREVIOUS_SONG_KEY,
         AUDIO_NEXT_SONG_KEY,
         AUDIO_REWIND_KEY,
         AUDIO_FAST_FORWARD_KEY,
         CAROUSEL_TOGGLE_KEY,
         DOTS_SECTION_EXPAND_KEY,
         LYRIC_COLUMN_TOGGLE_KEY,
         LYRIC_SECTION_EXPAND_KEY,
         OVERVIEW_TOGGLE_KEY,
         SCORE_TOGGLE_KEY,
         SCENE_REWIND_KEY,
         SCENE_FORWARD_KEY,
         TIPS_TOGGLE_KEY,
         TITLE_TOGGLE_KEY } from '../constants/access'
import { ALL_DOT_KEYS } from '../constants/dots'
import { DESTINATION_PORTAL_INDEX } from '../constants/lyrics'
import { SHOWN,
         OVERVIEW_OPTIONS,
         TIPS_OPTIONS } from '../constants/options'

class AccessManager extends Component {

    constructor(props) {
        super(props)

        this.handleKeyDownPress = this.handleKeyDownPress.bind(this)
        this._routeNavigation = this._routeNavigation.bind(this)
        this._accessAnnotationWithoutDirection = this._accessAnnotationWithoutDirection.bind(this)
        this._handleAnnotationNavigation = this._handleAnnotationNavigation.bind(this)
        this._handleDotsNavigation = this._handleDotsNavigation.bind(this)
        this._handleNavNavigation = this._handleNavNavigation.bind(this)
        this._handleLyricNavigation = this._handleLyricNavigation.bind(this)
        this._handleLetterKey = this._handleLetterKey.bind(this)
        this._handleEscape = this._handleEscape.bind(this)
    }

    shouldComponentUpdate() {
        return false
    }

    handleKeyDownPress(e) {

        const { eventHandlers } = this.props

        let { key: keyName,
            keyCode } = e

        // Workaround for Safari, which doesn't recognise key on event.
        if (keyName === 'Unidentified') {
            keyName = String.fromCharCode(keyCode)
        }

        // Do not handle at all if any modifier keys are present.
        if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) {
            return
        }

        /**
         * Turn on access if any key was registered. (But escape might turn it
         * off again.)
         */
        eventHandlers.handleAccessToggle(true)

        // Do not handle any further if it's an exempt key.
        if (keyName === TAB || keyName === CAPS_LOCK || keyName === SPACE || keyName === PAGE_UP || keyName === PAGE_DOWN) {
            return
        }

        // Make all single characters lowercase.
        if (keyName.length === 1) {
            keyName = keyName.toLowerCase()
        }

        // Handle escape key.
        if (keyName === ESCAPE) {
            this._handleEscape(e)

        } else {
            const isNavKey = keyName.indexOf('Arrow') > -1 || keyName === ENTER,
                { annotationIndexWasAccessed,
                  keyWasRegistered } = isNavKey ?
                    this._routeNavigation(e, keyName) :
                    this._handleLetterKey(e, keyName)

            /**
             * If just now turning on access, also access annotation index,
             * unless we've already done so.
             */
            if (!this.props.selectedAnnotationIndex &&
                !this.props.selectedAccessIndex &&
                !annotationIndexWasAccessed) {
                this._accessAnnotationWithoutDirection(
                    this.props.selectedVerseIndex
                )
            }

            // Prevent default for registered key.
            if (keyWasRegistered) {
                e.preventDefault()
            }
        }
    }

    _routeNavigation(e, keyName) {
        const { isLyricExpanded,
                interactivatedVerseIndex,
                selectedScoreIndex,
                selectedVerseIndex,
                selectedWikiIndex,
                selectedSongIndex,

                eventHandlers } = this.props,

            isLogue = getSongIsLogue(selectedSongIndex)

        let annotationIndexWasAccessed = false,
            keyWasRegistered = false

        if (!isLogue && !selectedScoreIndex && !selectedWikiIndex) {
            if (interactivatedVerseIndex > -1 && keyName === ENTER) {

                // Interactivated verse is already selected, so toggle play.
                if (interactivatedVerseIndex === selectedVerseIndex) {
                    keyWasRegistered = eventHandlers.handleLyricPlay(e)

                    // We're selecting the interactivated verse.
                } else {
                    keyWasRegistered = eventHandlers.handleLyricVerseSelect(e, interactivatedVerseIndex)
                    this._accessAnnotationWithoutDirection(interactivatedVerseIndex)
                    annotationIndexWasAccessed = true
                }

                // We're in annotation.
            } else if (this.props.selectedAnnotationIndex) {
                ({ annotationIndexWasAccessed,
                    keyWasRegistered } = this._handleAnnotationNavigation(e, keyName))

                // We're in dots section.
            } else if (this.props.selectedDotsIndex) {
                keyWasRegistered = this._handleDotsNavigation(e, keyName)

                // We're in nav section.
            } else if (!this.props.selectedCarouselNavIndex &&
                       !isLyricExpanded) {

                ({ annotationIndexWasAccessed,
                    keyWasRegistered } = this._handleNavNavigation(e, keyName))

                // We're in lyrics section.
            } else {
                keyWasRegistered = this._handleLyricNavigation(e, keyName)

                // If key was registered, then annotation index was accessed.
                annotationIndexWasAccessed = keyWasRegistered
            }
        }

        return { annotationIndexWasAccessed,
                 keyWasRegistered }
    }

    _handleAnnotationNavigation(e, keyName) {
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
                    accessedAnnotationAnchorIndex = getAnnotationAnchorIndexForDirection({
                        selectedSongIndex: props.selectedSongIndex,
                        selectedAnnotationIndex: props.selectedAnnotationIndex,
                        selectedDotKeys: props.selectedDotKeys,
                        initialAnnotationAnchorIndex: accessedAnnotationAnchorIndex,
                        direction
                    })
                    eventHandlers.handleAnnotationAnchorAccess(accessedAnnotationAnchorIndex)
                }
                break
            }
            case ENTER: {
                const { selectedSongIndex,
                        selectedAnnotationIndex } = props,

                    annotationObject = getAnnotationObject(selectedSongIndex, selectedAnnotationIndex)

                if (accessedAnnotationAnchorIndex > 0 &&
                    annotationObject &&
                    annotationObject.annotationAnchors &&
                    annotationObject.annotationAnchors.length) {

                    const annotationAnchorEntity = annotationObject.annotationAnchors[accessedAnnotationAnchorIndex - 1]

                    // It's a wiki anchor.
                    if (typeof annotationAnchorEntity === 'string') {
                        eventHandlers.handleAnnotationWikiSelect(e, accessedAnnotationAnchorIndex)

                    // It's a portal index.
                    } else {
                        const portalLink = getPortalLink(annotationObject, annotationAnchorEntity),

                            { songIndex,
                              annotationIndex,
                              verseIndex,
                              columnIndex,
                              [DESTINATION_PORTAL_INDEX]: destinationPortalIndex } = portalLink,

                        keyWasRegistered = eventHandlers.handleAnnotationPortalSelect(
                            e,
                            songIndex,
                            annotationIndex,
                            verseIndex,
                            columnIndex,
                            destinationPortalIndex
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

        return { annotationIndexWasAccessed,
                 keyWasRegistered }
    }


    _handleDotsNavigation(e, keyName) {
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
                    return eventHandlers.handleDotToggle(e, accessedDotIndex)
                default:
                    return false
            }

            return eventHandlers.handleDotAccess(accessedDotIndex)
        }

        return false
    }

    _handleNavNavigation(e, keyName) {
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
                     * If song was successfully selected, then annotation index was
                     * also accessed.
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

    _handleLyricNavigation(e, keyName) {
        const { props } = this,
            { interactivatedVerseIndex,
              eventHandlers } = props,
            isVerseInteractivated = interactivatedVerseIndex > -1

        let { accessedAnnotationIndex } = props,
            direction

        switch (keyName) {
            case ARROW_LEFT:
                direction = -1
                break
            case ARROW_RIGHT:
                direction = 1
                break
            case ENTER:
                return eventHandlers.handleLyricAnnotationSelect(e, accessedAnnotationIndex)
            default:
                return false
        }

        /**
         * If this key will turn on access, choose annotation based on selected
         * verse.
         */
        if (!props.selectedAccessIndex || isVerseInteractivated) {
            const verseIndex = isVerseInteractivated ?
                interactivatedVerseIndex : props.selectedVerseIndex

            accessedAnnotationIndex = getAnnotationIndexForVerseIndex({
                deviceIndex: props.deviceIndex,
                verseIndex,
                selectedSongIndex: props.selectedSongIndex,
                selectedDotKeys: props.selectedDotKeys,
                lyricColumnIndex: props.selectedLyricColumnIndex,
                direction
            })

            if (isVerseInteractivated) {
                eventHandlers.handleVerseInteractivate()
            }

        } else {
            accessedAnnotationIndex = getAnnotationIndexForDirection({
                deviceIndex: props.deviceIndex,
                currentAnnotationIndex: accessedAnnotationIndex,
                selectedSongIndex: props.selectedSongIndex,
                selectedDotKeys: props.selectedDotKeys,
                lyricColumnIndex: props.selectedLyricColumnIndex,
                direction
            })
        }

        eventHandlers.handleAnnotationAccess({
            accessedAnnotationIndex,
            doScroll: true
        })
        return true
    }

    _handleLetterKey(e, keyName) {
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

    _handleEscape(e) {
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

    _accessAnnotationWithoutDirection(verseIndex) {
        /**
         * Helper method to be called when access is turned on, or when
         * interactivated verse is selected.
         */
        const { props } = this,
            { eventHandlers } = props,
            accessedAnnotationIndex = getAnnotationIndexForVerseIndex({
                deviceIndex: props.deviceIndex,
                verseIndex,
                selectedSongIndex: props.selectedSongIndex,
                selectedDotKeys: props.selectedDotKeys,
                lyricColumnIndex: props.selectedLyricColumnIndex
            })

        eventHandlers.handleAnnotationAccess({
            accessedAnnotationIndex,
            doScroll: false
        })
    }

    render() {
        return (
            <DomManager
                eventHandlers={this.props.eventHandlers}
                handleKeyDownPress={this.handleKeyDownPress}
            />
        )
    }
}

export default connect(({
    isHeightlessLyricColumn, isLyricExpanded, selectedAccessIndex, selectedAnnotationIndex, selectedCarouselNavIndex, selectedDotsIndex, selectedDotKeys, selectedLyricColumnIndex, selectedOverviewIndex, selectedTipsIndex, selectedScoreIndex, selectedSongIndex, selectedVerseIndex, selectedWikiIndex, accessedAnnotationIndex, accessedAnnotationAnchorIndex, accessedDotIndex, accessedNavSongIndex, interactivatedVerseIndex, shownBookColumnIndex, deviceIndex
}) => ({
    isHeightlessLyricColumn, isLyricExpanded, selectedAccessIndex, selectedAnnotationIndex, selectedCarouselNavIndex, selectedDotsIndex, selectedDotKeys, selectedLyricColumnIndex, selectedOverviewIndex, selectedTipsIndex, selectedScoreIndex, selectedSongIndex, selectedVerseIndex, selectedWikiIndex, accessedAnnotationIndex, accessedAnnotationAnchorIndex, accessedDotIndex, accessedNavSongIndex, interactivatedVerseIndex, shownBookColumnIndex, deviceIndex
}))(AccessManager)
