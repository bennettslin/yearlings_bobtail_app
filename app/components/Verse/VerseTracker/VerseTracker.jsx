// Component to show audio progress in verse.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getVerseDurationForVerseIndex } from 'helpers/dataHelper'
// import { getPropsAreShallowEqual } from 'helpers/generalHelper'
// import { getSelectedChildSelector } from './verseTrackerHelper'

const mapStateToProps = ({
    renderableStore: {
        renderableSongIndex,
        renderableVerseIndex
    }
}) => ({
    renderableSongIndex,
    renderableVerseIndex
})

class VerseTracker extends Component {

    static propTypes = {
        // Through Redux.
        renderableSongIndex: PropTypes.number.isRequired,
        renderableVerseIndex: PropTypes.number.isRequired,

        // From parent.
        verseIndex: PropTypes.number.isRequired,
        inUnit: PropTypes.bool,
        inVerseBar: PropTypes.bool,
        inSlider: PropTypes.bool
    }

    shouldComponentUpdate(nextProps) {
        const
            isSelected = this.getIsSelectedVerse(this.props),
            willBeSelected = this.getIsSelectedVerse(nextProps)

        // If it can render, update if...
        return (

            // ... song changed...
            this.props.renderableSongIndex !== nextProps.renderableSongIndex ||

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
                inUnit,
                inVerseBar,
                inSlider
            } = this.props,

            inLyric = inUnit || inVerseBar,

            isSelected = this.getIsSelectedVerse(this.props),

            verseDuration = getVerseDurationForVerseIndex(
                renderableSongIndex,
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
