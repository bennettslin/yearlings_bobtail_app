// Static field that shows the song scenes in the slider. Probably admin only.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getPropsAreShallowEqual } from '../../../helpers/generalHelper'

const mapStateToProps = ({
    canSliderRender
}) => ({
    canSliderRender
})

class SliderVerse extends Component {

    static propTypes = {
        // From Redux.
        canSliderRender: PropTypes.bool.isRequired,

        verseIndex: PropTypes.number.isRequired,
        relativeStartTime: PropTypes.number.isRequired,
        relativeTotalTime: PropTypes.number.isRequired,

        children: PropTypes.any
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSliderRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    render() {

        const {
                verseIndex,
                relativeStartTime,
                relativeTotalTime,
                children
            } = this.props,

            verseWidth =
                (relativeTotalTime - relativeStartTime)
                / relativeTotalTime * 100,

            verseStyle = {
                width: `${verseWidth}%`
            }

        return (
            <div
                key={verseIndex}
                className={cx(
                    'SliderVerse',
                    'Slider__dynamicBar'
                )}
                style={verseStyle}
            >
                {children}
            </div>
        )
    }
}

export default connect(mapStateToProps)(SliderVerse)
