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
} from '../../api/album/units'
import { mapLyricSongIndex } from '../../redux/lyric/selectors'
import './style'

const Unit = ({
    unitIndex,
    ...other

}) => {
    const
        { setLyricAnnotationChild } = other,
        lyricSongIndex = useSelector(mapLyricSongIndex),
        unitVerseIndices = getVerseIndicesForUnit(
            lyricSongIndex, unitIndex
        ),
        isBottomSideCard = getIsSideCardOnBottomForUnit(
            lyricSongIndex, unitIndex
        ),
        hasMainVerses = Boolean(unitVerseIndices.length),
        hasSideCards = Boolean(getSideCardForUnit(lyricSongIndex, unitIndex)),
        isSubsequent = getSubsequentForUnit(lyricSongIndex, unitIndex)

    return (
        <div
            className={cx(
                'Unit',
                `unit__${unitIndex}`,

                hasSideCards ?
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
                        isSubVerse
                        {...{ unitIndex, ...other }}
                    />
                </div>
            }
            {hasSideCards &&
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
                    setLyricAnnotationChild
                }}
            />
        </div>
    )
}

Unit.propTypes = {
    unitIndex: PropTypes.number.isRequired
}

export default memo(Unit)
