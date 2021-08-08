/**
 * Component to show main card, side card, and dot card for a unit. A unit is
 * the basic unit by which the lyric data is organised. A stanza is made up of
 * one or more units. But a unit can also stand alone, such as a lone dot unit.
 */
import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import getDidMountHoc from '../../hocs/DidMountHoc'
import getSongServerClientHoc from '../../hocs/SongHoc'
import UnitSongTitle from './Title'
import UnitCard from './Card'
import UnitDot from './Dot'
import {
    getSubsequentForUnit,
    getVerseIndicesForUnit,
    getIsSideCardOnBottomForUnit,
    getSideCardForUnit,
} from '../../api/album/units'
import { mapIsEarShown } from '../../redux/ear/selector'
import './style'

const Unit = forwardRef(({
    didMount,
    serverClientSongIndex,
    unitIndex,
    ...other

}, ref) => {
    const
        isEarShown = useSelector(mapIsEarShown),
        unitVerseIndices = getVerseIndicesForUnit(
            serverClientSongIndex, unitIndex,
        ),
        isBottomSideCard = getIsSideCardOnBottomForUnit(
            serverClientSongIndex, unitIndex,
        ),
        hasMainVerses = Boolean(unitVerseIndices.length),
        hasSideCards = Boolean(getSideCardForUnit(
            serverClientSongIndex, unitIndex,
        )),
        isSubsequent = getSubsequentForUnit(serverClientSongIndex, unitIndex)

    return (
        <div
            {...{
                className: cx(
                    'Unit',
                    didMount && [
                        `unit__${unitIndex}`,

                        hasSideCards && !isEarShown ?
                            'fontSize__lyricMultipleColumns' :
                            'fontSize__verse',

                        isSubsequent ?
                            'Unit__subsequent' :
                            'Unit__notSubsequent',
                    ],
                ),
            }}
        >
            {unitIndex === 0 && (
                <UnitSongTitle />
            )}
            {hasMainVerses &&
                <div
                    {...{
                        ...didMount && {
                            className: cx(
                                'Unit__column__text',
                                'Unit__column',
                                'Unit__column__main',
                            ),
                        },
                    }}
                >
                    <UnitCard
                        isMainVerses
                        {...{
                            ref,
                            unitIndex,
                            ...other,
                        }}
                    />
                    <UnitCard
                        isSubVerse
                        {...{
                            ref,
                            unitIndex,
                            ...other,
                        }}
                    />
                </div>
            }
            {hasSideCards &&
                <div
                    {...{
                        ...didMount && {
                            className: cx(
                                'Unit__column__text',
                                'Unit__column',
                                'Unit__column__side',

                                // This happens only once, in Golden Cord.
                                isBottomSideCard && 'Unit__column__hasBottomSideCard',
                            ),
                        },
                    }}
                >
                    <UnitCard
                        isSideCard
                        {...{
                            ref,
                            unitIndex,
                            ...other,
                        }}
                    />
                    <UnitCard
                        isSideSubCard
                        {...{
                            ref,
                            unitIndex,
                            ...other,
                        }}
                    />
                </div>
            }
            <UnitDot
                {...{
                    ref,
                    unitIndex,
                }}
            />
        </div>
    )
})

Unit.propTypes = {
    didMount: PropTypes.bool.isRequired,
    serverClientSongIndex: PropTypes.number.isRequired,
    unitIndex: PropTypes.number.isRequired,
}

export default memo(getDidMountHoc(getSongServerClientHoc(Unit)))
