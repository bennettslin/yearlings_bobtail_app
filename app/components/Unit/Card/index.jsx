// Component to show individual box of verses.
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import UnitTipsHands from '../TipsHands'
import UnitTab from '../Tab'
import VerseHoc from '../../Verse/Hoc'
import Verse from '../../Verse'
import { getParentOfVerseClassNamesForIndices } from '../../../helpers/stanza'
import { getSubsequentForUnit } from '../../../album/api/units'
import { LYRIC_SONG_INDEX_SELECTOR } from '../../../redux/lyric/selectors'
import {
    RESPONSE,
    RHYME
} from '../../../constants/lyrics'
import './style'

const UnitCard = ({
    tempIsMainVerses,
    unitIndex,
    versesArray,
    formType,
    ...other

}) => {
    const
        { handleVerseSelect } = other,
        lyricSongIndex = useSelector(LYRIC_SONG_INDEX_SELECTOR),
        isSubCard = formType === RESPONSE || formType === RHYME,
        isSubsequent = getSubsequentForUnit(lyricSongIndex, unitIndex),
        isTabbed = tempIsMainVerses && !isSubsequent

    return (
        <div className={cx(

            // "Parent of verse index."
            getParentOfVerseClassNamesForIndices({
                entities: versesArray
            }),

            'UnitCard',
            isSubCard && 'UnitCard__subCard',
            isTabbed && 'UnitCard__tabbed'
        )}>
            <div className={cx(
                'UnitCard__sheet',
                'boxShadow__stanza',
                'bgColour__unit__pattern',
                `bgColour__formType__${formType}`
            )}>
                {versesArray.map((verseObject, stanzaVerseIndex) => {
                    const { verseIndex } = verseObject

                    return (
                        <VerseHoc {...other}
                            inUnit
                            {...{
                                key: stanzaVerseIndex,
                                verseIndex,
                                verseObject,
                                VerseComponent: Verse
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
    tempIsMainVerses: PropTypes.bool,
    unitIndex: PropTypes.number.isRequired,
    versesArray: PropTypes.array.isRequired,
    formType: PropTypes.string.isRequired
}

export default UnitCard
