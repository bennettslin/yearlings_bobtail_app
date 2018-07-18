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
        relativeEndTime: PropTypes.number.isRequired,
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
                relativeEndTime,
                stanzaDuration,

                ...other
            } = this.props,

            { verseIndex } = other,

            verseLeft =
                relativeStartTime / stanzaDuration * 100,

            verseWidth =
                (relativeEndTime - relativeStartTime)
                / stanzaDuration * 100,

            verseStyle = {
                left: `${verseLeft}%`,
                width: `${verseWidth}%`
            }

        return (
            <div
                key={verseIndex}
                className={cx(
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
