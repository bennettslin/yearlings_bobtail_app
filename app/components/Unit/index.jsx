/**
 * Component to show main card, side card, and dot card for a unit. A unit is
 * the basic unit by which the lyric data is organised. A stanza is made up of
 * one or more units. But a unit can also stand alone, such as a lone dot unit.
 */
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import UnitSongTitle from './Title'
import UnitCard from './Card'
import UnitDot from './Dot'
import {
    getMainVersesForUnit,
    getFormTypeForUnit,
    getFormTypeIndexForUnit,
    getSubsequentForUnit,
    getVerseIndicesForUnit,
    getIsSideCardOnBottomForUnit,
    getSubCardForUnit,
    getSideCardForUnit,
    getSideSubCardForUnit,
    getSubCardTypeForUnit,
    getSideCardTypeForUnit,
    getSideSubCardTypeForUnit
} from '../../album/api/units'
import { getParentOfVerseClassNamesForIndices } from '../../helpers/stanza'
import {
    getShowAnnotationTip,
    getShowActivatedTip,
    getShowStanzaTabTip,
    getShowWormholesTip,
    getShowWikiTip
} from '../../album/api/tips'
import { LYRIC_SONG_INDEX_SELECTOR } from '../../redux/lyric/selectors'
import './style'

const Unit = ({
    unitIndex,
    ...other

}) => {
    const
        { setLyricAnnotationElement } = other,
        lyricSongIndex = useSelector(LYRIC_SONG_INDEX_SELECTOR),
        mainVerses = getMainVersesForUnit(lyricSongIndex, unitIndex),
        verseIndices = getVerseIndicesForUnit(
            lyricSongIndex,
            unitIndex
        ),

        // This exists solely for "Maranatha."
        subCard = getSubCardForUnit(lyricSongIndex, unitIndex),
        sideCard = getSideCardForUnit(lyricSongIndex, unitIndex),
        sideSubCard = getSideSubCardForUnit(lyricSongIndex, unitIndex),
        subCardType = getSubCardTypeForUnit(lyricSongIndex, unitIndex),
        sideCardType = getSideCardTypeForUnit(lyricSongIndex, unitIndex),
        sideSubCardType = getSideSubCardTypeForUnit(lyricSongIndex, unitIndex),
        formType = getFormTypeForUnit(lyricSongIndex, unitIndex),
        formTypeIndex = getFormTypeIndexForUnit(lyricSongIndex, unitIndex),
        subsequent = getSubsequentForUnit(lyricSongIndex, unitIndex),
        isBottomSideCard = getIsSideCardOnBottomForUnit(lyricSongIndex, unitIndex),
        hasSide = Boolean(sideCard)

    return (
        <div
            className={cx(
                // "Parent of verse index."
                getParentOfVerseClassNamesForIndices({
                    entities: verseIndices
                }),

                'Unit',
                `unit__${unitIndex}`,

                hasSide ?
                    'fontSize__lyricMultipleColumns' :
                    'fontSize__verse',

                subsequent ?
                    'Unit__subsequent' :
                    'Unit__notSubsequent'
            )}
        >
            {unitIndex === 0 && (
                <UnitSongTitle />
            )}
            {Boolean(verseIndices.length) &&
                <div className={cx(
                    'Unit__column__text',
                    'Unit__column',
                    'Unit__column__main'
                )}>
                    <UnitCard
                        {...other}
                        {...{
                            unitIndex,
                            versesArray: mainVerses,
                            formType,
                            isTruncatable: hasSide,

                            showAnnotationTip: getShowAnnotationTip({
                                songIndex: lyricSongIndex,
                                unitIndex
                            }),
                            showStanzaTabTip: getShowStanzaTabTip({
                                songIndex: lyricSongIndex,
                                unitIndex
                            }),
                            showActivatedTip: getShowActivatedTip({
                                songIndex: lyricSongIndex,
                                unitIndex
                            }),
                            showWormholesTip: getShowWormholesTip({
                                songIndex: lyricSongIndex,
                                unitIndex
                            }),
                            showWikiTip: getShowWikiTip({
                                songIndex: lyricSongIndex,
                                unitIndex
                            })
                        }}
                        {...!subsequent && {
                            formTypeIndex
                        }}
                    />
                    {subCard && (
                        <UnitCard
                            {...other}
                            {...{
                                unitIndex,
                                versesArray: subCard,
                                formType: subCardType,
                                isTruncatable: hasSide
                            }}
                        />
                    )}
                </div>
            }
            {hasSide &&
                <div
                    className={cx(
                        'Unit__column__text',
                        'Unit__column',
                        'Unit__column__side',

                        // This happens only once, in Golden Cord.
                        isBottomSideCard && 'Unit__column__hasBottomSideCard'
                    )}
                >
                    {sideCard && (
                        <UnitCard
                            {...other}
                            {...{
                                unitIndex,
                                versesArray: sideCard,
                                formType: sideCardType
                            }}
                        />
                    )}
                    {sideSubCard && (
                        <UnitCard
                            {...other}
                            {...{
                                unitIndex,
                                versesArray: sideSubCard,
                                formType: sideSubCardType
                            }}
                        />
                    )}
                </div>
            }
            <UnitDot
                {...{
                    unitIndex,
                    setLyricAnnotationElement
                }}
            />
        </div>
    )
}

Unit.propTypes = {
    unitIndex: PropTypes.number.isRequired
}

export default memo(Unit)
