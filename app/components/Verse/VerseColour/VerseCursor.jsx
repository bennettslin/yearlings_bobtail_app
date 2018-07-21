// Text displays to indicate time spent and remaining.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getVerseDurationForVerseIndex } from '../../../helpers/dataHelper'
import { getPropsAreShallowEqual } from '../../../helpers/generalHelper'

const mapStateToProps = ({
    canLyricRender,
    renderableStore,
    sliderStore,
}) => ({
    canLyricRender,
    renderableSongIndex: renderableStore.renderableSongIndex,
    renderableVerseIndex: renderableStore.renderableVerseIndex,
    sliderVerseIndex: sliderStore.sliderVerseIndex
})

class VerseCursor extends Component {

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,
        renderableVerseIndex: PropTypes.number.isRequired,
        sliderVerseIndex: PropTypes.number.isRequired,

        // From parent.
        verseIndex: PropTypes.number.isRequired,
        inVerseBar: PropTypes.bool,
        inLyricVerse: PropTypes.bool,
        inSliderVerse: PropTypes.bool
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canLyricRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    render() {
        const {
                renderableSongIndex,
                sliderVerseIndex,
                renderableVerseIndex,
                verseIndex,
                inVerseBar,
                inLyricVerse,
                inSliderVerse
            } = this.props,

            verseDuration = getVerseDurationForVerseIndex(
                renderableSongIndex,
                verseIndex
            ),

            isHorizontalTransition = inSliderVerse,
            isVerticalTransition = inVerseBar || inLyricVerse,

            transitionedStyle =
            isHorizontalTransition ?
                'left' :
                'top',

            cursorIndex = sliderVerseIndex > -1 ?
                sliderVerseIndex :
                renderableVerseIndex,

            isOnCursor = inVerseBar || verseIndex === cursorIndex

        return (
            <div
                className={cx(
                    'VerseCursor',
                    isOnCursor && `VerseCursor__onCursor`,

                    inVerseBar && 'VerseCursor__inVerseBar',

                    isHorizontalTransition &&
                        'VerseCursor__horizontalTransition',
                    isVerticalTransition &&
                        'VerseCursor__verticalTransition',

                    'absoluteFullContainer'
                )}
                {
                    ...isOnCursor && {
                        style: {
                            transition:
                                `${transitionedStyle} ${verseDuration}s linear`
                        }
                    }
                }
            />
        )
    }
}

export default connect(mapStateToProps)(VerseCursor)
