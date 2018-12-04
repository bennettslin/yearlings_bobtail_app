// Component that handles all user events from keyboard.

import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateAccessStore } from 'flux/access/action'
import { updateToggleStore } from 'flux/toggle/action'
import { updateVerseBarsStore } from 'flux/verseBars/action'

import NavigationManager from './Navigation'
import LetterManager from './Letter'

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
    ESCAPE,
    SPACE,
    TAB
} from 'constants/access'

class KeyManager extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAccessOn: PropTypes.bool.isRequired,
        updateAccessStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,
        updateVerseBarsStore: PropTypes.func.isRequired,

        // From parent.
        parentThis: PropTypes.object.isRequired
    }
    componentDidMount() {
        this.props.parentThis.handleKeyDownPress = this.handleKeyDownPress
        this.props.parentThis.handleKeyUpPress = this.handleKeyUpPress
    }

    handleKeyDownPress = (e) => {
        const keyName = getKeyName(e)

        // Do not allow the event to propagate if it's one of these.
        if (!keyName) {
            return false
        }

        // Show key as registered in the UI.
        this.props.updateAccessStore({ accessedKey: keyName })

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
            keyName === CAPS_LOCK
        ) {
            return false
        }

        // Stop showing key as registered in the UI.
        this.props.updateAccessStore({ accessedKey: '' })

        /**
         * Once key letter is removed from display, ignore all nav keys plus
         * rewind and fast forward, which were already handled on key down.
         */
        if (getShouldHandleOnKeyDown(keyName)) {
            return false
        }

        // Handle escape key.
        if (keyName === ESCAPE) {
            this.handleEscape(e)

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
            // annotationIndexWasAccessed,
            keyWasRegistered

        } = getIsNavKey(keyName) ?
            this.handleNavigation(e, keyName) :
            this.handleLetter(e, keyName)

        // Prevent default for registered key.
        if (keyWasRegistered) {
            e.preventDefault()

        /**
         * At this point, up and down arrows are used to scroll lyric, so
         * turn off autoScroll and determine verse bars.
         */
        } else if (
            keyName === ARROW_UP ||
            keyName === ARROW_DOWN ||
            keyName === SPACE ||
            keyName === PAGE_UP ||
            keyName === PAGE_DOWN
        ) {
            this.determineVerseBarsWithParameters()
        }
    }

    determineVerseBarsWithParameters = () => {
        /**
         * Make duration long enough for Chrome, Firefox, and Safari. 150 is
         * fine for lyric page up and down, but 300 seems to be needed for
         * navigating between annotations.
         */
        this.props.updateVerseBarsStore({
            queuedDetermineVerseBars: true,
            queuedVerseBarsTimeout: 150
        })
        this.props.updateToggleStore({ isAutoScroll: false })
    }

    render() {
        return (
            <___>
                <NavigationManager {...{ parentThis: this }} />
                <LetterManager {...{ parentThis: this }} />
            </___>
        )
    }
}

const mapStateToProps = ({
    toggleStore: { isAccessOn },
    songStore: {
        selectedVerseIndex,
        selectedAnnotationIndex
    }
}) => ({
    isAccessOn,
    selectedAnnotationIndex,
    selectedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateAccessStore,
        updateToggleStore,
        updateVerseBarsStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(KeyManager)
