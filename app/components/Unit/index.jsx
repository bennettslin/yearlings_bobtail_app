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
    getUnitMapForUnit,
    getMainVersesForUnit,
    getFormTypeForUnit,
    getVerseIndicesForUnit
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

        {
            formType,
            subCardType,
            sideCardType,
            sideSubCardType,
            subsequent,
            unitDot,
            subVerse,
            sideCard,
            sideSubCard, // This exists solely for "Maranatha."
            hasTopSideCard,
            hasBottomSideCard
        } = getUnitMapForUnit(lyricSongIndex, unitIndex),

        formTypeIndex = getFormTypeForUnit(lyricSongIndex, unitIndex),
        hasSide = Boolean(hasTopSideCard || hasBottomSideCard),
        isLoneUnitDot = Boolean(unitDot) && !mainVerses

    return (
        <div
            className={cx(
                // "Parent of verse index."
                getParentOfVerseClassNamesForIndices({
                    entities: getVerseIndicesForUnit(
                        lyricSongIndex,
                        unitIndex
                    )
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
            {!isLoneUnitDot &&
                <div className={cx(
                    'Unit__column__text',
                    'Unit__column',
                    'Unit__column__main'
                )}>
                    {mainVerses && (
                        <UnitCard
                            {...other}
                            {...{
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
                    )}
                    {subVerse && (
                        <UnitCard
                            {...other}
                            {...{
                                versesArray: subVerse,
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
                        hasBottomSideCard && 'Unit__column__hasBottomSideCard'
                    )}
                >
                    {sideCard && (
                        <UnitCard
                            {...other}
                            {...{
                                versesArray: sideCard,
                                formType: sideCardType
                            }}
                        />
                    )}
                    {sideSubCard && (
                        <UnitCard
                            {...other}
                            {...{
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
