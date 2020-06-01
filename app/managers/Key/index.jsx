// Component that handles all user events from keyboard.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAccessStore } from '../../redux/access/action'
import { updateToggleStore } from '../../redux/toggle/action'
import { updateVerseBarsStore } from '../../redux/verseBars/action'
import NavigationManager from './Navigation'
import LetterManager from './Letter'
import { populateRefs } from '../../helpers/ref'
import { isEmailFocused } from '../../utils/email'
import { mapIsAccessOn } from '../../redux/access/selectors'
import {
    getKeyName,
    getIsNavKeyOrEnter,
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
} from '../../constants/access'
import {
    mapSelectedVerseIndex,
    mapSelectedAnnotationIndex
} from '../../redux/selected/selectors'

const mapStateToProps = state => {
    const
        isAccessOn = mapIsAccessOn(state),
        selectedVerseIndex = mapSelectedVerseIndex(state),
        selectedAnnotationIndex = mapSelectedAnnotationIndex(state)

    return {
        isAccessOn,
        selectedAnnotationIndex,
        selectedVerseIndex
    }
}

class KeyManager extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAccessOn: PropTypes.bool.isRequired,
        updateAccessStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,
        updateVerseBarsStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            handleKeyDownPress: this.handleKeyDownPress,
            handleKeyUpPress: this.handleKeyUpPress
        })
    }

    handleKeyDownPress = e => {

        if (isEmailFocused()) {
            return false
        }

        const keyName = getKeyName(e)

        // Do not allow the event to propagate if it's one of these.
        if (!keyName) {
            return false
        }

        // Show key as registered in the UI.
        this.props.updateAccessStore({ accessedKey: keyName })

        /**
         * Once access is turned on and key letter is displayed, ignore non-nav
         * keys and enter key, which are handled on key up.
         */
        if (!getShouldHandleOnKeyDown(keyName)) {
            return false

        } else {
            // Turn on access.
            this.props.updateAccessStore({ isAccessOn: true })
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

    handleKeyUpPress = e => {

        if (isEmailFocused()) {
            return false
        }

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

        // Turn on access.
        } else if (keyName !== ESCAPE) {
            this.props.updateAccessStore({ isAccessOn: true })
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

        const
            { keyWasRegistered } =
                getIsNavKeyOrEnter(keyName) ?
                    this.handleNavigation(keyName) :
                    this.handleLetter(keyName)

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

    _getRefs = payload => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <>
                <NavigationManager {...{ getRefs: this._getRefs }} />
                <LetterManager {...{ getRefs: this._getRefs }} />
            </>
        )
    }
}

export default connect(
    mapStateToProps,
    {
        updateAccessStore,
        updateToggleStore,
        updateVerseBarsStore
    }
)(KeyManager)
