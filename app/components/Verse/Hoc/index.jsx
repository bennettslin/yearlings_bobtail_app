import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import VerseColour from './VerseColour'
import VerseNav from './VerseNav'
import { mapActivatedVerseIndex } from '../../../redux/activated/selectors'
import { getIsCursorVerse } from '../../../redux/lyric/selectors'
import './style'

const VerseHoc = ({
    verseIndex,
    VerseComponent,
    handleVerseSelect,
    inUnit,
    isShownInVerseBar,
    ...other

}) => {
    const
        hasVerseIndex = Number.isFinite(verseIndex),
        activatedVerseIndex = useSelector(mapActivatedVerseIndex),
        isCursorVerse = useSelector(getIsCursorVerse(verseIndex))

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
            isCursorVerse ? 'Verse__cursor' : 'Verse__notCursor'
        ),

        isActivated = verseIndex === activatedVerseIndex

    return (
        <VerseComponent {...other}
            {...{
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
                        isActivated,
                        handleVerseSelect
                    }}
                />
            )}
        </VerseComponent>
    )
}

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
