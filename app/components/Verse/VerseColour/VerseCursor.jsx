// Text displays to indicate time spent and remaining.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getVerseDurationForVerseIndex } from '../../../helpers/dataHelper'
import { getPropsAreShallowEqual } from '../../../helpers/generalHelper'

const mapStateToProps = ({
    canLyricRender,
    isPlaying,
    sliderStore,
    renderableStore
}) => ({
    canLyricRender,
    isPlaying,
    sliderVerseIndex: sliderStore.sliderVerseIndex,
    renderableSongIndex: renderableStore.renderableSongIndex,
    renderableVerseIndex: renderableStore.renderableVerseIndex
})

class VerseCursor extends Component {

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,
        isPlaying: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,
        renderableVerseIndex: PropTypes.number.isRequired,
        sliderVerseIndex: PropTypes.number.isRequired,

        // From parent.
        verseIndex: PropTypes.number.isRequired,
        inVerseBar: PropTypes.bool,
        inLyric: PropTypes.bool,
        inSlider: PropTypes.bool
    }

    shouldComponentUpdate(nextProps) {
        const {
                isPlaying
            } = this.props,
            {
                isPlaying: willBePlaying
            } = nextProps

        if (
            // No point in updating if it remains paused.
            !isPlaying &&
            !willBePlaying
        ) {
            return false
        }

        const
            isOnCursor = this.getIsOnCursor(this.props),
            willBeOnCursor = this.getIsOnCursor(nextProps)

        if (
            // No point in updating if it's not the cursored verse.
            !isOnCursor &&
            !willBeOnCursor
        ) {
            return false
        }

        return nextProps.canLyricRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    getIsOnCursor(props) {
        const {
                inVerseBar,
                verseIndex,
                renderableVerseIndex,
                sliderVerseIndex
            } = props,

            cursorIndex = sliderVerseIndex > -1 ?
            sliderVerseIndex :
            renderableVerseIndex,

            isOnCursor = inVerseBar || verseIndex === cursorIndex

        return isOnCursor
    }

    render() {
        const {
                renderableSongIndex,
                verseIndex,
                inVerseBar,
                inLyric,
                inSlider
            } = this.props,

            verseDuration = getVerseDurationForVerseIndex(
                renderableSongIndex,
                verseIndex
            ),

            isHorizontalTransition = inSlider,
            isVerticalTransition = inVerseBar || inLyric,

            transitionedStyle =
            isHorizontalTransition ?
                'left' :
                'top',

            isOnCursor = this.getIsOnCursor(this.props)

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
