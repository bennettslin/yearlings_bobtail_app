import React, { Component } from 'react'
import DomManager from './dom-manager'
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
         SCORE_TOGGLE_KEY,
         TIPS_TOGGLE_KEY,
         LYRIC_COLUMN_TOGGLE_KEY,
         LYRIC_SECTION_EXPAND_KEY,
         TITLE_SELECT_KEY,
         DOTS_SECTION_ACCESS_KEY,
         LYRIC_SECTION_ACCESS_KEY,
         NAV_SECTION_ACCESS_KEY,

         OVERVIEW_OPTIONS,
         SHOWN,
         HIDDEN,

      } from 'helpers/constants'

class AccessManager extends Component {

    constructor(props) {
        super(props)

        this.handleKeyDownPress = this.handleKeyDownPress.bind(this)
        this._routeNavigation = this._routeNavigation.bind(this)
        this._handleNavNavigation = this._handleNavNavigation.bind(this)
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

        } else {
            e.preventDefault()
        }

        // Make all single characters lowercase.
        if (keyName.length === 1) {
            keyName = keyName.toLowerCase()
        }

        // Handle escape key.
        if (keyName === ESCAPE) {
            this._handleEscape(e)

        } else {
            // Turn access on.
            this.props.handleAccessToggle(true)

            if (keyName.indexOf('Arrow') > -1 || keyName === ENTER) {
                this._routeNavigation(e, keyName)

            } else {
                this._handleLetterKey(e, keyName)
            }
        }
    }

    _routeNavigation(e, arrowName) {
        // We're in annotation.
        if (this.props.selectedAnnotationIndex) {

            // We're in dots section.
        } else if (this.props.selectedDotsIndex) {

            // We're in nav section.
        } else if (this.props.selectedNavIndex) {
            this._handleNavNavigation(e, arrowName)

        // We're in lyrics section.
        } else {

        }
    }

    _handleNavNavigation(e, arrowName) {
        const { songs,
                selectedBookColumnIndex,
                bookStartingIndices } = this.props,
            songsLength = songs.length

        let { accessedSongIndex } = this.props

        // Skip appropriate songs if showing single book column.
        switch (arrowName) {
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
    }

    _handleLetterKey(e, keyName) {
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
                break
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
            props.handleVerseInteractivate()
        }
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
