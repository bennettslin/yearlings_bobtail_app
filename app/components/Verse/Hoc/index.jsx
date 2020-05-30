import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import VerseColour from './VerseColour'
import VerseNav from './VerseNav'
import { ACTIVATED_VERSE_INDEX_SELECTOR } from '../../../redux/activated/selectors'

const VerseHoc = ({
    verseIndex,
    VerseComponent,
    handleVerseSelect,
    inUnit,
    isShownInVerseBar,
    ...other

}) => {
    const
        activatedVerseIndex = useSelector(ACTIVATED_VERSE_INDEX_SELECTOR),
        hasVerseIndex = Number.isFinite(verseIndex)

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
            // "Child verse index."
            `ChV${verseIndex}`,
            'ChV',

            // "Child in lyric."
            (
                inUnit || (
                    inVerseBar &&
                    isShownInVerseBar
                )

            // This class applies background colour and zIndex.
            ) && 'ChL'
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
                    inSlider,
                    inVerseBar,
                    inUnit,
                    verseIndex,
                    isActivated
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
    // From parent.
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
