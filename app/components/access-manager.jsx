import React, { Component } from 'react'
import DomManager from './dom-manager'
import { getAnnotation,
         getAnnotationIndexForDirection,
         getAnnotationIndexForVerseIndex,
         getPopupAnchorIndexForDirection } from 'helpers/album-view-helper'
import { CAPS_LOCK,
         ESCAPE,
         SPACE,
         TAB,
         ARROW_LEFT,
         ARROW_RIGHT,
         ARROW_UP,
         ARROW_DOWN,
         ENTER,

         OVERVIEW_TOGGLE_KEY,
         ADMIN_TOGGLE_KEY,
         AUDIO_OPTIONS_TOGGLE_KEY,
         AUDIO_PLAY_KEY,
         AUDIO_PREVIOUS_SONG_KEY,
         AUDIO_NEXT_SONG_KEY,
         AUDIO_REWIND_KEY,
         AUDIO_FAST_FORWARD_KEY,
         SCORE_TOGGLE_KEY,
         TIPS_TOGGLE_KEY,
         LYRIC_COLUMN_TOGGLE_KEY,
         LYRIC_SECTION_EXPAND_KEY,
         TITLE_SELECT_KEY,
         DOTS_SECTION_ACCESS_KEY,
         NAV_SECTION_ACCESS_KEY,

         OVERVIEW_OPTIONS,
         SHOWN,

         LYRIC_COLUMN_KEYS,
         ALL_DOT_KEYS } from 'helpers/constants'

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

    handleKeyDownPress(e) {

        let { key: keyName,
            keyCode } = e

        // Workaround for Safari, which doesn't recognise key on event.
        if (keyName === 'Unidentified') {
            keyName = String.fromCharCode(keyCode)
        }

        // Do not handle if any modifier keys are present, or if it's an exempt key.
        if (e && (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || keyName === TAB || keyName === CAPS_LOCK || keyName === SPACE)) {
            return
        }

        // Make all single characters lowercase.
        if (keyName.length === 1) {
            keyName = keyName.toLowerCase()
        }

        // If turning on access, also access annotation index...
        let doAccessAnnotationIndex = !this.props.accessedOn,
            handleRegisteredKey = true

        // Handle escape key.
        if (keyName === ESCAPE) {
            this._handleEscape(e)

        } else {
            if (keyName.indexOf('Arrow') > -1 || keyName === ENTER) {
                const { annotationIndexWasAccessed,
                        keyWasRegistered } = this._routeNavigation(e, keyName)

                // But cancel annotation index access if we've just done so.
                doAccessAnnotationIndex = doAccessAnnotationIndex && !annotationIndexWasAccessed

                handleRegisteredKey = keyWasRegistered

            } else {
                const { annotationIndexWasAccessed,
                  keyWasRegistered } = this._handleLetterKey(e, keyName)

                doAccessAnnotationIndex = doAccessAnnotationIndex && !annotationIndexWasAccessed

                handleRegisteredKey = keyWasRegistered
            }

            if (doAccessAnnotationIndex) {
                this._accessAnnotationWithoutDirection(this.props.selectedVerseIndex)
            }

            if (handleRegisteredKey) {
                e.preventDefault()
            }

            // Turn access on.
            this.props.handleAccessToggle(true)
        }
    }

    _routeNavigation(e, keyName) {
        let annotationIndexWasAccessed = false,
            keyWasRegistered = false

        if (this.props.interactivatedVerseIndex > -1 && keyName === ENTER) {

            // Interactivated verse is already selected, so toggle play.
            if (this.props.interactivatedVerseIndex === this.props.selectedVerseIndex) {
                this.props.handleLyricPlay(e)

            // We're selecting the interactivated verse.
            } else {
                this.props.handleLyricVerseSelect(e, this.props.interactivatedVerseIndex)
                this._accessAnnotationWithoutDirection(this.props.interactivatedVerseIndex)
                annotationIndexWasAccessed = true
            }

            keyWasRegistered = true

        // We're in annotation.
        } else if (this.props.selectedAnnotationIndex) {
            keyWasRegistered = this._handleAnnotationNavigation(e, keyName)

            // We're in dots section.
        } else if (this.props.selectedDotsIndex) {
            keyWasRegistered = this._handleDotsNavigation(e, keyName)

            // We're in nav section.
        } else if (this.props.selectedNavIndex) {
            keyWasRegistered = this._handleNavNavigation(e, keyName)

        // We're in lyrics section.
        } else {
            keyWasRegistered = this._handleLyricNavigation(e, keyName)

            // If key was registered, then annotation index was accessed.
            annotationIndexWasAccessed = keyWasRegistered
        }

        return {
            annotationIndexWasAccessed,
            keyWasRegistered
        }
    }

    _handleAnnotationNavigation(e, keyName) {
        const { props } = this

        let { accessedPopupAnchorIndex } = props,
            direction

        switch (keyName) {
            case ARROW_LEFT:
                this.props.handleAnnotationPrevious(e)
                break
            case ARROW_RIGHT:
                this.props.handleAnnotationNext(e)
                break
            case ARROW_UP:
                direction = -1
                break
            case ARROW_DOWN:
                direction = 1
                break
            case ENTER: {
                const annotation = getAnnotation(props)

                if (annotation.popupAnchors && annotation.popupAnchors.length) {
                    const popupAnchorObject = annotation.popupAnchors[accessedPopupAnchorIndex - 1]

                    // It's a wiki anchor.
                    if (typeof popupAnchorObject === 'string') {
                        this.props.handleAnnotationWikiSelect(e, accessedPopupAnchorIndex)

                    // It's a portal.
                    } else {
                        const { songIndex,
                                annotationIndex,
                                verseIndex,
                                columnIndex } = popupAnchorObject

                        this.props.handleAnnotationPortalSelect(
                            e,
                            songIndex,
                            annotationIndex,
                            verseIndex,
                            columnIndex
                        )
                    }
                    return true

                } else {
                    return false
                }
            }

            default:
                return false
        }

        accessedPopupAnchorIndex = getPopupAnchorIndexForDirection(
            props,
            accessedPopupAnchorIndex,
            direction
        )

        this.props.handlePopupAnchorAccess(accessedPopupAnchorIndex)
        return true
    }


    _handleDotsNavigation(e, keyName) {
        const dotKeysLength = ALL_DOT_KEYS.length
        let { accessedDotIndex } = this.props

        // TODO: Is this the best way to navigate? That is, should right from 4 to 5, or back to 1?
        switch (keyName) {
            case ARROW_LEFT:
                accessedDotIndex = (accessedDotIndex + (dotKeysLength - 1)) % dotKeysLength
                break
            case ARROW_RIGHT:
                accessedDotIndex = (accessedDotIndex + 1) % dotKeysLength
                break
            case ARROW_UP:
            case ARROW_DOWN:
                accessedDotIndex = (accessedDotIndex + (dotKeysLength / 2)) % dotKeysLength
                break
            case ENTER:
                this.props.handleDotKeyToggle(e, ALL_DOT_KEYS[accessedDotIndex])
                return true
            default:
                return false
        }

        this.props.handleDotAccess(accessedDotIndex)
        return true
    }

    _handleNavNavigation(e, keyName) {
        const { songs,
                selectedBookColumnIndex,
                bookStartingIndices } = this.props,
            songsLength = songs.length

        let { accessedSongIndex } = this.props

        // Skip appropriate songs if showing single book column.
        switch (keyName) {
            case ARROW_LEFT:
                accessedSongIndex = (accessedSongIndex + (songsLength - 1)) % songsLength
                break
            case ARROW_RIGHT:
                accessedSongIndex = (accessedSongIndex + 1) % songsLength
                break
            case ENTER:
                this.props.handleNavSongSelect(e, accessedSongIndex)
                return true
            default:
                return false
        }

        // Select the book column that contains the accessed song index.
        if ((selectedBookColumnIndex === 1 && accessedSongIndex >= bookStartingIndices[1]) || (selectedBookColumnIndex === 2 && accessedSongIndex < bookStartingIndices[1])) {
            this.props.handleNavBookSelect(e)
        }

        this.props.handleSongAccess(accessedSongIndex)
        return true
    }

    _handleLyricNavigation(e, keyName) {

        const { props } = this
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
                props.handleLyricAnnotationSelect(e, accessedAnnotationIndex)
                return true
            default:
                return false
        }

        /**
         * If this key will turn on access, choose annotation based on selected
         * verse.
         */
        if (!props.accessedOn) {
            accessedAnnotationIndex = getAnnotationIndexForVerseIndex({
                props,
                state: props,
                verseIndex: props.selectedVerseIndex,
                direction
            })

        } else {
            accessedAnnotationIndex = getAnnotationIndexForDirection({
                props,
                state: props,
                currentAnnotationIndex: accessedAnnotationIndex,
                direction
            })
        }

        props.handleAnnotationAccess(accessedAnnotationIndex)
        return true
    }

    _handleLetterKey(e, keyName) {
        let annotationIndexWasAccessed = false,

            // TODO: Setting to true for now, but this should really be set by each case.
            keyWasRegistered = true

        switch (keyName) {
            case ADMIN_TOGGLE_KEY:
                this.props.handleAdminToggle(e)
                break
            case AUDIO_OPTIONS_TOGGLE_KEY:
                this.props.handleAudioOptionsToggle(e)
                break
            case AUDIO_PLAY_KEY:
                this.props.handleAudioPlay(e)
                break
            case AUDIO_PREVIOUS_SONG_KEY:
                this.props.handleAudioPreviousSong(e)
                break
            case AUDIO_NEXT_SONG_KEY:
                this.props.handleAudioNextSong(e)
                break
            case AUDIO_REWIND_KEY:
                this.props.handleVerseDirectionAccess(-1)
                break
            case AUDIO_FAST_FORWARD_KEY:
                this.props.handleVerseDirectionAccess(1)
                break
            case OVERVIEW_TOGGLE_KEY:
                this.props.handleOverviewToggle(e)
                break
            case SCORE_TOGGLE_KEY:
                this.props.handleScoreToggle(e)
                break
            case TIPS_TOGGLE_KEY:
                this.props.handleTipsToggle(e)
                break
            case LYRIC_COLUMN_TOGGLE_KEY:
                this.props.handleLyricColumnSelect(e)
                annotationIndexWasAccessed = true
                break
            case LYRIC_SECTION_EXPAND_KEY:
                this.props.handleLyricSectionExpand(e)
                break
            case TITLE_SELECT_KEY:
                this.props.handleTitleSelect(e)
                break
            case DOTS_SECTION_ACCESS_KEY:
                this.props.handleDotsSectionToggle(e)
                break
            case NAV_SECTION_ACCESS_KEY:
                this.props.handleNavExpand(e)
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
                props,
                state: props,
                verseIndex
            })

        props.handleAnnotationAccess(accessedAnnotationIndex)
    }

    render() {
        return (
            <DomManager {...this.props}
                handleKeyDownPress={this.handleKeyDownPress}
            />
        )
    }
}

export default AccessManager
