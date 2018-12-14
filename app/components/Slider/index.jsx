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
    renderStore: { didLyricRender }
}) => ({
    didLyricRender
})

class Slider extends PureComponent {

    static propTypes = {
        // Through Redux.
        didLyricRender: PropTypes.bool.isRequired
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
        const { didLyricRender } = this.props

        return (
            <div
                {...{
                    ref: this._getSliderElement,
                    className: cx(
                        'Slider',
                        {
                            'parent__shown': didLyricRender
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
                <SliderTouchDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Slider)
