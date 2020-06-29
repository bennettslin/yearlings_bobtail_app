// Component that handles all user events from keyboard.
// eslint-disable-next-line object-curly-newline
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { updateAccessStore } from '../../redux/access/action'
import { updateIsAutoScroll } from '../../redux/toggle/action'
import { updateVerseBarsStore } from '../../redux/verseBars/action'
import NavigationManager from './Navigation'
import LetterManager from './Letter'
import { isEmailFocused } from '../../utils/email'
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

const KeyManager = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        handleNavigation = useRef(),
        handleLetter = useRef()

    const _determineVerseBarsWithParameters = () => {
        /**
         * Make duration long enough for Chrome, Firefox, and Safari. 150 is
         * fine for lyric page up and down, but 300 seems to be needed for
         * navigating between annotations.
         */
        dispatch(updateVerseBarsStore({
            queuedDetermineVerseBars: true,
            queuedVerseBarsTimeout: 150
        }))
        dispatch(updateIsAutoScroll())
    }

    const _handleKeyRegister = ({
        e,
        keyName,
        isKeyDown
    }) => {
        const shouldHandleOnKeyDown = getShouldHandleOnKeyDown(keyName),
            shouldHandle = isKeyDown === shouldHandleOnKeyDown

        if (!shouldHandle) {
            return false
        }

        const
            { keyWasRegistered } =
                getIsNavKeyOrEnter(keyName) ?
                    handleNavigation.current(keyName) :
                    handleLetter.current.letter(keyName)

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
            _determineVerseBarsWithParameters()
        }
    }

    const handleKeyDown = e => {
        if (isEmailFocused()) {
            return false
        }

        const keyName = getKeyName(e)

        // Do not allow the event to propagate if it's one of these.
        if (!keyName) {
            return false
        }

        // Show key as registered in the UI.
        dispatch(updateAccessStore({ accessedKey: keyName }))

        /**
         * Once access is turned on and key letter is displayed, ignore non-nav
         * keys and enter key, which are handled on key up.
         */
        if (!getShouldHandleOnKeyDown(keyName)) {
            return false

        } else {
            // Turn on access.
            dispatch(updateAccessStore({ isAccessOn: true }))
        }

        /**
         * While these keys do not register, they do scroll the lyric.
         */
        if (
            keyName === SPACE ||
            keyName === PAGE_UP ||
            keyName === PAGE_DOWN
        ) {
            _determineVerseBarsWithParameters()
        }

        _handleKeyRegister({
            e,
            keyName,
            isKeyDown: true
        })
    }

    const handleKeyUp = e => {
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
        dispatch(updateAccessStore({ accessedKey: '' }))

        /**
         * Once key letter is removed from display, ignore all nav keys plus
         * rewind and fast forward, which were already handled on key down.
         */
        if (getShouldHandleOnKeyDown(keyName)) {
            return false

        // Turn on access.
        } else if (keyName !== ESCAPE) {
            dispatch(updateAccessStore({ isAccessOn: true }))
        }

        // Handle escape key.
        if (keyName === ESCAPE) {
            handleLetter.current.escape(e)

        } else {

            _handleKeyRegister({
                e,
                keyName,
                isKeyDown: false
            })
        }
    }

    useImperativeHandle(ref, () => ({
        down: handleKeyDown,
        up: handleKeyUp
    }))
    return (
        <>
            <NavigationManager {...{ ref: handleNavigation }} />
            <LetterManager {...{ ref: handleLetter }} />
        </>
    )
})

export default KeyManager
