// Component to show individual box of versesArray.
import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import UnitTipsHands from '../TipsHands'
import UnitTab from '../Tab'
import VerseHoc from '../../Verse/Hoc'
import Verse from '../../Verse'
import {
    getUnitCardVerses,
    getIsUnitTruncatable,
    getUnitFormType
} from './helper'
import { getSubsequentForUnit } from '../../../api/album/units'
import { getVerse } from '../../../api/album/verses'
import { mapLyricSongIndex } from '../../../redux/lyric/selector'
import './style'

const UnitCard = forwardRef(({
    unitIndex,
    isMainVerses,
    isSubVerse,
    isSideCard,
    isSideSubCard,
    ...other

}, ref) => {
    const lyricSongIndex = useSelector(mapLyricSongIndex),
        versesArray = getUnitCardVerses({
            songIndex: lyricSongIndex,
            unitIndex,
            isMainVerses,
            isSubVerse,
            isSideCard,
            isSideSubCard
        })

    // Return if nothing to render.
    if (!versesArray) {
        return null
    }

    const
        { handleVerseSelect } = other,
        isSubsequent = getSubsequentForUnit(lyricSongIndex, unitIndex),
        isIndexed = isMainVerses || isSubVerse,
        isTabbed = isMainVerses && !isSubsequent,
        isTruncatable = getIsUnitTruncatable({
            lyricSongIndex,
            unitIndex,
            isMainVerses,
            isSubVerse
        }),
        formType = getUnitFormType({
            songIndex: lyricSongIndex,
            unitIndex,
            isMainVerses,
            isSubVerse,
            isSideCard,
            isSideSubCard
        })

    return (
        <div className={cx(
            'UnitCard',
            isSubVerse && 'UnitCard__subVerse',
            isTabbed && 'UnitCard__tabbed'
        )}>
            <div className={cx(
                'UnitCard__sheet',
                'boxShadow__stanza',
                'bgColour__unit__pattern',
                `bgColour__formType__${formType}`
            )}>
                {versesArray.map((verseEntity, index) => {
                    const verseObject = isIndexed ?
                        // If indexed verse, it's an array of indices.
                        getVerse(lyricSongIndex, verseEntity) :

                        // Otherwise, it's an array of verse objects.
                        verseEntity

                    return (
                        <VerseHoc {...other}
                            inUnit
                            {...{
                                key: index,
                                ref,
                                ...isIndexed && { verseIndex: verseEntity },
                                verseObject,
                                VerseComponent: Verse,
                                isTruncatable
                            }}
                        />
                    )
                }
                )}
            </div>

            {/* This tab covers the sheet's box shadow. */}
            {isTabbed && (
                <UnitTab
                    {...{
                        unitIndex,
                        handleVerseSelect
                    }}
                />
            )}
            <UnitTipsHands {...{ unitIndex }} />
        </div>
    )
})

UnitCard.propTypes = {
    unitIndex: PropTypes.number.isRequired,
    isMainVerses: PropTypes.bool,
    isSubVerse: PropTypes.bool,
    isSideCard: PropTypes.bool,
    isSideSubCard: PropTypes.bool
}

export default memo(UnitCard)
