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
    getSubsequentForUnit,
    getVerseIndicesForUnit,
    getIsSideCardOnBottomForUnit,
    getSideCardForUnit
} from '../../album/api/units'
import { getParentOfVerseClassNamesForIndices } from '../../helpers/stanza'
import { LYRIC_SONG_INDEX_SELECTOR } from '../../redux/lyric/selectors'
import './style'

const Unit = ({
    unitIndex,
    ...other

}) => {
    const
        { setLyricAnnotationElement } = other,
        lyricSongIndex = useSelector(LYRIC_SONG_INDEX_SELECTOR),
        verseIndices = getVerseIndicesForUnit(
            lyricSongIndex,
            unitIndex
        ),
        isSubsequent = getSubsequentForUnit(lyricSongIndex, unitIndex),
        isBottomSideCard = getIsSideCardOnBottomForUnit(lyricSongIndex, unitIndex),
        hasMainVerses = Boolean(verseIndices.length),
        hasSideCard = Boolean(getSideCardForUnit(lyricSongIndex, unitIndex))

    return (
        <div
            className={cx(
                // "Parent of verse index."
                getParentOfVerseClassNamesForIndices({
                    entities: verseIndices
                }),

                'Unit',
                `unit__${unitIndex}`,

                hasSideCard ?
                    'fontSize__lyricMultipleColumns' :
                    'fontSize__verse',

                isSubsequent ?
                    'Unit__subsequent' :
                    'Unit__notSubsequent'
            )}
        >
            {unitIndex === 0 && (
                <UnitSongTitle />
            )}
            {hasMainVerses &&
                <div className={cx(
                    'Unit__column__text',
                    'Unit__column',
                    'Unit__column__main'
                )}>
                    <UnitCard
                        isMainVerses
                        {...{ unitIndex, ...other }}
                    />
                    <UnitCard
                        isSubCard
                        {...{ unitIndex, ...other }}
                    />
                </div>
            }
            {hasSideCard &&
                <div
                    className={cx(
                        'Unit__column__text',
                        'Unit__column',
                        'Unit__column__side',

                        // This happens only once, in Golden Cord.
                        isBottomSideCard && 'Unit__column__hasBottomSideCard'
                    )}
                >
                    <UnitCard
                        isSideCard
                        {...{ unitIndex, ...other }}
                    />
                    <UnitCard
                        isSideSubCard
                        {...{ unitIndex, ...other }}
                    />
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
