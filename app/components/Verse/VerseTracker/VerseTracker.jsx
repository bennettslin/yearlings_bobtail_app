// Component to show audio progress in verse.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getVerseDurationForVerseIndex } from '../../../helpers/dataHelper'
import { getPropsAreShallowEqual } from '../../../helpers/generalHelper'

const mapStateToProps = ({
    canLyricRender,
    isPlaying,
    renderableStore
}) => ({
    canLyricRender,
    isPlaying,
    renderableSongIndex: renderableStore.renderableSongIndex,
    renderableVerseIndex: renderableStore.renderableVerseIndex
})

class VerseTracker extends Component {

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,
        isPlaying: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,
        renderableVerseIndex: PropTypes.number.isRequired,

        // From parent.
        verseIndex: PropTypes.number.isRequired,
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
            isSelected = this.getIsSelectedVerse(this.props),
            willBeSelected = this.getIsSelectedVerse(nextProps)

        if (
            // No point in updating if it's not the cursored verse.
            !isSelected &&
            !willBeSelected
        ) {
            return false
        }

        return nextProps.canLyricRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    getIsSelectedVerse(props) {
        const {
                verseIndex,
                renderableVerseIndex
            } = props,

            isSelected =
                verseIndex === renderableVerseIndex

        return isSelected
    }

    render() {
        const {
                renderableSongIndex,
                verseIndex,
                inLyric,
                inSlider
            } = this.props,

            verseDuration = getVerseDurationForVerseIndex(
                renderableSongIndex,
                verseIndex
            ),

            transitionedStyle =
                inSlider ?
                    'left' :
                    'top',

            isSelected = this.getIsSelectedVerse(this.props)

        return (
            <div
                className={cx(
                    'VerseTracker',
                    isSelected && `VerseTracker__selected`,

                    inSlider &&
                        'VerseTracker__horizontalTransition',

                    inLyric &&
                        'VerseTracker__verticalTransition',

                    'absoluteFullContainer'
                )}
                {
                    ...isSelected && {
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

export default connect(mapStateToProps)(VerseTracker)
