// Static field that shows the song scenes in the slider. Probably admin only.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getCursorStatusClassName } from '../../../helpers/formatHelper'
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

        // From VerseController.
        isOnCursor: PropTypes.bool.isRequired,
        isAfterCursor: PropTypes.bool.isRequired,
        isInteractivated: PropTypes.bool.isRequired,

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

    componentDidUpdate() {
        if (this.props.verseIndex === 1) {
            console.warn('SliderVerse rendered.')
        }
    }

    render() {

        const { isOnCursor,
                isAfterCursor,
                isInteractivated,
                verseIndex,
                relativeStartTime,
                relativeTotalTime,
                children } = this.props

        const verseWidth =
                (relativeTotalTime - relativeStartTime) / relativeTotalTime * 100,

            verseStyle = {
                width: `${verseWidth}%`
            },

            isOdd = verseIndex % 2,

            cursorStatusClassName =
                getCursorStatusClassName({
                    isOnCursor,
                    isAfterCursor
                })

        return (
            <div
                key={verseIndex}
                className={cx(
                    'SliderVerse',
                    'Slider__dynamicBar',

                    isOdd ?
                        'verse__odd' :
                        'verse__even',

                    /**
                     * Unlike Verse, SliderVerse is always interactable, so we
                     * will manually add this class.
                     */
                    'verse__interactable',

                    // onCursor, beforeCursor, or afterCursor.
                    `verse__${cursorStatusClassName}`,

                    { 'verse__interactivated': isInteractivated }
                )}
                style={verseStyle}
            >
                {children}
            </div>
        )
    }
}

export default connect(mapStateToProps)(SliderVerse)
