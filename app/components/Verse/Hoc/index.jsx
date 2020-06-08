import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import VerseColour from './VerseColour'
import VerseNav from './VerseNav'
import { getMapIsVerseCursor } from '../../../redux/lyric/selectors'
import { getMapIsVerseSelected } from '../../../redux/selected/selectors'
import './style'

const VerseHoc = forwardRef(({
    verseIndex,
    VerseComponent,
    handleVerseSelect,
    inUnit,
    isShownInVerseBar,
    ...other

}, ref) => {
    const
        hasVerseIndex = Number.isFinite(verseIndex),
        isCursorVerse = useSelector(getMapIsVerseCursor(verseIndex)),
        isSelectedVerse = useSelector(getMapIsVerseSelected(verseIndex))

    if (!hasVerseIndex) {
        return (
            <VerseComponent {...other}
                {...{ logicSelectors: 'Verse__noIndexColour' }}
            />
        )
    }

    const {
            inSlider,
            inVerseBar
        } = other,

        logicSelectors = hasVerseIndex && cx(
            (
                inUnit || (
                    inVerseBar &&
                    isShownInVerseBar
                )
            ) ? 'Verse__text' : 'Verse__slider',
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
                    inSlider,
                    inVerseBar,
                    inUnit
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
    isShownInVerseBar: PropTypes.bool,
    handleVerseSelect: PropTypes.func
}

export default memo(VerseHoc)
