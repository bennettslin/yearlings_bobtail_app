// Component that handles all user events from keyboard.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import DomManager from './dom-manager'
import { getSongsCount,
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
         NAV_SECTION_EXPAND_KEY,
         OVERVIEW_TOGGLE_KEY,
         SCORE_TOGGLE_KEY,
         TIPS_TOGGLE_KEY,
         TITLE_TOGGLE_KEY } from '../constants/access'
import { ALL_DOT_KEYS } from '../constants/dots'
import { DESTINATION_PORTAL_INDEX } from '../constants/lyrics'
import { SHOWN,
         OVERVIEW_OPTIONS } from '../constants/options'
import { getComponentShouldUpdate } from '../helpers/general-helper'

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

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'selectedAccessIndex',
                    'selectedAnnotationIndex',
                    'selectedDotsIndex',
                    'selectedDotKeys',
                    'selectedLyricColumnIndex',
                    'selectedNavIndex',
                    'selectedOverviewIndex',
                    'selectedScoreIndex',
                    'selectedSongIndex',
                    'selectedVerseIndex',
                    'selectedWikiIndex',
                    'accessedAnnotationIndex',
                    'accessedAnnotationAnchorIndex',
                    'accessedDotIndex',
                    'accessedNavSongIndex',
                    'interactivatedVerseIndex',
                    'shownBookColumnIndex',
                    'deviceIndex'
                ]
            })

        return componentShouldUpdate
    }

    handleKeyDownPress(e) {

        let { key: keyName,
            keyCode } = e

        // Workaround for Safari, which doesn't recognise key on event.
        if (keyName === 'Unidentified') {
            keyName = String.fromCharCode(keyCode)
        }

        /**
         * Turn on access if any key was registered. (But escape might turn it
         * off again.)
         */
        this.props.handleAccessToggle(true)

        // Do not handle if any modifier keys are present, or if it's an exempt key.
        if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || keyName === TAB || keyName === CAPS_LOCK || keyName === SPACE || keyName === PAGE_UP || keyName === PAGE_DOWN) {
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
            if (!this.props.selectedAccessIndex && !annotationIndexWasAccessed) {
                this._accessAnnotationWithoutDirection(this.props.selectedVerseIndex)
            }

            // Prevent default for registered key.
            if (keyWasRegistered) {
                e.preventDefault()
            }
        }
    }

    _routeNavigation(e, keyName) {
        const { selectedScoreIndex,
                selectedWikiIndex } = this.props

        let annotationIndexWasAccessed = false,
            keyWasRegistered = false

        if (!selectedScoreIndex && !selectedWikiIndex) {
            if (this.props.interactivatedVerseIndex > -1 && keyName === ENTER) {

                // Interactivated verse is already selected, so toggle play.
                if (this.props.interactivatedVerseIndex === this.props.selectedVerseIndex) {
                    keyWasRegistered = this.props.handleLyricPlay(e)

                    // We're selecting the interactivated verse.
                } else {
                    keyWasRegistered = this.props.handleLyricVerseSelect(e, this.props.interactivatedVerseIndex)
                    this._accessAnnotationWithoutDirection(this.props.interactivatedVerseIndex)
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
            } else if (this.props.selectedNavIndex) {
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
        const { props } = this

        let { accessedAnnotationAnchorIndex } = props,
            annotationIndexWasAccessed = false,
            keyWasRegistered = true

        switch (keyName) {
            case ARROW_LEFT:
                annotationIndexWasAccessed = true
                this.props.handleAnnotationPrevious(e)
                break
            case ARROW_RIGHT:
                annotationIndexWasAccessed = true
                this.props.handleAnnotationNext(e)
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
                    this.props.handleAnnotationAnchorAccess(accessedAnnotationAnchorIndex)
                }
                break
            }
            case ENTER: {
                const { shownAnnotationSongIndex,
                        shownAnnotationIndex } = props,

                    annotationObject = getAnnotationObject(shownAnnotationSongIndex, shownAnnotationIndex)

                if (accessedAnnotationAnchorIndex > 0 &&
                    annotationObject &&
                    annotationObject.annotationAnchors &&
                    annotationObject.annotationAnchors.length) {

                    const annotationAnchorEntity = annotationObject.annotationAnchors[accessedAnnotationAnchorIndex - 1]

                    // It's a wiki anchor.
                    if (typeof annotationAnchorEntity === 'string') {
                        this.props.handleAnnotationWikiSelect(e, accessedAnnotationAnchorIndex)

                    // It's a portal index.
                    } else {
                        const portalLink = getPortalLink(annotationObject, annotationAnchorEntity),

                            { songIndex,
                              annotationIndex,
                              verseIndex,
                              columnIndex,
                              [DESTINATION_PORTAL_INDEX]: destinationPortalIndex } = portalLink,

                        keyWasRegistered = this.props.handleAnnotationPortalSelect(
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
        const { selectedAccessIndex } = this.props

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
                    return this.props.handleDotToggle(e, accessedDotIndex)
                default:
                    return false
            }

            return this.props.handleDotAccess(accessedDotIndex)
        }

        return false
    }

    _handleNavNavigation(e, keyName) {
        const { selectedAccessIndex } = this.props
        let annotationIndexWasAccessed = false,
            keyWasRegistered = true

        // If access is off, just turn it on.
        if (selectedAccessIndex) {
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
                    keyWasRegistered = this.props.handleNavSongSelect(e, accessedNavSongIndex)
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
                    songsCount = getSongsCount()

                accessedNavSongIndex = (accessedNavSongIndex + songsCount + direction) % songsCount

                // Select the book column that contains the accessed song index.
                if (shownBookColumnIndex !== getBookColumnIndex(accessedNavSongIndex)) {
                    this.props.handleNavBookSelect(e)
                }

                this.props.handleSongAccess(accessedNavSongIndex)
            }
        }

        return { annotationIndexWasAccessed,
                 keyWasRegistered }
    }

    _handleLyricNavigation(e, keyName) {
        const { props } = this,
            { interactivatedVerseIndex } = props,
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
                return props.handleLyricAnnotationSelect(e, accessedAnnotationIndex)
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
                props.handleVerseInteractivate()
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

        props.handleAnnotationAccess({
            accessedAnnotationIndex,
            doScroll: true
        })
        return true
    }

    _handleLetterKey(e, keyName) {
        const { props } = this
        let annotationIndexWasAccessed = false,
            keyWasRegistered

        switch (keyName) {
            case ADMIN_TOGGLE_KEY:
                keyWasRegistered = props.handleAdminToggle(e)
                break
            case AUDIO_OPTIONS_TOGGLE_KEY:
                keyWasRegistered = props.handleAudioOptionsToggle(e)
                break
            case AUDIO_PLAY_KEY:
                keyWasRegistered = props.handleAudioPlay(e)
                break
            case AUDIO_PREVIOUS_SONG_KEY:
                keyWasRegistered = props.handleAudioPreviousSong(e)
                annotationIndexWasAccessed = keyWasRegistered
                break
            case AUDIO_NEXT_SONG_KEY:
                keyWasRegistered = props.handleAudioNextSong(e)
                annotationIndexWasAccessed = keyWasRegistered
                break
            case AUDIO_REWIND_KEY:
                keyWasRegistered = props.handleVerseDirectionAccess(-1)
                break
            case AUDIO_FAST_FORWARD_KEY:
                keyWasRegistered = props.handleVerseDirectionAccess(1)
                break
            case OVERVIEW_TOGGLE_KEY:
                keyWasRegistered = props.handleOverviewToggle(e)
                break
            case CAROUSEL_TOGGLE_KEY:
                keyWasRegistered = props.handleCarouselToggle(e)
                break
            case SCORE_TOGGLE_KEY:
                keyWasRegistered = props.handleScoreToggle(e)
                break
            case TIPS_TOGGLE_KEY:
                keyWasRegistered = props.handleTipsToggle(e)
                break
            case LYRIC_COLUMN_TOGGLE_KEY:
                keyWasRegistered = props.handleLyricColumnSelect(e)
                annotationIndexWasAccessed = keyWasRegistered
                break
            case LYRIC_SECTION_EXPAND_KEY:
                keyWasRegistered = props.handleLyricSectionExpand(e)
                break
            case TITLE_TOGGLE_KEY:
                keyWasRegistered = props.handleTitleToggle(e)
                break
            case DOTS_SECTION_EXPAND_KEY:
                keyWasRegistered = props.handleDotsSectionToggle(e)
                break
            case NAV_SECTION_EXPAND_KEY:
                keyWasRegistered = props.handleNavExpand(e)
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
        const { props } = this

        // Close score popup.
        if (props.selectedScoreIndex) {
            props.handleScoreToggle(e)

        // Close wiki popup.
        } else if (props.selectedWikiIndex) {
            props.handleWikiToggle(e)

        // Close overview popup.
        } else if (OVERVIEW_OPTIONS[props.selectedOverviewIndex] === SHOWN) {
            props.handleOverviewToggle(e)

        // Close dots popup.
        } else if (props.selectedDotsIndex) {
            props.handleDotsSectionToggle(e)

        // Close annotation popup.
        } else if (props.selectedAnnotationIndex) {
            props.handleLyricAnnotationSelect(e)

        // Turn access off.
        } else {
            props.handleAccessToggle(false)
            props.handleVerseInteractivate(e)
        }
    }

    _accessAnnotationWithoutDirection(verseIndex) {
        /**
         * Helper method to be called when access is turned on, or when
         * interactivated verse is selected.
         */
        const { props } = this,
            accessedAnnotationIndex = getAnnotationIndexForVerseIndex({
                deviceIndex: props.deviceIndex,
                verseIndex,
                selectedSongIndex: props.selectedSongIndex,
                selectedDotKeys: props.selectedDotKeys,
                lyricColumnIndex: props.selectedLyricColumnIndex
            })

        props.handleAnnotationAccess({
            accessedAnnotationIndex,
            doScroll: false
        })
    }

    render() {
        return (
            <DomManager {...this.props}
                handleKeyDownPress={this.handleKeyDownPress}
            />
        )
    }
}

export default connect(({
    selectedAccessIndex, selectedAnnotationIndex, selectedDotsIndex, selectedDotKeys, selectedLyricColumnIndex, selectedNavIndex, selectedOverviewIndex, selectedScoreIndex, selectedSongIndex, selectedVerseIndex, selectedWikiIndex, shownAnnotationSongIndex, shownAnnotationIndex, accessedAnnotationIndex, accessedAnnotationAnchorIndex, accessedDotIndex, accessedNavSongIndex, interactivatedVerseIndex, shownBookColumnIndex, deviceIndex
}) => ({
    selectedAccessIndex, selectedAnnotationIndex, selectedDotsIndex, selectedDotKeys, selectedLyricColumnIndex, selectedNavIndex, selectedOverviewIndex, selectedScoreIndex, selectedSongIndex, selectedVerseIndex, selectedWikiIndex, shownAnnotationSongIndex, shownAnnotationIndex, accessedAnnotationIndex, accessedAnnotationAnchorIndex, accessedDotIndex, accessedNavSongIndex, interactivatedVerseIndex, shownBookColumnIndex, deviceIndex
}))(AccessManager)
