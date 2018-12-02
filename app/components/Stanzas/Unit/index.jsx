/**
 * Component to show main card, side card, and dot card for a unit. A unit is
 * the basic unit by which the lyric data is organised. A stanza is made up of
 * one or more units. But a unit can also stand alone, such as the title unit,
 * or the last dot card.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import UnitCard from './Card'
import UnitDot from './Dot'

import { TITLE } from 'constants/lyrics'
import { getLyricUnitArray } from './helper'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'
import { getParentOfVerseClassNamesForIndices } from '../helper'

const mapStateToProps = ({
    renderStore: { canLyricRender },
    renderedStore: { renderedSongIndex }
}) => ({
    canLyricRender,
    renderedSongIndex
})

/*************
 * CONTAINER *
 *************/

class Unit extends Component {

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,

        // From parent.
        unitIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canLyricRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps,
            alwaysBypassCheck: {
                isLastUnit: true
            }
        })
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                canLyricRender,
                dispatch,
                /* eslint-enable no-unused-vars */

                unitIndex,
                ...other
            } = this.props,

            // Pass to lyric stanza view so it knows to update.
            { renderedSongIndex } = other,

            unitArray = getLyricUnitArray(renderedSongIndex, unitIndex),

            unitMapObject = unitArray[unitArray.length - 1],

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
            } = unitMapObject,

            // This exists solely for "Maranatha."
            topSideSubCard = topSideCard ?
                topSideCard[topSideCard.length - 1].subCard : null,

            isTitleUnit = unitIndex === 0,

            hasSide = Boolean(topSideCard || bottomSideCard),
            isDotOnly = Boolean(dotCard) && unitArray.length === 1,
            isSideBottomOnly = !topSideCard && Boolean(bottomSideCard)

        return (
            <UnitView {...other}
                {...{
                    isTitleUnit,
                    unitIndex,

                    stanzaIndex,
                    stanzaTypeIndex,
                    unitArray,
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

class UnitView extends Component {

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

        unitArray: PropTypes.array.isRequired,
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

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps,
            alwaysBypassCheck: {
                isLastUnit: true
            }
        })
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                renderedSongIndex,
                /* eslint-enable no-unused-vars */

                // From props.
                unitArray,

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
                    getParentOfVerseClassNamesForIndices({
                        entities: unitArray
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
                            stanzaArray={unitArray}
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
