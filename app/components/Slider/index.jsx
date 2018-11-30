// Component to manually change played time and verse.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateRenderStore } from 'flux/render/action'

import SliderTouchDispatcher from '../../dispatchers/SliderTouchDispatcher'
import SliderScenes from './Scenes'
import SliderStanzas from './Stanzas'
import SliderTimes from './Times'
import SliderAccess from './Access'

const mapStateToProps = ({
    renderStore: { canVerseRender }
}) => ({
    canVerseRender
})

class Slider extends PureComponent {

    static propTypes = {
        // Through Redux.
        canVerseRender: PropTypes.bool.isRequired,
        updateRenderStore: PropTypes.func.isRequired
    }

    state = {
        isShown: false,
        didRenderTimeoutId: '',
        waitForShowTimeoutId: ''
    }

    componentDidUpdate(prevProps) {
        const { canVerseRender } = this.props,
            { canVerseRender: couldRender } = prevProps

        if (canVerseRender && !couldRender) {
            logger.warn('Slider rendered.')

            clearTimeout(this.state.didRenderTimeoutId)
            clearTimeout(this.state.waitForShowTimeoutId)

            const
                // Wait for parent transition before continuing render sequence.
                didRenderTimeoutId = setTimeout(
                    this._verseDidRender, 100
                ),
                // Set timeout to prevent children transitions before render.
                waitForShowTimeoutId = setTimeout(
                    this._waitForShowBeforeRender, 50
                )

            this.setState({
                didRenderTimeoutId,
                waitForShowTimeoutId
            })

        } else if (couldRender && !canVerseRender) {

            this.setState({
                isShown: false
            })
        }
    }

    _verseDidRender = () => {
        this.props.updateRenderStore({ didVerseRender: true })
    }

    _waitForShowBeforeRender = () => {
        this.setState({
            isShown: true
        })
    }

    _handleTouchDown = (e) => {
        this.dispatchTouchBegin(e, this.sliderElement)
    }

    _getSliderElement = (node) => {
        this.sliderElement = node
    }

    render() {
        const { canVerseRender } = this.props,
            { isShown } = this.state

        return (
            <div
                {...{
                    ref: this._getSliderElement,
                    className: cx(
                        'Slider',
                        {
                            'parent__shown': canVerseRender && isShown
                        }
                    ),
                    onMouseDown: this._handleTouchDown,
                    onTouchStart: this._handleTouchDown
                }}
            >
                <SliderTimes />
                <SliderStanzas />
                <SliderScenes />
                <SliderAccess />
                <SliderTouchDispatcher {...{ getDispatch: this }} />
            </div>
        )
    }
}

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateRenderStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(Slider)
