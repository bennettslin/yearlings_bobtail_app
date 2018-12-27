/**
 * Component to show main card, side card, and dot card for a unit. A unit is
 * the basic unit by which the lyric data is organised. A stanza is made up of
 * one or more units. But a unit can also stand alone, such as a lone dot unit.
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import UnitCard from './Card'
import UnitDot from './Dot'

import { getAllSelectableVerses } from 'album/api/verses'

import { getUnit } from './helper'
import { getParentOfVerseClassNamesForIndices } from '../helper'

const mapStateToProps = ({
    renderedStore: { renderedSongIndex }
}) => ({
    renderedSongIndex
})

/*************
 * CONTAINER *
 *************/

class Unit extends PureComponent {

    static propTypes = {
        // Through Redux.
        renderedSongIndex: PropTypes.number.isRequired,

        // From parent.
        unitIndex: PropTypes.number.isRequired
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                dispatch,
                /* eslint-enable no-unused-vars */

                unitIndex,
                ...other
            } = this.props,

            // Pass to lyric stanza view so it knows to update.
            {
                renderedSongIndex,
                setLyricAnnotationElement
            } = other,

            unit = getUnit(renderedSongIndex, unitIndex),
            {
                lyricUnit,
                unitMap
            } = unit,

            {
                stanzaTypeIndex,
                stanzaType,
                subCardType,
                sideCardType,
                sideSubCardType,
                subsequent,
                dotUnit,
                subCard,
                sideCard,
                sideSubCard, // This exists solely for "Maranatha."
                hasTopSideCard,
                hasBottomSideCard
            } = unitMap,

            hasSide = Boolean(hasTopSideCard || hasBottomSideCard),
            isDotOnly = Boolean(dotUnit) && !lyricUnit

        return (
            <div
                className={cx(
                    // "Parent of verse index."
                    getParentOfVerseClassNamesForIndices({
                        entities: getAllSelectableVerses(unit)
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
                {!isDotOnly &&
                    <div className={cx(
                        'Unit__column__text',
                        'Unit__column',
                        'Unit__column__main'
                    )}>
                        {lyricUnit && (
                            <UnitCard
                                {...other}
                                {...{
                                    stanzaArray: lyricUnit,
                                    stanzaType,
                                    isTruncatable: hasSide
                                }}
                                {...!subsequent && {
                                    stanzaTypeIndex
                                }}
                            />
                        )}
                        {subCard && (
                            <UnitCard
                                {...other}
                                {...{
                                    stanzaArray: subCard,
                                    stanzaType: subCardType,
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
                                    stanzaArray: sideCard,
                                    stanzaType: sideCardType
                                }}
                            />
                        )}
                        {hasBottomSideCard && (
                            <UnitCard
                                {...other}
                                {...{
                                    stanzaArray: sideCard,
                                    stanzaType: sideCardType
                                }}
                            />
                        )}
                        {sideSubCard && (
                            <UnitCard
                                {...other}
                                {...{
                                    stanzaArray: sideSubCard,
                                    stanzaType: sideSubCardType
                                }}
                            />
                        )}
                    </div>
                }
                {dotUnit &&
                    <UnitDot
                        {...{
                            dotUnit,
                            setLyricAnnotationElement
                        }}
                    />
                }
            </div>
        )
    }
}

export default connect(mapStateToProps)(Unit)
