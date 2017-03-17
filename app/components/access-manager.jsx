import React, { Component } from 'react'
import DomManager from './dom-manager'
import { CAPS_LOCK,
         ESCAPE,
         TAB,

         SECTION_KEYS,
         NAV_SECTION,
         LYRICS_SECTION,
         DOTS_SECTION } from 'helpers/constants'

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
        if (e && (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || keyName === TAB || keyName === CAPS_LOCK)) {
            return

        } else {
            e.preventDefault()
        }

        // Make all single characters lowercase.
        if (keyName.length === 1) {
            keyName = keyName.toLowerCase()
        }

        if (keyName === ESCAPE) {
            this.handleEscape(e)

        } else {
            this.props.handleAccessToggle(true)

            if (keyName.indexOf('Arrow') > -1) {
                this.handleArrowKey(e, keyName)
            } else {
                this.handleLetterKey(e, keyName)
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

    handleArrowKey(e, arrowName) {
        const { accessedSectionIndex } = this.props,
            accessedSectionKey = SECTION_KEYS[accessedSectionIndex - 1]

        switch (accessedSectionKey) {
            case NAV_SECTION:

                break
            case LYRICS_SECTION:

                break
            case DOTS_SECTION:

                break
            default:

                break
        }
    }

    handleLetterKey(e, keyName) {
        let newAccessedSectionKey

        switch (keyName) {
            case 'b':
                // TODO: This should be smarter about toggling through all three.
                this.props.handleOverviewToggle(e)
                break
            case 'm':
                this.props.handleAdminToggle(e)
                break
            case 'o':
                this.props.handleAudioOptionsToggle(e)
                break
            case 'p':
                this.props.handleAudioPlay(e)
                break
            case 'r':
                this.props.handleAudioPreviousSong(e)
                break
            case 'f':
                this.props.handleAudioNextSong(e)
                break
            case 's':
                this.props.handleScoreToggle(e)
                break
            case 't':
                this.props.handleTipsToggle(e)
                break
            case 'x':
                this.props.handleLyricSectionExpand(e)
                break
            case 'z':
                this.props.handleTitleSelect(e)
                break
            case 'd':
                // FIXME: Loop through dots options.
                this.props.handleDotsSectionToggle(e)
                newAccessedSectionKey = DOTS_SECTION
                break
            case 'l':
                newAccessedSectionKey = LYRICS_SECTION
                break
            case 'n':
                this.props.handleNavExpand(e)
                newAccessedSectionKey = NAV_SECTION
                break
            default:
                break
        }

        // Persist new accessed section key.
        if (newAccessedSectionKey) {
            this.props.handleAccessedSectionSelect(newAccessedSectionKey)
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
