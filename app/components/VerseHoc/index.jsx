import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import VerseColour from './VerseColour'
import VerseNav from './VerseNav'
import { getMapIsShownVerseCursor } from '../../redux/cursor/selector'
import { getMapIsVerseSelected } from '../../redux/selected/selector'
import './style'

const getVerseHoc = VerseComponent => {
    /**
     * This hoc extracts the common features and functions of the lyric verse
     * and slider verse.
     */
    const VerseHoc = forwardRef(({
        verseIndex,
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
                        className: 'Verse__noIndexColour',
                    }}
                />
            )
        }

        const {
                inSlider,
                inVerseBar,
            } = other,
            isShownVerseCursor = useSelector(getMapIsShownVerseCursor({
                verseIndex,
                inSlider,
                inVerseBar,
            })),
            isSelectedVerse = useSelector(getMapIsVerseSelected(verseIndex)),
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
                    ),
                }}
            >
                <VerseColour
                    {...{
                        verseIndex,
                        inVerseBar,
                        isVertical: inUnit || inVerseBar,
                        isTrackerShown: isShownVerseCursor,
                    }}
                />
                {!inSlider && !inVerseBar && (
                    <VerseNav
                        {...{
                            verseIndex,
                            handleVerseSelect,
                        }}
                    />
                )}
            </VerseComponent>
        )
    })

    VerseHoc.propTypes = {
        verseIndex: PropTypes.number,
        inSlider: PropTypes.bool,
        inUnit: PropTypes.bool,
        inVerseBar: PropTypes.bool,
        handleVerseSelect: PropTypes.func,
    }

    return VerseHoc
}

export default getVerseHoc
