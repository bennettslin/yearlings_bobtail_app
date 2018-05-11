// Component to manually change played time and verse.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import SliderScenes from './SliderScenes'
import SliderStanzas from './Stanzas/SliderStanzas'
import SliderTimes from './Times/SliderTimes'
import SliderAccess from './SliderAccess'

import { getComponentShouldUpdate } from '../../helpers/generalHelper'

const mapStateToProps = ({
    isHeavyRenderReady
}) => ({
    isHeavyRenderReady
})

/*************
 * CONTAINER *
 *************/

class Slider extends Component {

    static propTypes = {
        // From parent.
        handleSliderTouchBegin: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            overrideTransitions: false
        }

        this._handleTouchDown = this._handleTouchDown.bind(this)
        this._handleTransition = this._handleTransition.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'isHeavyRenderReady'
                ]
            })

        return componentShouldUpdate
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.isHeavyRenderReady && !nextProps.isHeavyRenderReady) {
            this.setState({
                overrideTransitions: true
            })
        }
    }

    _handleTransition(e) {
        if (e.propertyName === 'opacity') {
            this.setState({
                overrideTransitions: false
            })
        }
    }

    _handleTouchDown(e) {
        this.props.handleSliderTouchBegin(e, this.mySlider)
    }

    render() {
        const { isHeavyRenderReady } = this.props,
            { overrideTransitions } = this.state

        return (
            <div
                className={cx(
                    'Slider',
                    isHeavyRenderReady && 'renderReady',
                    { 'overrideTransitions': overrideTransitions }
                )}
                ref={(node) => (this.mySlider = node)}
                onMouseDown={this._handleTouchDown}
                onTouchStart={this._handleTouchDown}
                onTransitionEnd={this._handleTransition}
            >
                <SliderTimes/>
                <SliderStanzas />
                <SliderScenes />
                <SliderAccess />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Slider)
