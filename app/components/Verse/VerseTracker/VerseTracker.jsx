// Component to show audio progress in verse.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getVerseDurationForVerseIndex } from 'helpers/dataHelper'
// import { getPropsAreShallowEqual } from 'helpers/generalHelper'
// import { getSelectedChildSelector } from './verseTrackerHelper'

const mapStateToProps = ({
    renderedStore: {
        renderedSongIndex,
        renderedVerseIndex
    }
}) => ({
    renderedSongIndex,
    renderedVerseIndex
})

class VerseTracker extends Component {

    static propTypes = {
        // Through Redux.
        renderedSongIndex: PropTypes.number.isRequired,
        renderedVerseIndex: PropTypes.number.isRequired,

        // From parent.
        verseIndex: PropTypes.number.isRequired,
        inUnit: PropTypes.bool,
        inVerseBar: PropTypes.bool,
        inSlider: PropTypes.bool,
        isHidden: PropTypes.bool
    }

    shouldComponentUpdate(nextProps) {
        const
            isSelected = this.getIsSelectedVerse(this.props),
            willBeSelected = this.getIsSelectedVerse(nextProps)

        // If it can render, update if...
        return (

            // Verse bar alternates between showing odd and even verse.
            this.props.isHidden !== nextProps.isHidden ||

            // ... song changed...
            this.props.renderedSongIndex !== nextProps.renderedSongIndex ||

            // ... or verse was selected or unselected...
            isSelected !== willBeSelected ||

            (
                // ... or it's selected, and it toggled between play and pause.
                isSelected && this.props.isPlaying !== nextProps.isPlaying
            )
        )
    }

    getIsSelectedVerse(props) {
        const {
                verseIndex,
                renderedVerseIndex
            } = props,

            isSelected =
                verseIndex === renderedVerseIndex

        return isSelected
    }

    render() {
        const {
                renderedSongIndex,

                verseIndex,
                inUnit,
                inVerseBar,
                inSlider,
                isHidden
            } = this.props,

            inLyric = inUnit || inVerseBar,

            isSelected = this.getIsSelectedVerse(this.props),

            verseDuration = getVerseDurationForVerseIndex(
                renderedSongIndex,
                verseIndex
            ),

            transitionStyle =
                inSlider ?
                    'left' :
                    'top'

        return (
            <div
                className={cx(
                    'VerseTracker',

                    isSelected && `VerseTracker__selected`,

                    inSlider &&
                        'VerseTracker__inSlider',

                    inLyric &&
                        'VerseTracker__inLyric',

                    isHidden && 'VerseTracker__hidden',

                    'absoluteFullContainer'
                )}
                style={{
                    transition: `${transitionStyle} ${verseDuration}s linear`
                }}
            />
        )
    }
}

export default connect(mapStateToProps)(VerseTracker)
