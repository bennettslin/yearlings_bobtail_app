/**
 * Component to show main stanza, side stanza, and dot stanza for stanza. It
 * is somewhat misnamed, as it doesn't distinguish between stanza and unit. A
 * stanza encompasses all the cards grouped under a single stanza type and
 * optional index, such as Verse 1 or Bridge. A unit is the basic lyric unit by
 * which I had originally organised the lyric data. A stanza consists of one or
 * more units.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import StanzaCard from './StanzaCard'
import StanzaDot from './StanzaDot'
import { TITLE } from '../../../constants/lyrics'
import { getLyricUnitArray } from '../../../helpers/dataHelper'
import { getPropsAreShallowEqual } from '../../../helpers/generalHelper'

const mapStateToProps = ({
    canLyricRender,
    renderableStore
}) => ({
    canLyricRender,
    renderableSongIndex: renderableStore.renderableSongIndex,
})

/*************
 * CONTAINER *
 *************/

class Stanza extends Component {

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,

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
            { renderableSongIndex } = other,

            unitArray = getLyricUnitArray(renderableSongIndex, unitIndex),

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
            <StanzaView {...other}
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

class StanzaView extends Component {

    static defaultProps = {
        subsequent: false,
        isLastUnit: false
    }

    static propTypes = {
        // From parent.

        // This is passed just for knowing when to update.
        renderableSongIndex: PropTypes.number.isRequired,

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

        handleLyricAnnotationSelect: PropTypes.func.isRequired,
        setLyricAnnotationRef: PropTypes.func.isRequired
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
                renderableSongIndex,
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
                handleLyricAnnotationSelect,
                setLyricAnnotationRef
            } = other

        return (
            <div
                className={cx(
                    'Stanza',

                    `unit__${unitIndex}`,

                    isTitleUnit ? 'fontSize__title' : 'fontSize__verse',

                    { 'Stanza__hasSide': hasSide,
                      'Stanza__title': isTitleUnit,

                      'fontSize__lyricMultipleColumns': hasSide },

                    subsequent ?
                        'Stanza__subsequent' :
                        'Stanza__notSubsequent'
                )}
            >
                {!isDotOnly &&
                    <div className={cx(
                        'Stanza__column__text',
                        'Stanza__column',
                        'Stanza__column__main'
                    )}>
                        <StanzaCard {...other}
                            inMain
                            stanzaArray={unitArray}
                            isTruncatable={hasSide}
                        />
                        <StanzaCard {...other}
                            inMain
                            isSubCard
                            stanzaArray={subCard}
                            isTruncatable={hasSide}
                        />
                    </div>
                }
                {hasSide &&
                    <div className={cx(
                        'Stanza__column__text',
                        'Stanza__column',
                        'Stanza__column__side',
                        { 'Stanza__column__sideBottomOnly': isSideBottomOnly }
                    )}>
                        <StanzaCard {...other}
                            stanzaArray={topSideCard}
                        />
                        <StanzaCard {...other}
                            stanzaArray={bottomSideCard}
                        />
                        <StanzaCard {...other}
                            isSubCard
                            stanzaArray={topSideSubCard}
                        />
                    </div>
                }
                {dotCard &&
                    <StanzaDot
                        isLastUnit={isDotOnly && isLastUnit}
                        dotStanzaObject={dotCard}
                        {...{
                            setLyricAnnotationRef,
                            handleLyricAnnotationSelect
                        }}
                    />
                }
            </div>
        )
    }
}

export default connect(mapStateToProps)(Stanza)
