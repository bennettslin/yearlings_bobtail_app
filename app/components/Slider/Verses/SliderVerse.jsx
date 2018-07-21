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
        verseDuration: PropTypes.number.isRequired,
        stanzaDuration: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSliderRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    render() {

        const {
                /* eslint-disable no-unused-vars */
                canSliderRender,
                dispatch,
                /* eslint-enable no-unused-vars */

                relativeStartTime,
                verseDuration,
                stanzaDuration,

                ...other
            } = this.props,

            {
                verseIndex
            } = other,

            /**
             * Round left down, and width up, to ensure that there are no gaps
             * between slider verses.
             */
            verseLeft = (
                relativeStartTime / stanzaDuration * 100
            ),

            verseWidth = Math.ceil(
                verseDuration / stanzaDuration * 100
            ),

            verseStyle = {
                left: `${verseLeft}%`,
                width: `${verseWidth}%`
            }

        return (
            <div
                key={verseIndex}
                className={cx(

                    // "Child component verse index."
                    `ChV${verseIndex}`,
                    'ChV',

                    'SliderVerse',

                    // Just for debug purposes.
                    `SliderVerse__${verseIndex}`,

                    'verseColour__hoverParent',
                    'absoluteFullContainer'
                )}
                style={verseStyle}
            >

                <VerseController {...other}
                    inSliderVerse
                    {...{
                        verseIndex
                    }}
                />

            </div>
        )
    }
}

export default connect(mapStateToProps)(SliderVerse)
