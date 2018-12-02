/**
 * Parent component that handles click, touch, and keyDown events.
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateEventStore } from 'flux/event/action'
import { updateSliderStore } from 'flux/slider/action'

import SliderTouchDispatcher from '../../dispatchers/SliderTouchDispatcher'
import StopPropagationDispatcher from '../../dispatchers/StopPropagationDispatcher'
import RootContainer from '../RootContainer'
import KeyManager from '../../managers/KeyManager'
import AccessStylesheet from '../../components/Access/Stylesheet'

const mapStateToProps = ({
    loadStore: { appMounted },
    responsiveStore: { isHiddenLyric },
    sliderStore: {
        isSliderTouched,
        didSliderJustMouseUp
    },
    toggleStore: { isLyricExpanded }
}) => ({
    appMounted,
    isHiddenLyric,
    isSliderTouched,
    didSliderJustMouseUp,
    isLyricExpanded
})

class InteractiveContainer extends PureComponent {

    static propTypes = {
        // Through Redux.
        appMounted: PropTypes.bool.isRequired,
        isHiddenLyric: PropTypes.bool.isRequired,
        isSliderTouched: PropTypes.bool.isRequired,
        didSliderJustMouseUp: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        updateEventStore: PropTypes.func.isRequired,
        updateSliderStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        // Focus lyric section when app is mounted.
        this._focusElementForAccess()
    }

    componentDidUpdate(prevProps) {
        this._checkLyricUnshown(prevProps)
    }

    _checkLyricUnshown(prevProps) {
        const
            {
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

    _handleBodyClick = (e) => {
        this.dispatchStopPropagation(e)

        /**
         * Don't register the click event that happens after mouseUp if we're
         * lifting up from moving the slider.
         */
        if (!this.props.didSliderJustMouseUp) {
            this.props.updateEventStore({ bodyClicked: true })

            // Return focus to lyric section so it can have scroll access.
            // FIXME: Blind users will use tab to change focus. Will they find this annoying?
            this._focusElementForAccess()
        }
    }

    _handleTouchMove = (e) => {
        this.dispatchTouchMove(e)
    }

    _handleTouchEnd = (e) => {
        e.preventDefault()

        this.dispatchTouchEnd()

        /**
         * Prevent slider from locking up and not registering a touch move. Not
         * sure just yet if this really does the trick.
         */
        this._focusElementForAccess()

        if (this.props.isSliderTouched) {
            this.props.updateSliderStore({ didSliderJustMouseUp: true })
        }
    }

    _focusElementForAccess = () => {
        const {
                isHiddenLyric,
                isLyricExpanded
            } = this.props,

            doFocusLyricElement =
                this.myLyricElement &&
                    (
                        !isHiddenLyric ||
                        isLyricExpanded
                    )

        let focusedElement = doFocusLyricElement ?
            this.myLyricElement :
            this.myRootElement

        if (focusedElement) {
            logger.warn(`Focus: ${doFocusLyricElement ? 'Lyric' : 'Root'}`)
            focusedElement.focus()
        }
    }

    setLyricRef = (node) => {
        this.myLyricElement = node

        // Add or remove focus.
        this._focusElementForAccess()
    }

    handleKeyDownPress = e => this.keyHandler.handleKeyDownPress(e)
    handleKeyUpPress = e => this.keyHandler.handleKeyUpPress(e)
    _setRootElement = node => this.myRootElement = node
    setKeyHandler = node => this.keyHandler = node

    render() {
        const {
                appMounted,
                eventHandlers,
                selectSong
            } = this.props,

            newEventHandlers = {
                ...eventHandlers,
                setLyricRef: this.setLyricRef
            }

        return appMounted && (
            <div
                ref={this._setRootElement}
                {...{
                    className: 'InteractiveContainer',
                    onClick: this._handleBodyClick,
                    onTouchStart: this._handleBodyClick,
                    onMouseMove: this._handleTouchMove,
                    onTouchMove: this._handleTouchMove,
                    onMouseUp: this._handleTouchEnd,
                    onMouseLeave: this._handleTouchEnd,
                    onTouchEnd: this._handleTouchEnd,
                    onTouchCancel: this._handleTouchEnd,
                    onKeyDown: this.handleKeyDownPress,
                    onKeyUp: this.handleKeyUpPress,
                    tabIndex: -1
                }}
            >
                <AccessStylesheet />
                <KeyManager
                    {...{
                        // TODO: Eventually get rid of eventHandlers object.
                        eventHandlers: newEventHandlers,
                        setRef: this.setKeyHandler,
                        selectSong
                    }}
                />
                <RootContainer
                    {...{
                        // TODO: Eventually get rid of eventHandlers object.
                        eventHandlers: newEventHandlers
                    }}
                />
                <SliderTouchDispatcher {...{ parentThis: this }} />
                <StopPropagationDispatcher {...{ parentThis: this }} />
            </div>
        )
    }
}

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateEventStore,
        updateSliderStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(InteractiveContainer)
