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
        this.handleKeyName = this.handleKeyName.bind(this)
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

        this.handleKeyName(e, keyName)
    }

    handleKeyName(e, keyName) {
        console.warn(`Handling key "${keyName}".`);

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

        // TODO: If it's an arrow key.
        const { accessedSectionIndex } = this.props,
            accessedSectionKey = newAccessedSectionKey || (accessedSectionIndex > 0 ? SECTION_KEYS[accessedSectionIndex - 1] : null)

        

        // Handle escape key.
        // Handle arrow keys based on which section is accessed.

        // TODO: Have a way to cancel accessed section.

        // TODO: Turn access on.
        // this.props.handleKeyDownPress(keyName)
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
