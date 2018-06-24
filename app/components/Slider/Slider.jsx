// Component to manually change played time and verse.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import SliderScenes from './SliderScenes'
import SliderStanzas from './Stanzas/SliderStanzas'
import SliderTimes from './Times/SliderTimes'
import SliderAccess from './SliderAccess'

const mapStateToProps = ({
    canSliderRender
}) => ({
    canSliderRender
})

class Slider extends Component {

    static propTypes = {
        // Through Redux.
        canSliderRender: PropTypes.bool.isRequired,

        // From parent.
        handleSliderTouchBegin: PropTypes.func.isRequired,
        sliderDidRender: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._handleTouchDown = this._handleTouchDown.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (this.props.canSliderRender && !prevProps.canSliderRender) {
            console.warn('Slider rendered.')

            setTimeout(
                this.props.sliderDidRender, 0
            )
        }
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSliderRender !== this.props.canSliderRender
    }

    _handleTouchDown(e) {
        this.props.handleSliderTouchBegin(e, this.mySlider)
    }

    render() {

        const { canSliderRender } = this.props

        return canSliderRender ? (
            <div
                className={cx(
                    'Slider'
                )}
                ref={(node) => (this.mySlider = node)}
                onMouseDown={this._handleTouchDown}
                onTouchStart={this._handleTouchDown}
            >
                <SliderTimes />
                <SliderStanzas />
                <SliderScenes />
                <SliderAccess />
            </div>
        ) : null
    }
}

export default connect(mapStateToProps)(Slider)
