// Component to manually change played time and verse.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import SliderScenes from './SliderScenes'
import SliderStanzas from './Stanzas/SliderStanzas'
import SliderTimes from './Times/SliderTimes'
import SliderAccess from './SliderAccess'

// import { getPropsAreShallowEqual } from '../../helpers/generalHelper'

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

        this.state = {
            // This prevents unnecessary transitions before slider is shown.
            isSliderShown: false
        }

        this._handleTouchDown = this._handleTouchDown.bind(this)
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return (
    //         nextProps.canSliderRender && !(
    //             getPropsAreShallowEqual({
    //                 props: this.props,
    //                 nextProps
    //             }) &&
    //             getPropsAreShallowEqual({
    //                 props: this.state,
    //                 nextProps: nextState
    //             })
    //         )
    //     )
    // }

    componentDidUpdate(prevProps) {
        const { canSliderRender } = this.props,
            { canSliderRender: couldSliderRender } = prevProps

        if (canSliderRender && !couldSliderRender) {
            console.warn('Slider rendered.')

            setTimeout(
                this.props.sliderDidRender, 0
            )

            this.setState({
                isSliderShown: true
            })

        } else if (couldSliderRender && !canSliderRender) {

            this.setState({
                isSliderShown: false
            })
        }
    }

    _handleTouchDown(e) {
        this.props.handleSliderTouchBegin(e, this.mySlider)
    }

    render() {
        const { canSliderRender } = this.props,
            { isSliderShown } = this.state

        return (
            <div
                className={cx(
                    'Slider',
                    {
                        'Slider__isShown': canSliderRender && isSliderShown
                    }
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
        )
    }
}

export default connect(mapStateToProps)(Slider)
