// Parent component that handles click, touch, and keyDown events.
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateFocusStore } from '../../redux/focus/action'

import CloseHandler from '../../managers/Close'
import SliderTouchDispatcher from '../../dispatchers/SliderTouchDispatcher'
import StopPropagationDispatcher from '../../dispatchers/StopPropagation'

import RootContainer from '../Root'
import KeyManager from '../../managers/Key'

import { isEmailFocused } from '../../utils/email'
import { populateRefs } from '../../helpers/ref'

const mapStateToProps = ({
    mountStore: { canSliderMount },
    responsiveStore: { isHeightlessLyric },
    toggleStore: { isLyricExpanded },
    focusStore: { queuedFocus }
}) => {
    return {
        canSliderMount,
        isHeightlessLyric,
        isLyricExpanded,
        queuedFocus
    }
}

class FocusContainer extends PureComponent {
    static propTypes = {
        // Through Redux.
        canSliderMount: PropTypes.bool.isRequired,
        isHeightlessLyric: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        queuedFocus: PropTypes.bool.isRequired,
        updateFocusStore: PropTypes.func.isRequired
    }

    state = { isSliderTouchEnding: false }

    componentDidMount() {
        logMount('FocusContainer')

        this.focusElement = React.createRef()

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

        if (isEmailFocused()) {
            return false
        }

        if (
            (
                !isHeightlessLyric || isLyricExpanded
            ) &&
            this.lyricFocusElement
        ) {
            focusedElement = this.lyricFocusElement
            focusedElementString = 'lyric'

        } else {
            focusedElement = this.focusElement.current
            focusedElementString = 'root'
        }

        if (focusedElement) {
            logFocus(`Focus on ${focusedElementString}.`)
            focusedElement.focus()
        }
    }

    _handleTouchMove = e => {
        this.dispatchTouchMove(e)
    }

    _handleTouchEnd = e => {
        const isSliderTouchEnding = this.dispatchTouchEnd()
        if (isSliderTouchEnding) {
            logEvent({ e, componentName: 'FocusContainer' })
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

    _handleBodyClick = e => {
        if (isEmailFocused()) {
            return false
        }

        logEvent({ e, componentName: 'FocusContainer' })

        this.stopPropagation(e)

        if (!this.state.isSliderTouchEnding) {
            this.closeForBodyClick()
        }
    }

    setLyricFocusElement = node => {
        this.lyricFocusElement = node
        this._focusElementForAccess()
    }

    _handleKeyDownPress = e => this.handleKeyDownPress(e)
    _handleKeyUpPress = e => this.handleKeyUpPress(e)

    _getRefs = payload => {
        populateRefs(this, payload)
    }

    getStopPropagation = dispatch => {
        this.stopPropagation = dispatch
    }

    render() {
        const { canSliderMount } = this.props

        return (
            <div
                {...{
                    ref: this.focusElement,
                    className: 'FocusContainer',
                    tabIndex: -1,
                    onClick: this._handleBodyClick,

                    onKeyDown: this._handleKeyDownPress,
                    onKeyUp: this._handleKeyUpPress
                }}
                {...canSliderMount && {
                    onMouseMove: this._handleTouchMove,
                    onTouchMove: this._handleTouchMove,

                    onMouseUp: this._handleTouchEnd,
                    onMouseLeave: this._handleTouchEnd,
                    onTouchEnd: this._handleTouchEnd,
                    onTouchCancel: this._handleTouchEnd
                }}
            >
                <CloseHandler {...{ getRefs: this._getRefs }} />
                <RootContainer
                    {...{ setLyricFocusElement: this.setLyricFocusElement }}
                />
                {canSliderMount && (
                    <SliderTouchDispatcher {...{ getRefs: this._getRefs }} />
                )}
                <StopPropagationDispatcher {...{ ref: this.getStopPropagation }} />
                <KeyManager {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateFocusStore }
)(FocusContainer)
