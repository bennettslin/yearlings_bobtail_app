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
import {
    getLyricUnitArray,
    getStanzaIndexForVerseIndex
} from '../../../helpers/dataHelper'
import { getPropsAreShallowEqual } from '../../../helpers/generalHelper'

const mapStateToProps = ({
    canLyricRender,
    renderableStore,
    sliderStore
}) => ({
    canLyricRender,
    renderableSongIndex: renderableStore.renderableSongIndex,
    renderableVerseIndex: renderableStore.renderableVerseIndex,
    sliderVerseIndex: sliderStore.sliderVerseIndex
})

/*************
 * CONTAINER *
 *************/

class Stanza extends Component {

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,
        renderableVerseIndex: PropTypes.number.isRequired,
        sliderVerseIndex: PropTypes.number.isRequired,

        // From parent.
        unitIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canLyricRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps,
            alwaysBypassCheck: {
                isLastStanza: true
            }
        })
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                canLyricRender,
                dispatch,
                /* eslint-enable no-unused-vars */

                renderableVerseIndex,
                sliderVerseIndex,
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
                dotStanza,
                subCard,
                topSideCard,
                bottomSideCard
            } = unitMapObject,

            // This exists solely for "Maranatha."
            topSideSubCard = topSideCard ?
                topSideCard[topSideCard.length - 1].subCard : null,

            isTitleUnit = unitIndex === 0,

            hasSide = Boolean(topSideCard || bottomSideCard),
            isDotOnly = Boolean(dotStanza) && unitArray.length === 1,
            isSideBottomOnly = !topSideCard && Boolean(bottomSideCard),

            /**
             * If slider touched, compare unit to slider verse. Otherwise,
             * compare to selected verse. Same as slider stanza.
             */
            cursorVerseIndex = sliderVerseIndex > -1 ?
                sliderVerseIndex : renderableVerseIndex,

            cursorStanzaIndex = getStanzaIndexForVerseIndex(
                renderableSongIndex, cursorVerseIndex
            ),

            isBeforeCursor = stanzaIndex > cursorStanzaIndex,
            isAfterCursor = stanzaIndex < cursorStanzaIndex,
            isOnCursor = stanzaIndex === cursorStanzaIndex

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
                    dotStanza,
                    subCard,
                    topSideCard,
                    bottomSideCard,
                    topSideSubCard,
                    hasSide,
                    isDotOnly,
                    isSideBottomOnly,
                    isBeforeCursor,
                    isAfterCursor,
                    isOnCursor,
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
        subsequent: false
    }

    static propTypes = {
        // From parent.

        // This is passed just for knowing when to update.
        renderableSongIndex: PropTypes.number.isRequired,

        stanzaIndex: PropTypes.number,
        unitIndex: PropTypes.number.isRequired,

        isTitleUnit: PropTypes.bool.isRequired,
        isLastStanza: PropTypes.bool.isRequired,

        unitArray: PropTypes.array.isRequired,
        dotStanza: PropTypes.object,
        subCard: PropTypes.array,
        topSideCard: PropTypes.array,
        bottomSideCard: PropTypes.array,
        topSideSubCard: PropTypes.array,
        subsequent: PropTypes.bool.isRequired,

        hasSide: PropTypes.bool.isRequired,
        isDotOnly: PropTypes.bool.isRequired,
        isSideBottomOnly: PropTypes.bool.isRequired,

        isAfterCursor: PropTypes.bool.isRequired,
        isBeforeCursor: PropTypes.bool.isRequired,
        isOnCursor: PropTypes.bool.isRequired,

        handleLyricAnnotationSelect: PropTypes.func.isRequired,
        setLyricAnnotationRef: PropTypes.func.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps,
            alwaysBypassCheck: {
                isLastStanza: true
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
                stanzaIndex,
                unitIndex,

                isTitleUnit,
                isLastStanza,

                dotStanza,
                subCard,
                topSideCard,
                bottomSideCard,
                topSideSubCard,

                hasSide,
                isDotOnly,
                isSideBottomOnly,

                isAfterCursor,
                isBeforeCursor,
                isOnCursor,

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

                    !isNaN(stanzaIndex) && `stanza__${stanzaIndex}`,
                    `unit__${unitIndex}`,

                    isTitleUnit ? 'fontSize__title' : 'fontSize__verse',

                    { 'Stanza__hasSide': hasSide,
                      'Stanza__title': isTitleUnit,

                      // It's only ever one of these three.
                      'Stanza__afterCursor': isAfterCursor,
                      'Stanza__beforeCursor': isBeforeCursor,
                      'Stanza__onCursor': isOnCursor,

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
                {dotStanza &&
                    <StanzaDot
                        setLyricAnnotationRef={setLyricAnnotationRef}
                        isLastStanza={isDotOnly && isLastStanza}
                        dotStanzaObject={dotStanza}
                        handleLyricAnnotationSelect={handleLyricAnnotationSelect}
                    />
                }
            </div>
        )
    }
}

export default connect(mapStateToProps)(Stanza)
