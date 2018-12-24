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

import { TITLE } from 'constants/lyrics'
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
                dotCard,
                subCard,
                topSideCard,
                bottomSideCard
            } = unitMap,

            // This exists solely for "Maranatha."
            topSideSubCard = topSideCard ?
                topSideCard[topSideCard.length - 1].subCard : null,

            // isTitleUnit = unitIndex === 0,
            isTitleUnit = false,

            hasSide = Boolean(topSideCard || bottomSideCard),
            isDotOnly = Boolean(dotCard) && !lyricUnit,
            isSideBottomOnly = !topSideCard && Boolean(bottomSideCard)

        return (
            <UnitView {...other}
                {...{
                    isTitleUnit,
                    unitIndex,

                    stanzaIndex,
                    stanzaTypeIndex,
                    lyricUnit,
                    subCardType,
                    sideCardType,
                    sideSubCardType,
                    subsequent,
                    dotCard,
                    subCard,
                    topSideCard,
                    bottomSideCard,
                    topSideSubCard,
                    hasSide,
                    isDotOnly,
                    isSideBottomOnly,
                    stanzaType: isTitleUnit ? TITLE : stanzaType
                }}
            />
        )
    }
}

/****************
 * PRESENTATION *
 ****************/

class UnitView extends PureComponent {

    static defaultProps = {
        subsequent: false,
        isLastUnit: false
    }

    static propTypes = {
        // From parent.

        // This is passed just for knowing when to update.
        renderedSongIndex: PropTypes.number.isRequired,

        stanzaIndex: PropTypes.number,
        unitIndex: PropTypes.number.isRequired,

        isTitleUnit: PropTypes.bool.isRequired,
        isLastUnit: PropTypes.bool.isRequired,

        lyricUnit: PropTypes.array,
        dotCard: PropTypes.object,
        subCard: PropTypes.array,
        topSideCard: PropTypes.array,
        bottomSideCard: PropTypes.array,
        topSideSubCard: PropTypes.array,
        subsequent: PropTypes.bool.isRequired,

        hasSide: PropTypes.bool.isRequired,
        isDotOnly: PropTypes.bool.isRequired,
        isSideBottomOnly: PropTypes.bool.isRequired,

        setLyricAnnotationElement: PropTypes.func.isRequired
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                renderedSongIndex,
                /* eslint-enable no-unused-vars */

                // From props.
                lyricUnit,

                // From controller.
                unitIndex,

                isTitleUnit,
                isLastUnit,

                dotCard,
                subCard,
                topSideCard,
                bottomSideCard,
                topSideSubCard,

                hasSide,
                isDotOnly,
                isSideBottomOnly,

                ...other
            } = this.props,

            {
                subsequent,
                setLyricAnnotationElement
            } = other

        return (
            <div
                className={cx(
                    // "Parent of verse index."
                    lyricUnit && getParentOfVerseClassNamesForIndices({
                        entities: lyricUnit
                    }),

                    'Unit',

                    `unit__${unitIndex}`,

                    isTitleUnit ? 'fontSize__title' : 'fontSize__verse',

                    {
                        'Unit__hasSide': hasSide,
                        'Unit__title': isTitleUnit,

                        'fontSize__lyricMultipleColumns': hasSide
                    },

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
                        <UnitCard {...other}
                            inMain
                            stanzaArray={lyricUnit}
                            isTruncatable={hasSide}
                        />
                        <UnitCard {...other}
                            inMain
                            isSubCard
                            stanzaArray={subCard}
                            isTruncatable={hasSide}
                        />
                    </div>
                }
                {hasSide &&
                    <div className={cx(
                        'Unit__column__text',
                        'Unit__column',
                        'Unit__column__side',
                        { 'Unit__column__sideBottomOnly': isSideBottomOnly }
                    )}>
                        <UnitCard {...other}
                            stanzaArray={topSideCard}
                        />
                        <UnitCard {...other}
                            stanzaArray={bottomSideCard}
                        />
                        <UnitCard {...other}
                            isSubCard
                            stanzaArray={topSideSubCard}
                        />
                    </div>
                }
                {dotCard &&
                    <UnitDot
                        isLastUnit={isDotOnly && isLastUnit}
                        dotStanzaObject={dotCard}
                        {...{
                            setLyricAnnotationElement
                        }}
                    />
                }
            </div>
        )
    }
}

export default connect(mapStateToProps)(Unit)
