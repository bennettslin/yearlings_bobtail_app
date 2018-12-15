// Component to touch change played time and verse.

import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { CSSTransition } from 'react-transition-group'
import SliderTouchDispatcher from '../../dispatchers/SliderTouchDispatcher'
import SliderScenes from './Scenes'
import SliderStanzas from './Stanzas'
import SliderTimes from './Times'
import SliderAccess from './Access'

import { populateRefs } from 'helpers/ref'

const mapStateToProps = ({
    renderStore: { canLyricRender }
}) => ({
    canLyricRender
})

class Slider extends PureComponent {

    static propTypes = {
        // Through Redux.
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
        const { canLyricRender } = this.props

        return (
            <___>
                <CSSTransition
                    {...{
                        in: canLyricRender,
                        timeout: {
                            enter: 0,
                            exit: 200
                        },
                        classNames: {
                            enterDone: 'Slider__visible'
                        }
                    }}
                >
                    <div
                        {...{
                            ref: this._getSliderElement,
                            className: 'Slider',
                            onMouseDown: this._handleTouchDown,
                            onTouchStart: this._handleTouchDown
                        }}
                    >
                        <SliderTimes />
                        <SliderStanzas />
                        <SliderScenes />
                        <SliderAccess />
                    </div>
                </CSSTransition>
                <SliderTouchDispatcher {...{ getRefs: this._getRefs }} />
            </___>
        )
    }
}

export default connect(mapStateToProps)(Slider)
