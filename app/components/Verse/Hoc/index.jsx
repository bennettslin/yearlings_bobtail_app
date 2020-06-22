import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import VerseColour from './VerseColour'
import VerseNav from './VerseNav'
import { getMapIsVerseCursor } from '../../../redux/cursor/selector'
import { getMapIsVerseSelected } from '../../../redux/selected/selector'
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
                {...{ ref, logicSelectors: 'Verse__noIndexColour' }}
            />
        )
    }

    const {
            inSlider,
            inVerseBar
        } = other,
        isCursorVerse = useSelector(getMapIsVerseCursor({
            verseIndex,
            inSlider,
            inVerseBar
        })),
        isSelectedVerse = useSelector(getMapIsVerseSelected(verseIndex)),
        inLyric = inUnit || inVerseBar,
        logicSelectors = cx(
            inLyric ? 'Verse__text' : 'Verse__slider',
            isCursorVerse ? 'Verse__cursor' : 'Verse__notCursor',
            isSelectedVerse ? 'Verse__selected' : 'Verse__notSelected'
        )

    return (
        <VerseComponent {...other}
            {...{
                ref,
                verseIndex,
                logicSelectors
            }}
        >
            <VerseColour
                {...{
                    verseIndex,
                    inUnit,
                    inSlider,
                    inVerseBar
                }}
            />
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
