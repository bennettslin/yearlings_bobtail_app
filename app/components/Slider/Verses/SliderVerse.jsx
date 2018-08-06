// Static field that shows the song scenes in the slider. Probably admin only.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'

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
        logicSelectors: PropTypes.string.isRequired,
        verseIndex: PropTypes.number.isRequired,
        relativeStartTime: PropTypes.number.isRequired,
        verseDuration: PropTypes.number.isRequired,
        stanzaDuration: PropTypes.number.isRequired,
        children: PropTypes.any.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSliderRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    render() {

        const {
                logicSelectors,
                relativeStartTime,
                verseDuration,
                stanzaDuration,
                verseIndex,
                children
            } = this.props,

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
                    logicSelectors,
                    'SliderVerse',

                    // Just for debug purposes.
                    `SliderVerse__${verseIndex}`,

                    'verseColour__hoverParent',
                    'absoluteFullContainer'
                )}
                style={verseStyle}
            >
                {children}
            </div>
        )
    }
}

export default connect(mapStateToProps)(SliderVerse)
