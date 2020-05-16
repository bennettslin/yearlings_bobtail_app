/**
 * Component to show main card, side card, and dot card for a unit. A unit is
 * the basic unit by which the lyric data is organised. A stanza is made up of
 * one or more units. But a unit can also stand alone, such as a lone dot unit.
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import SongStanzasTitle from '../Title'
import UnitCard from './Card'
import UnitDot from './Dot'

import {
    getUnit,
    getUnitFormTypeIndex,
    getUnitVerseIndices
} from '../../../album/api/units'
import { getParentOfVerseClassNamesForIndices } from '../helper'

import {
    getShowAnnotationTip,
    getShowActivatedTip,
    getShowStanzaTabTip,
    getShowWormholesTip,
    getShowWikiTip
} from '../../../album/data/tips'

const mapStateToProps = ({
    lyricStore: { lyricSongIndex }
}) => ({
    lyricSongIndex
})

/*************
 * CONTAINER *
 *************/

class Unit extends PureComponent {

    static propTypes = {
        // Through Redux.
        lyricSongIndex: PropTypes.number.isRequired,
        dispatch: PropTypes.func.isRequired,

        // From parent.
        unitIndex: PropTypes.number.isRequired
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                dispatch,
                /* eslint-enable no-unused-vars */

                lyricSongIndex,
                unitIndex,
                ...other
            } = this.props,

            {
                setLyricAnnotationElement
            } = other,

            unit = getUnit(lyricSongIndex, unitIndex),
            {
                mainVerses,
                unitMap
            } = unit,

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
            } = unitMap,

            formTypeIndex = getUnitFormTypeIndex(lyricSongIndex, unitIndex),
            hasSide = Boolean(hasTopSideCard || hasBottomSideCard),
            isLoneUnitDot = Boolean(unitDot) && !mainVerses

        return (
            <div
                className={cx(
                    // "Parent of verse index."
                    getParentOfVerseClassNamesForIndices({
                        entities: getUnitVerseIndices(lyricSongIndex, unitIndex)
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
                            {
                                'Unit__column__hasBottomSideCard':
                                    hasBottomSideCard
                            }
                        )}
                    >
                        {hasTopSideCard && (
                            <UnitCard
                                {...other}
                                {...{
                                    versesArray: sideCard,
                                    formType: sideCardType
                                }}
                            />
                        )}
                        {hasBottomSideCard && (
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
                {unitIndex === 0 && (
                    <SongStanzasTitle />
                )}
                {unitDot &&
                    <UnitDot
                        {...{
                            unitDot,
                            setLyricAnnotationElement
                        }}
                    />
                }
            </div>
        )
    }
}

export default connect(mapStateToProps)(Unit)
