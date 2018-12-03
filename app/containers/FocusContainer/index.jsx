/**
 * Parent component that handles click, touch, and keyDown events.
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CloseHandler from '../../handlers/CloseHandler'
import SliderTouchDispatcher from '../../dispatchers/SliderTouchDispatcher'
import StopPropagationDispatcher from '../../dispatchers/StopPropagationDispatcher'
import RootContainer from '../RootContainer'
import KeyManager from '../../managers/KeyManager'
import AccessStylesheet from '../../components/Access/Stylesheet'

const mapStateToProps = ({
    loadStore: { appMounted },
    responsiveStore: { isHiddenLyric },
    toggleStore: { isLyricExpanded }
}) => ({
    appMounted,
    isHiddenLyric,
    isLyricExpanded
})

class FocusContainer extends PureComponent {

    static propTypes = {
        // Through Redux.
        appMounted: PropTypes.bool.isRequired,
        isHiddenLyric: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired
    }

    componentDidMount() {
        // Focus lyric section when app is mounted.
        this._focusElementForAccess()
    }

    componentDidUpdate(prevProps) {
        this._checkLyricUnshown(prevProps)
    }

    _checkLyricUnshown(prevProps) {
        const {
                isHiddenLyric,
                isLyricExpanded
            } = this.props,
            {
                isHiddenLyric: wasHiddenLyric,
                isLyricExpanded: wasLyricExpanded
            } = prevProps

        if (
            isHiddenLyric !== wasHiddenLyric ||
            isLyricExpanded !== wasLyricExpanded
        ) {
            // Determine whether to add or remove focus from lyric element.
            this._focusElementForAccess()
        }
    }

    _handleTouchMove = (e) => {
        this.dispatchTouchMove(e)
    }

    _handleTouchEnd = (e) => {
        // This method handles both body clicks and slider touch ends.

        e.preventDefault()
        this.dispatchStopPropagation(e)

        this.dispatchTouchEnd()
        this.closeForBodyClick()
        this._focusElementForAccess()
    }

    _focusElementForAccess = () => {
        const {
                isHiddenLyric,
                isLyricExpanded
            } = this.props,

            doFocusLyricElement =
                this.lyricElement &&
                    (
                        !isHiddenLyric ||
                        isLyricExpanded
                    )

        let focusedElement = doFocusLyricElement ?
            this.lyricElement :
            this.rootElement

        if (focusedElement) {
            logger.warn(`Focus: ${doFocusLyricElement ? 'Lyric' : 'Root'}`)
            focusedElement.focus()
        }
    }

    setLyricFocusElement = (node) => {
        this.lyricElement = node

        // Add or remove focus.
        this._focusElementForAccess()
    }

    _setRootElement = node => this.rootElement = node
    _handleKeyDownPress = e => this.handleKeyDownPress(e)
    _handleKeyUpPress = e => this.handleKeyUpPress(e)

    render() {
        const { appMounted } = this.props

        return appMounted && (
            <div
                ref={this._setRootElement}
                {...{
                    className: 'FocusContainer',
                    onMouseMove: this._handleTouchMove,
                    onTouchMove: this._handleTouchMove,
                    onMouseUp: this._handleTouchEnd,
                    onMouseLeave: this._handleTouchEnd,
                    onTouchEnd: this._handleTouchEnd,
                    onTouchCancel: this._handleTouchEnd,
                    onKeyDown: this._handleKeyDownPress,
                    onKeyUp: this._handleKeyUpPress,
                    tabIndex: -1
                }}
            >
                <CloseHandler {...{ parentThis: this }} />
                <AccessStylesheet />
                <KeyManager {...{ parentThis: this }} />
                <RootContainer
                    {...{ setLyricFocusElement: this.setLyricFocusElement }}
                />
                <SliderTouchDispatcher {...{ parentThis: this }} />
                <StopPropagationDispatcher {...{ parentThis: this }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(FocusContainer)
