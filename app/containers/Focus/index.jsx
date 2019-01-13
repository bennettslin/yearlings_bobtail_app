/**
 * Parent component that handles click, touch, and keyDown events.
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateFocusStore } from 'flux/focus/action'

import CloseHandler from '../../handlers/Close'
import SliderTouchDispatcher from '../../dispatchers/SliderTouchDispatcher'
import StopPropagationDispatcher from '../../dispatchers/StopPropagation'

import RootContainer from '../Root'
import KeyManager from '../../managers/Key'
import AccessStylesheet from '../../components/Access/Stylesheet'

import { populateRefs } from 'helpers/ref'

const mapStateToProps = ({
    responsiveStore: { isHeightlessLyric },
    toggleStore: { isLyricExpanded },
    focusStore: { queuedFocus }
}) => ({
    isHeightlessLyric,
    isLyricExpanded,
    queuedFocus
})

class FocusContainer extends PureComponent {

    static propTypes = {
        // Through Redux.
        isHeightlessLyric: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        queuedFocus: PropTypes.bool.isRequired,
        updateFocusStore: PropTypes.func.isRequired
    }

    state = { isSliderTouchEnding: false }

    componentDidMount() {
        logMount('FocusContainer')

        // Focus lyric section when app is mounted.
        this._focusElementForAccess()
    }

    componentDidUpdate(prevProps) {
        this._checkFocus(prevProps)
        this._checkLyricChange(prevProps)
    }

    _checkFocus(prevProps) {
        const
            { queuedFocus } = this.props,
            { queuedFocus: prevFocus } = prevProps

        if (queuedFocus && !prevFocus) {
            this._focusElementForAccess()

            this.props.updateFocusStore({ queuedFocus: false })
        }
    }

    _checkLyricChange(prevProps) {
        /**
         * Determine whether to add or remove focus from lyric element,
         * depending on whether it is now shown or hidden.
         */
        const {
                isHeightlessLyric,
                isLyricExpanded
            } = this.props,
            {
                isHeightlessLyric: wasHeightlessLyric,
                isLyricExpanded: wasLyricExpanded
            } = prevProps

        if (
            isHeightlessLyric !== wasHeightlessLyric ||
            isLyricExpanded !== wasLyricExpanded
        ) {
            this._focusElementForAccess()
        }
    }

    _focusElementForAccess = () => {
        const {
            isHeightlessLyric,
            isLyricExpanded
        } = this.props

        let focusedElement,
            focusedElementString

        if (
            (
                !isHeightlessLyric || isLyricExpanded
            ) &&
            this.lyricElement
        ) {
            focusedElement = this.lyricElement
            focusedElementString = 'lyric'

        } else {
            focusedElement = this.rootElement
            focusedElementString = 'root'
        }

        if (focusedElement) {
            logFocus(`Focus on ${focusedElementString}.`)
            focusedElement.focus()
        }
    }

    _handleTouchMove = (e) => {
        this.dispatchTouchMove(e)
    }

    _handleTouchEnd = (e) => {
        const isSliderTouchEnding = this.dispatchTouchEnd()
        if (isSliderTouchEnding) {
            logEvent('Focus', e)
            /**
             * Ignore body click event that gets triggered after touch end on
             * slider, to prevent it from closing out of overlay.
             */
            setTimeout(this._resetTouchEndState, 200)

            this.setState({ isSliderTouchEnding: true })
        }
    }

    _resetTouchEndState = () => {
        this.setState({ isSliderTouchEnding: false })
    }

    _handleBodyClick = (e) => {
        logEvent('Focus', e)

        this.dispatchStopPropagation(e)

        if (!this.state.isSliderTouchEnding) {
            this.closeForBodyClick()
        }
    }

    setLyricFocusElement = (node) => {
        this.lyricElement = node
        this._focusElementForAccess()
    }

    setScoreFocusElement = (node) => {
        this.scoreElement = node
        this._focusElementForAccess()
    }

    setWikiFocusElement = (node) => {
        this.wikiElement = node
        this._focusElementForAccess()
    }

    _setRootElement = node => this.rootElement = node
    _handleKeyDownPress = e => this.handleKeyDownPress(e)
    _handleKeyUpPress = e => this.handleKeyUpPress(e)

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <div
                {...{
                    ref: this._setRootElement,
                    className: 'FocusContainer',
                    tabIndex: -1,
                    onClick: this._handleBodyClick,

                    onMouseMove: this._handleTouchMove,
                    onTouchMove: this._handleTouchMove,

                    onMouseUp: this._handleTouchEnd,
                    onMouseLeave: this._handleTouchEnd,
                    onTouchEnd: this._handleTouchEnd,
                    onTouchCancel: this._handleTouchEnd,

                    onKeyDown: this._handleKeyDownPress,
                    onKeyUp: this._handleKeyUpPress
                }}
            >
                <CloseHandler {...{ getRefs: this._getRefs }} />
                <AccessStylesheet />
                <KeyManager {...{ getRefs: this._getRefs }} />
                <RootContainer
                    {...{
                        setLyricFocusElement: this.setLyricFocusElement,
                        setScoreFocusElement: this.setScoreFocusElement,
                        setWikiFocusElement: this.setWikiFocusElement

                    }}
                />
                <SliderTouchDispatcher {...{ getRefs: this._getRefs }} />
                <StopPropagationDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateFocusStore }
)(FocusContainer)
