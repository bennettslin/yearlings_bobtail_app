// Static field that shows the song scenes in the slider. Probably admin only.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import VerseController from '../../Verse/VerseController/VerseController'

import { getPropsAreShallowEqual } from '../../../helpers/generalHelper'

const mapStateToProps = ({
    canSliderRender
}) => ({
    canSliderRender
})

class SliderVerse extends Component {

    static propTypes = {
        // Through Redux.
        canSliderRender: PropTypes.bool.isRequired,

        // From parent.
        verseIndex: PropTypes.number.isRequired,

        relativeStartTime: PropTypes.number.isRequired,
        relativeTotalTime: PropTypes.number.isRequired,
        startTime: PropTypes.number.isRequired,
        endTime: PropTypes.number.isRequired,

        fullCursorRatio: PropTypes.number.isRequired
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
                startTime,
                endTime,
                fullCursorRatio
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
                    'Slider__dynamicBar',

                    'verseColour__hoverParent'
                )}
                style={verseStyle}
            >

                <VerseController
                    inSliderVerse
                    {...{
                        verseIndex,
                        startTime,
                        endTime,
                        fullCursorRatio
                    }}
                />

            </div>
        )
    }
}

export default connect(mapStateToProps)(SliderVerse)
