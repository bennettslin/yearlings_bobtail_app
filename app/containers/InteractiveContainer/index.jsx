/**
 * Parent component that handles click, touch, and keyDown events.
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateToggleStore } from 'flux/toggle/action'

import RootContainer from '../RootContainer'
import CloseHandler from '../../handlers/CloseHandler'
import KeyHandler from 'handlers/KeyHandler'
import AccessStylesheet from '../../components/Access/Stylesheet'

import { getClientX } from 'helpers/domHelper'

const mapStateToProps = ({
    loadStore: { appMounted },
    responsiveStore: { isHiddenLyric },
    sliderStore: { isSliderTouched },
    toggleStore: { isLyricExpanded }
}) => ({
    appMounted,
    isHiddenLyric,
    isSliderTouched,
    isLyricExpanded
})

class InteractiveContainer extends PureComponent {

    static propTypes = {
        // Through Redux.
        appMounted: PropTypes.bool.isRequired,
        isHiddenLyric: PropTypes.bool.isRequired,
        isSliderTouched: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,

        // TODO: Get rid of these eventually.
        // From parent.
        determineVerseBars: PropTypes.func.isRequired,
        touchBodyMove: PropTypes.func.isRequired,
        touchBodyEnd: PropTypes.func.isRequired,
        selectAnnotation: PropTypes.func.isRequired,
        selectCarouselNav: PropTypes.func.isRequired,
        selectOverview: PropTypes.func.isRequired,
        selectTips: PropTypes.func.isRequired
    }

    state = {
        sliderMousedUp: false
    }

    componentDidMount() {
        // Focus lyric section when app is mounted.
        this.focusElementForAccess()
    }

    componentDidUpdate(prevProps) {
        const
            { isSliderTouched } = this.props,
            { isSliderTouched: wasSliderTouched } = prevProps

        // This prevents a click event from registering after mouseUp.
        if (!isSliderTouched && wasSliderTouched) {

            // Let click handler get called first, then reset state.
            setTimeout(this._resetSliderMousedUp, 0)
        }

        if (
            this.props.isHiddenLyric !==
                prevProps.isHiddenLyric ||
            this.props.isLyricExpanded !==
                prevProps.isLyricExpanded
        ) {
            // Determine whether to add or remove focus from lyric element.
            this.focusElementForAccess()
        }
    }

    _resetSliderMousedUp = () => {
        this.setState({
            sliderMousedUp: false
        })
    }

    _handleClick = (e) => {
        /**
         * Don't register the click event that happens after mouseUp if we're
         * lifting up from moving the slider.
         */
        if (!this.state.sliderMousedUp) {
            this.stopPropagation(e)

            this.closeSections({
                exemptLyric: true,

                // If overview is open when tips is open, leave overview open.
                exemptOverview: !this.props.selectedTipsIndex
            })

            // Return focus to lyric section so it can have scroll access.
            // FIXME: Blind users will use tab to change focus. Will they find this annoying?
            this.focusElementForAccess()
        }
    }

    _handleMove = (e) => {
        const clientX = getClientX(e)

        if (!isNaN(clientX)) {
            this.stopPropagation(e)
            this.props.touchBodyMove(clientX)
        }
    }

    _handleMouseUp = (e) => {
        e.preventDefault()
        this.stopPropagation(e)
        this.props.touchBodyEnd()

        /**
         * Prevent slider from locking up and not registering a touch move. Not
         * sure just yet if this really does the trick.
         */
        this.focusElementForAccess()

        if (this.props.isSliderTouched) {
            this.setState({
                sliderMousedUp: true
            })

        }
    }

    focusElementForAccess = () => {
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

    handleVerseBarWheel = (e) => {
        const { deltaY } = e.nativeEvent
        this.myLyricElement.scrollTop += deltaY

        this.props.determineVerseBars()
    }

    handleLyricWheel = (
        e,
        {
            timeoutDuration,
            setToManualScroll = false
        } = {}
    ) => {
        let hasRoomToScroll = false

        if (setToManualScroll) {
            // If triggered manually by keyboard, set to false.
            this.props.updateToggleStore({ isAutoScroll: false })
        }

        // Determine whether there is room to scroll.
        if (e) {
            const { deltaY = 0 } = e,
                { scrollTop } = this.myLyricElement

            if (deltaY > 0) {
                const {
                    scrollHeight, clientHeight
                } = this.myLyricElement

                if (scrollTop < scrollHeight - clientHeight) {
                    hasRoomToScroll = true
                }

            } else if (deltaY < 0) {
                if (scrollTop) {
                    hasRoomToScroll = true
                }
            }

            if (hasRoomToScroll) {

                // Select manual scroll only if wheel moved far enough.
                if (deltaY > 1 || deltaY < -1) {
                    this.props.updateToggleStore({ isAutoScroll: false })
                }

            } else {

                // If no room to scroll, don't bother to send event.
                e.preventDefault()
            }
        }

        // Determine verse bars if scrolled, or if triggered manually.
        if (hasRoomToScroll || !e) {
            this.props.determineVerseBars(timeoutDuration)
        }
    }

    stopPropagation = (e) => {
        if (e && e.stopPropagation) {
            e.stopPropagation()

            const { type } = e

            // Turn access off if not from a keyboard event.
            if (type === 'click' || type === 'mousedown') {
                this.props.updateToggleStore({ isAccessOn: false })
            }
        }
    }

    setLyricRef = (node) => {
        this.myLyricElement = node

        // Add or remove focus.
        this.focusElementForAccess()
    }

    handleKeyDownPress = e => this.keyHandler.handleKeyDownPress(e)
    handleKeyUpPress = e => this.keyHandler.handleKeyUpPress(e)
    _setRootElement = node => this.myRootElement = node
    setKeyHandler = node => this.keyHandler = node

    setCloseSections = (closeSections) => {
        this.closeSections = closeSections
    }

    render() {
        const {
                appMounted,
                eventHandlers,
                selectAnnotation,
                selectCarouselNav,
                selectOverview,
                selectTips
            } = this.props,

            newEventHandlers = {
                ...eventHandlers,
                setLyricRef: this.setLyricRef,
                stopPropagation: this.stopPropagation,
                handleLyricWheel: this.handleLyricWheel,
                handleVerseBarWheel: this.handleVerseBarWheel
            }

        return appMounted && (
            <div
                ref={this._setRootElement}
                {...{
                    className: 'InteractiveContainer',
                    onClick: this._handleClick,
                    onTouchStart: this._handleClick,
                    onMouseMove: this._handleMove,
                    onTouchMove: this._handleMove,
                    onMouseUp: this._handleMouseUp,
                    onMouseLeave: this._handleMouseUp,
                    onTouchEnd: this._handleMouseUp,
                    onTouchCancel: this._handleMouseUp,
                    onKeyDown: this.handleKeyDownPress,
                    onKeyUp: this.handleKeyUpPress,
                    tabIndex: -1
                }}
            >
                <AccessStylesheet />
                <KeyHandler
                    {...{
                        // TODO: Eventually get rid of eventHandlers object.
                        eventHandlers: newEventHandlers,
                        setRef: this.setKeyHandler
                    }}
                />
                <CloseHandler
                    {...{
                        // TODO: Eventually listener should get all these through Redux.
                        selectAnnotation,
                        selectCarouselNav,
                        selectOverview,
                        selectTips,
                        getCloseSections: this.setCloseSections
                    }}
                />
                <RootContainer
                    {...{
                        // TODO: Eventually get rid of eventHandlers object.
                        eventHandlers: newEventHandlers
                    }}
                />
            </div>
        )
    }
}

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(InteractiveContainer)
