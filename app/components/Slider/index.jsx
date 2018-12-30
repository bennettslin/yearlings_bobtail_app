// Component to touch change played time and verse.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import SliderTouchDispatcher from '../../dispatchers/SliderTouchDispatcher'
import SliderScenes from './Scenes'
import SliderStanzas from './Stanzas'
import SliderTimes from './Times'
import SliderAccess from './Access'

import { populateRefs } from 'helpers/ref'

const mapStateToProps = ({
    loadStore: { appMounted },
    renderedStore: { canLyricRender }
}) => ({
    appMounted,
    canLyricRender
})

class Slider extends PureComponent {

    static propTypes = {
        // Through Redux.
        appMounted: PropTypes.bool.isRequired,
        canLyricRender: PropTypes.bool.isRequired
    }

    _handleTouchDown = (e) => {
        this.dispatchTouchBegin(e, this.sliderElement)
    }

    _getSliderElement = (node) => {
        this.sliderElement = node
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
            appMounted,
            canLyricRender
        } = this.props

        return appMounted && (
            <div
                {...{
                    ref: this._getSliderElement,
                    className: cx(
                        'Slider',
                        canLyricRender && 'Slider__visible'
                    ),
                    onMouseDown: this._handleTouchDown,
                    onTouchStart: this._handleTouchDown
                }}
            >
                <SliderTimes />
                <SliderStanzas />
                <SliderScenes />
                <SliderAccess />
                <SliderTouchDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Slider)
