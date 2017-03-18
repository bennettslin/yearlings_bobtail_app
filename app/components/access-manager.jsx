import React, { Component } from 'react'
import DomManager from './dom-manager'
import { CAPS_LOCK,
         ESCAPE,
         SPACE,
         TAB,
         OVERVIEW_TOGGLE_KEY,
         ADMIN_TOGGLE_KEY,
         AUDIO_OPTIONS_TOGGLE_KEY,
         AUDIO_PLAY_KEY,
         AUDIO_PREVIOUS_SONG_KEY,
         AUDIO_NEXT_SONG_KEY,
         SCORE_TOGGLE_KEY,
         TIPS_TOGGLE_KEY,
         LYRIC_SECTION_EXPAND_KEY,
         TITLE_SELECT_KEY,
         DOTS_SECTION_ACCESS_KEY,
         LYRIC_SECTION_ACCESS_KEY,
         NAV_SECTION_ACCESS_KEY

        //  SECTION_KEYS,
        //  NAV_SECTION,
        //  LYRICS_SECTION,
        //  DOTS_SECTION
      } from 'helpers/constants'

class AccessManager extends Component {

    constructor(props) {
        super(props)

        this.handleKeyDownPress = this.handleKeyDownPress.bind(this)
        this.handleEscape = this.handleEscape.bind(this)
        this.handleArrowKey = this.handleArrowKey.bind(this)
        this.handleLetterKey = this.handleLetterKey.bind(this)
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
            this.handleEscape(e)

        } else {
            // Turn access on.
            this.props.handleAccessToggle(true)

            if (keyName.indexOf('Arrow') > -1) {
                this.handleArrowKey(keyName)

            } else {
                this.handleLetterKey(keyName)
            }
        }
    }

    handleEscape(e) {
        const { props } = this

        // Close score popup.
        if (props.selectedScoreIndex) {
            this.props.handleScoreToggle(e)

        // Close wiki popup.
        } else if (props.selectedWikiIndex) {
            this.props.handleWikiToggle(e)

        // Close overview popup.
        // FIXME: Overview is 0 by default.
        } else if (props.selectedOverviewIndex === 0) {
            this.props.handleOverviewToggle(e)

        // Close dots popup.
        } else if (props.selectedDotsIndex) {
            this.props.handleDotsSectionToggle(e)

        // Close annotation popup.
        } else if (props.selectedAnnotationIndex) {
            this.props.handleLyricAnnotationSelect(e)

        // Turn access off.
        } else {
            this.props.handleAccessToggle(false)
        }
    }

    handleArrowKey(arrowName) {
        // const { accessedSectionIndex } = this.props,
        //     accessedSectionKey = SECTION_KEYS[accessedSectionIndex - 1]
        //
        // switch (accessedSectionKey) {
        //     case NAV_SECTION:
        //
        //         break
        //     case LYRICS_SECTION:
        //
        //         break
        //     case DOTS_SECTION:
        //
        //         break
        //     default:
        //
        //         break
        // }
    }

    handleLetterKey(keyName) {
        let newAccessedSectionKey

        switch (keyName) {
            case OVERVIEW_TOGGLE_KEY:
                // TODO: This should be smarter about toggling through all three.
                this.props.handleOverviewToggle()
                break
            case ADMIN_TOGGLE_KEY:
                this.props.handleAdminToggle()
                break
            case AUDIO_OPTIONS_TOGGLE_KEY:
                this.props.handleAudioOptionsToggle()
                break
            case AUDIO_PLAY_KEY:
                this.props.handleAudioPlay()
                break
            case AUDIO_PREVIOUS_SONG_KEY:
                this.props.handleAudioPreviousSong()
                break
            case AUDIO_NEXT_SONG_KEY:
                this.props.handleAudioNextSong()
                break
            case SCORE_TOGGLE_KEY:
                this.props.handleScoreToggle()
                break
            case TIPS_TOGGLE_KEY:
                this.props.handleTipsToggle()
                break
            case LYRIC_SECTION_EXPAND_KEY:
                this.props.handleLyricSectionExpand()
                break
            case TITLE_SELECT_KEY:
                this.props.handleTitleSelect()
                break
            case DOTS_SECTION_ACCESS_KEY:
                // FIXME: Loop through dots options.
                this.props.handleDotsSectionToggle()
                // newAccessedSectionKey = DOTS_SECTION
                break
            case LYRIC_SECTION_ACCESS_KEY:
                // newAccessedSectionKey = LYRICS_SECTION
                break
            case NAV_SECTION_ACCESS_KEY:
                this.props.handleNavExpand()
                // newAccessedSectionKey = NAV_SECTION
                break
            default:
                break
        }

        // Persist new accessed section key.
        // if (newAccessedSectionKey) {
        //     this.props.handleAccessedSectionSelect(newAccessedSectionKey)
        // }
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
