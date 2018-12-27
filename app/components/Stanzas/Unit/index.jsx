/**
 * Component to show main card, side card, and dot card for a unit. A unit is
 * the basic unit by which the lyric data is organised. A stanza is made up of
 * one or more units. But a unit can also stand alone, such as the title unit,
 * or the last dot card.
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import UnitCard from './Card'
import UnitDot from './Dot'

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
                setLyricAnnotationElement,
                ...other
            } = this.props,

            // Pass to lyric stanza view so it knows to update.
            { renderedSongIndex } = other,

            unit = getUnit(renderedSongIndex, unitIndex),
            {
                lyricUnit,
                unitMap
            } = unit,

            {
                stanzaIndex,
                stanzaTypeIndex,
                stanzaType,
                subCardType,
                sideCardType,
                sideSubCardType,
                subsequent,
                dotUnit,
                subCard,
                topSideCard,
                bottomSideCard
            } = unitMap,

            unitCardProps = {
                stanzaIndex,
                stanzaTypeIndex,
                stanzaType,
                subCardType,
                sideCardType,
                sideSubCardType,
                subsequent,
                setLyricAnnotationElement
            },

            // This exists solely for "Maranatha."
            topSideSubCard = topSideCard ?
                topSideCard[topSideCard.length - 1].subCard : null,

            hasSide = Boolean(topSideCard || bottomSideCard),
            isDotOnly = Boolean(dotUnit) && !lyricUnit,
            isSideBottomOnly = !topSideCard && Boolean(bottomSideCard)

        return (
            <div
                className={cx(
                    // "Parent of verse index."
                    lyricUnit && getParentOfVerseClassNamesForIndices({
                        entities: lyricUnit
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
                        <UnitCard
                            {...other}
                            {...unitCardProps}
                            inMain
                            stanzaArray={lyricUnit}
                            isTruncatable={hasSide}
                        />
                        <UnitCard
                            {...other}
                            {...unitCardProps}
                            inMain
                            isSubCard
                            stanzaArray={subCard}
                            isTruncatable={hasSide}
                        />
                    </div>
                }
                {hasSide &&
                    <div
                        className={cx(
                            'Unit__column__text',
                            'Unit__column',
                            'Unit__column__side',
                            { 'Unit__column__sideBottomOnly': isSideBottomOnly }
                        )}
                    >
                        <UnitCard
                            {...other}
                            {...unitCardProps}
                            stanzaArray={topSideCard}
                        />
                        <UnitCard
                            {...other}
                            {...unitCardProps}
                            stanzaArray={bottomSideCard}
                        />
                        <UnitCard
                            {...other}
                            {...unitCardProps}
                            isSubCard
                            stanzaArray={topSideSubCard}
                        />
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
