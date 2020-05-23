// Component to show audio progress in verse.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getDurationForVerse } from '../../../../../album/api/time'
import { IS_USER_AGENT_DESKTOP } from '../../../../../constants/device'

const mapStateToProps = ({
    lyricStore: {
        lyricSongIndex,
        lyricVerseIndex
    }
}) => ({
    lyricSongIndex,
    lyricVerseIndex
})

class VerseTracker extends Component {

    static propTypes = {
        // Through Redux.
        lyricSongIndex: PropTypes.number.isRequired,
        lyricVerseIndex: PropTypes.number.isRequired,

        // From parent.
        verseIndex: PropTypes.number.isRequired,
        inUnit: PropTypes.bool,
        inVerseBar: PropTypes.bool,
        inSlider: PropTypes.bool,
        isHiddenInVerseBar: PropTypes.bool
    }

    shouldComponentUpdate(nextProps) {
        const
            isSelected = this.getIsSelectedVerse(this.props),
            willBeSelected = this.getIsSelectedVerse(nextProps)

        // If it can enter, update if...
        return (

            // Verse bar alternates between showing odd and even verse.
            this.props.isHiddenInVerseBar !== nextProps.isHiddenInVerseBar ||

            // ... song changed...
            this.props.lyricSongIndex !== nextProps.lyricSongIndex ||

            // ... or verse was selected or unselected.
            isSelected !== willBeSelected
        )
    }

    getIsSelectedVerse(props) {
        const {
                verseIndex,
                lyricVerseIndex,
                isHiddenInVerseBar
            } = props,

            isSelected =
                verseIndex === lyricVerseIndex && !isHiddenInVerseBar

        return isSelected
    }

    render() {
        const {
                lyricSongIndex,

                verseIndex,
                inUnit,
                inVerseBar,
                inSlider
            } = this.props,

            inLyric = inUnit || inVerseBar,

            isSelected = this.getIsSelectedVerse(this.props),

            verseDuration = getDurationForVerse(
                lyricSongIndex,
                verseIndex
            ),

            transitionStyle =
                inSlider ?
                    'left' :
                    'top'

        return (
            <div
                {...{
                    className: cx(
                        'VerseTracker',

                        isSelected ?
                            'VerseTracker__selected' :
                            'VerseTracker__unselected',

                        inSlider &&
                            'VerseTracker__inSlider',

                        inLyric &&
                            'VerseTracker__inLyric',

                        'abF'
                    ),
                    ...IS_USER_AGENT_DESKTOP && {
                        style: {
                            transition: `${transitionStyle} ${verseDuration}s linear`
                        }
                    }
                }}
            />
        )
    }
}

export default connect(mapStateToProps)(VerseTracker)
