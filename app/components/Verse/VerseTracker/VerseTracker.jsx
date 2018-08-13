// Component to show audio progress in verse.

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import VerseTrackerStyle from './VerseTrackerStyle'

import { getSelectedChildSelector } from './verseTrackerHelper'

const mapStateToProps = ({
    isPlaying,
    renderableStore: {
        renderableVerseIndex
    }
}) => ({
    isPlaying,
    renderableVerseIndex
})

class VerseTracker extends Component {

    static propTypes = {
        // Through Redux.
        isPlaying: PropTypes.bool.isRequired,
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
            // ... verse was selected or unselected...
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
                verseIndex,
                inUnit,
                inVerseBar,
                inSlider
            } = this.props,

            inLyric = inUnit || inVerseBar,

            isSelected = this.getIsSelectedVerse(this.props),

            selectedChildSelector = getSelectedChildSelector({
                verseIndex,
                inUnit,
                inVerseBar,
                inSlider
            })

        return (
            <Fragment>
                <VerseTrackerStyle
                    {...{
                        verseIndex,
                        inUnit,
                        inVerseBar,
                        inSlider
                    }}
                />
                <div
                    className={cx(
                        'VerseTracker',

                        isSelected && selectedChildSelector,

                        isSelected && `VerseTracker__selected`,

                        inSlider &&
                            'VerseTracker__inSlider',

                        inLyric &&
                            'VerseTracker__inLyric',

                        'absoluteFullContainer'
                    )}
                />
            </Fragment>
        )
    }
}

export default connect(mapStateToProps)(VerseTracker)
