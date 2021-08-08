// Component to show individual box of versesArray.
import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import getSongServerClientHoc from '../../../hocs/SongHoc'
import UnitTipsHands from '../TipsHands'
import UnitTab from '../Tab'
import Verse from '../../Verse'
import {
    getUnitCardVerses,
    getIsUnitTruncatable,
    getUnitFormType,
} from './helper'
import { getSubsequentForUnit } from '../../../endpoint/album/units'
import { getVerse } from '../../../endpoint/album/verses'
import './style'

const UnitCard = forwardRef(({
    didMount,
    serverClientSongIndex,
    unitIndex,
    isMainVerses,
    isSubVerse,
    isSideCard,
    isSideSubCard,
    ...other

}, ref) => {
    const versesArray = getUnitCardVerses({
        songIndex: serverClientSongIndex,
        unitIndex,
        isMainVerses,
        isSubVerse,
        isSideCard,
        isSideSubCard,
    })

    // Return if nothing to render.
    if (!versesArray) {
        return null
    }

    const
        { handleVerseSelect } = other,
        isSubsequent = getSubsequentForUnit(serverClientSongIndex, unitIndex),
        isIndexed = isMainVerses || isSubVerse,
        isTabbed = isMainVerses && !isSubsequent,
        isTruncatable = getIsUnitTruncatable({
            songIndex: serverClientSongIndex,
            unitIndex,
            isMainVerses,
            isSubVerse,
        }),
        formType = getUnitFormType({
            songIndex: serverClientSongIndex,
            unitIndex,
            isMainVerses,
            isSubVerse,
            isSideCard,
            isSideSubCard,
        })

    return (
        <div
            {...{
                ...didMount && {
                    className: cx(
                        'UnitCard',
                        isSubVerse && 'UnitCard__subVerse',
                        isTabbed && 'UnitCard__tabbed',
                    ),
                },
            }}
        >
            <div
                {...{
                    ...didMount && {
                        className: cx(
                            'UnitCard__sheet',
                            'boxShadow__stanza',
                            'bgColour__unit__pattern',
                            `bgColour__formType__${formType}`,
                        ),
                    },
                }}
            >
                {versesArray.map((verseEntity, index) => {
                    const verseObject = isIndexed ?
                        // If indexed verse, it's an array of indices.
                        getVerse(serverClientSongIndex, verseEntity) :

                        // Otherwise, it's an array of verse objects.
                        verseEntity

                    return (
                        <Verse {...other}
                            inUnit
                            {...{
                                key: index,
                                ref,
                                ...isIndexed && { verseIndex: verseEntity },
                                verseObject,
                                isTruncatable,
                            }}
                        />
                    )
                },
                )}
            </div>

            {/* This tab covers the sheet's box shadow. */}
            {isTabbed && (
                <UnitTab
                    {...{
                        unitIndex,
                        handleVerseSelect,
                    }}
                />
            )}
            <UnitTipsHands {...{ unitIndex }} />
        </div>
    )
})

UnitCard.propTypes = {
    didMount: PropTypes.bool.isRequired,
    serverClientSongIndex: PropTypes.number.isRequired,
    unitIndex: PropTypes.number.isRequired,
    isMainVerses: PropTypes.bool,
    isSubVerse: PropTypes.bool,
    isSideCard: PropTypes.bool,
    isSideSubCard: PropTypes.bool,
}

export default memo(getDidMountHoc(getSongServerClientHoc(UnitCard)))
