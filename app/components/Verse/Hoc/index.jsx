import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Tracker from '../../Tracker'
import VerseColour from './VerseColour'
import VerseNav from './VerseNav'
import { getMapIsShownVerseCursor } from '../../../redux/cursor/selector'
import { getMapIsVerseSelected } from '../../../redux/selected/selector'
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
        isShownVerseCursor = useSelector(getMapIsShownVerseCursor({
            verseIndex,
            inSlider,
            inVerseBar
        })),
        isSelectedVerse = useSelector(getMapIsVerseSelected(verseIndex)),
        verseTrackerLength = useSelector(getMapVerseTrackerLength(verseIndex)),
        inLyric = inUnit || inVerseBar

    return (
        <VerseComponent {...other}
            {...{
                ref,
                verseIndex,
                className: cx(
                    isShownVerseCursor ? 'Verse__cursor' : 'Verse__notCursor',
                    isSelectedVerse ? 'Verse__selected' : 'Verse__notSelected',
                    inLyric ? 'Verse__text' : 'Verse__slider'
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
