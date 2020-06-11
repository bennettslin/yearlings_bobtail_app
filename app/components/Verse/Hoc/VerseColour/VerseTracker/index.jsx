// Component to show audio progress in verse.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import { getDurationForVerse } from '../../../../../api/album/time'
import { IS_USER_AGENT_DESKTOP } from '../../../../../constants/device'
import {
    mapLyricSongIndex,
    mapLyricVerseIndex
} from '../../../../../redux/lyric/selectors'
import './style'

const VerseTracker = ({
    verseIndex,
    inUnit,
    inVerseBar,
    inSlider,
    isHiddenInVerseBar

}) => {
    const
        lyricSongIndex = useSelector(mapLyricSongIndex),
        lyricVerseIndex = useSelector(mapLyricVerseIndex)

    // shouldComponentUpdate(nextProps) {
    //     const
    //         isSelected = this.getIsSelectedVerse(this.props),
    //         willBeSelected = this.getIsSelectedVerse(nextProps)

    //     // If it can enter, update if...
    //     return (

    //         // Verse bar alternates between showing odd and even verse.
    //         this.props.isHiddenInVerseBar !== nextProps.isHiddenInVerseBar ||

    //         // ... song changed...
    //         this.props.lyricSongIndex !== nextProps.lyricSongIndex ||

    //         // ... or verse was selected or unselected.
    //         isSelected !== willBeSelected
    //     )
    // }

    const getIsSelectedVerse = () => {
        const
            isSelected =
                verseIndex === lyricVerseIndex && !isHiddenInVerseBar

        return isSelected
    }

    const

        inLyric = inUnit || inVerseBar,

        isSelected = getIsSelectedVerse(),

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

VerseTracker.propTypes = {
    verseIndex: PropTypes.number.isRequired,
    inUnit: PropTypes.bool,
    inVerseBar: PropTypes.bool,
    inSlider: PropTypes.bool,
    isHiddenInVerseBar: PropTypes.bool
}

export default memo(VerseTracker)
