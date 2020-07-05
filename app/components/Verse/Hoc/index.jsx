import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Tracker from '../../Tracker'
import VerseColour from './VerseColour'
import VerseNav from './VerseNav'
import { getMapIsShownVerseCursor, mapVerseCursorIndex, mapCursorTime } from '../../../redux/cursor/selector'
import { getMapIsVerseSelected, mapSelectedVerseIndex } from '../../../redux/selected/selector'
import { getMapVerseTrackerLength } from '../../../redux/tracker/selector'
import './style'

const VerseHoc = forwardRef(({
    verseIndex,
    VerseComponent,
    handleVerseSelect,
    inUnit,
    ...other

}, ref) => {
    const hasVerseIndex = Number.isFinite(verseIndex)

    if (!hasVerseIndex) {
        return (
            <VerseComponent {...other}
                {...{
                    ref,
                    className: 'Verse__noIndexColour'
                }}
            />
        )
    }

    const {
            inSlider,
            inVerseBar
        } = other,
        cursorTime = useSelector(mapCursorTime),
        verseCursorIndex = useSelector(mapVerseCursorIndex),
        isShownVerseCursor = useSelector(getMapIsShownVerseCursor({
            verseIndex,
            inSlider,
            inVerseBar
        })),
        selectedVerseIndex = useSelector(mapSelectedVerseIndex),
        isSelectedVerse = useSelector(getMapIsVerseSelected(verseIndex)),
        verseTrackerLength = useSelector(getMapVerseTrackerLength(verseIndex)),
        inLyric = inUnit || inVerseBar

    if (verseIndex === 0 && inUnit) {
        console.log('verseTrackerLength', verseTrackerLength)
        console.log('cursorTime', cursorTime)
        console.log('verseCursorIndex', verseCursorIndex)
        console.log('selectedVerseIndex', selectedVerseIndex)
    }

    return (
        <VerseComponent {...other}
            {...{
                ref,
                verseIndex,
                className: cx(
                    inLyric ? 'Verse__text' : 'Verse__slider',
                    isShownVerseCursor ? 'Verse__cursor' : 'Verse__notCursor',
                    isSelectedVerse ? 'Verse__selected' : 'Verse__notSelected'
                )
            }}
        >
            <VerseColour
                {...{
                    verseIndex,
                    inVerseBar
                }}
            >
                {Number.isFinite(verseIndex) && (
                    <Tracker
                        {...{
                            trackerLength: verseTrackerLength,
                            isVertical: inUnit || inVerseBar,
                            isNotShown: !isShownVerseCursor
                        }}
                    />
                )}
            </VerseColour>
            {!inSlider && !inVerseBar && (
                <VerseNav
                    {...{
                        verseIndex,
                        handleVerseSelect
                    }}
                />
            )}
        </VerseComponent>
    )
})

VerseHoc.propTypes = {
    verseIndex: PropTypes.number,
    VerseComponent: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.object
    ]).isRequired,
    inSlider: PropTypes.bool,
    inUnit: PropTypes.bool,
    inVerseBar: PropTypes.bool,
    handleVerseSelect: PropTypes.func
}

export default memo(VerseHoc)
