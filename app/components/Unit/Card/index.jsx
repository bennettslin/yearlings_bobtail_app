// Component to show individual box of verses.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import UnitTipsHands from '../TipsHands'
import UnitTab from '../Tab'
import VerseHoc from '../../Verse/Hoc'
import Verse from '../../Verse'
import { getParentOfVerseClassNamesForIndices } from '../../../helpers/stanza'
import {
    getUnitVerses,
    getIsUnitTruncatable,
    getUnitFormType
} from './helper'
import { getSubsequentForUnit, getMainVerseIndicesForUnit } from '../../../album/api/units'
import { mapLyricSongIndex } from '../../../redux/lyric/selectors'
import './style'

const UnitCard = ({
    unitIndex,
    isMainVerses,
    isSubVerse,
    isSideCard,
    isSideSubCard,
    ...other

}) => {
    const lyricSongIndex = useSelector(mapLyricSongIndex),
        verses = getUnitVerses({
            songIndex: lyricSongIndex,
            unitIndex,
            isMainVerses,
            isSubVerse,
            isSideCard,
            isSideSubCard
        })

    // Return if no verses to render.
    if (!verses) {
        return null
    }

    const
        { handleVerseSelect } = other,
        isSubsequent = getSubsequentForUnit(lyricSongIndex, unitIndex),
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

            // "Parent of verse index."
            getParentOfVerseClassNamesForIndices({
                entities: getMainVerseIndicesForUnit(lyricSongIndex, unitIndex)
            }),

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
                {verses.map((verseObject, stanzaVerseIndex) => {
                    const { verseIndex } = verseObject

                    return (
                        <VerseHoc {...other}
                            inUnit
                            {...{
                                key: stanzaVerseIndex,
                                verseIndex,
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
}

UnitCard.propTypes = {
    unitIndex: PropTypes.number.isRequired,
    isMainVerses: PropTypes.bool,
    isSubVerse: PropTypes.bool,
    isSideCard: PropTypes.bool,
    isSideSubCard: PropTypes.bool
}

export default memo(UnitCard)
