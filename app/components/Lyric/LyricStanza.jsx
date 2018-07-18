// Component to show main stanza, side stanza, and dot stanza for stanza.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import LyricStanzaCard from './LyricStanzaCard'
import LyricStanzaDot from './LyricStanzaDot'
import { TITLE } from '../../constants/lyrics'
import { getLyricUnitArray } from '../../helpers/dataHelper'
import { getPrefixPrependedClassNames } from '../../helpers/domHelper'
import { getPropsAreShallowEqual } from '../../helpers/generalHelper'

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

class LyricStanza extends Component {

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

            /**
             * Provided by Willy the Cocoa, Odin, and Constellations. Provide
             * special formatting for custom sub blocks.
             */
            { unitClassName,

              stanzaTypeIndex,
              stanzaType,
              substanzaType,
              sideStanzaType,
              sideSubstanzaType,

              firstVerseIndex,
              lastVerseIndex,

              subsequent,
              dotStanza,
              substanza,
              topSideStanza,
              bottomSideStanza } = unitMapObject,

            // This exists solely for "Maranatha."
            topSideSubstanza = topSideStanza ?
                topSideStanza[topSideStanza.length - 1].substanza : null,

            isTitleUnit = unitIndex === 0,

            hasSide = !!(topSideStanza || bottomSideStanza),
            isDotOnly = !!dotStanza && unitArray.length === 1,
            isSideBottomOnly = !topSideStanza && Boolean(bottomSideStanza),

            /**
             * If slider touched, compare unit to slider verse. Otherwise,
             * compare to selected verse.
             */
            cursorVerseIndex = sliderVerseIndex > -1 ?
                sliderVerseIndex : renderableVerseIndex,

            cursorAfterStanza = lastVerseIndex < cursorVerseIndex,
            cursorBeforeStanza = firstVerseIndex > cursorVerseIndex,
            cursorInStanza = firstVerseIndex <= cursorVerseIndex &&
                lastVerseIndex >= cursorVerseIndex

        return (
            <LyricStanzaView {...other}
                {...{
                    isTitleUnit,
                    unitClassName,
                    unitIndex,

                    stanzaTypeIndex,
                    unitArray,
                    substanzaType,
                    sideStanzaType,
                    sideSubstanzaType,
                    subsequent,
                    dotStanza,
                    substanza,
                    topSideStanza,
                    bottomSideStanza,
                    topSideSubstanza,
                    hasSide,
                    isDotOnly,
                    isSideBottomOnly,
                    cursorAfterStanza,
                    cursorBeforeStanza,
                    cursorInStanza,
                    stanzaType: isTitleUnit ? TITLE : stanzaType
                }}
            />
        )
    }
}

/****************
 * PRESENTATION *
 ****************/

class LyricStanzaView extends Component {

    static defaultProps = {
        subsequent: false
    }

    static propTypes = {
        // From parent.

        // This is passed just for knowing when to update.
        renderableSongIndex: PropTypes.number.isRequired,

        unitIndex: PropTypes.number.isRequired,
        unitClassName: PropTypes.string,

        isTitleUnit: PropTypes.bool.isRequired,
        isLastStanza: PropTypes.bool.isRequired,

        unitArray: PropTypes.array.isRequired,
        dotStanza: PropTypes.object,
        substanza: PropTypes.array,
        topSideStanza: PropTypes.array,
        bottomSideStanza: PropTypes.array,
        topSideSubstanza: PropTypes.array,
        subsequent: PropTypes.bool.isRequired,

        hasSide: PropTypes.bool.isRequired,
        isDotOnly: PropTypes.bool.isRequired,
        isSideBottomOnly: PropTypes.bool.isRequired,
        cursorBeforeStanza: PropTypes.bool.isRequired,
        cursorAfterStanza: PropTypes.bool.isRequired,
        cursorInStanza: PropTypes.bool.isRequired,

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
                unitIndex,
                unitClassName,

                isTitleUnit,
                isLastStanza,

                dotStanza,
                substanza,
                topSideStanza,
                bottomSideStanza,
                topSideSubstanza,

                hasSide,
                isDotOnly,
                isSideBottomOnly,

                cursorBeforeStanza,
                cursorAfterStanza,
                cursorInStanza,

                ...other
            } = this.props,

            {
                subsequent,
                handleLyricAnnotationSelect,
                setLyricAnnotationRef
            } = other,

            // Left, right, or overlap, or a combination.
            unitClassNames = getPrefixPrependedClassNames(
                unitClassName, 'offset__stanza'
            )

        return (
            <div
                className={cx(
                    'LyricStanza',

                    `unit__${unitIndex}`,

                    unitClassNames,

                    isTitleUnit ? 'fontSize__title' : 'fontSize__verse',

                    { 'LyricStanza__hasSide': hasSide,
                      'LyricStanza__title': isTitleUnit,

                      // It's only ever one of these three.
                      'LyricStanza__verseBefore': cursorBeforeStanza,
                      'LyricStanza__verseAfter': cursorAfterStanza,
                      'LyricStanza__verseIn': cursorInStanza,
                      'fontSize__lyricMultipleColumns': hasSide },

                    subsequent ?
                        'LyricStanza__subsequent' :
                        'LyricStanza__notSubsequent'
                )}
            >
                {!isDotOnly &&
                    <div className={cx(
                        'LyricStanza__column__text',
                        'LyricStanza__column',
                        'LyricStanza__column__main'
                    )}>
                        <LyricStanzaCard {...other}
                            inMain
                            stanzaArray={unitArray}
                            isTruncatable={hasSide}
                        />
                        <LyricStanzaCard {...other}
                            inMain
                            isSubstanza
                            stanzaArray={substanza}
                            isTruncatable={hasSide}
                        />
                    </div>
                }
                {hasSide &&
                    <div className={cx(
                        'LyricStanza__column__text',
                        'LyricStanza__column',
                        'LyricStanza__column__side',
                        { 'LyricStanza__column__sideBottomOnly': isSideBottomOnly }
                    )}>
                        <LyricStanzaCard {...other}
                            stanzaArray={topSideStanza}
                        />
                        <LyricStanzaCard {...other}
                            stanzaArray={bottomSideStanza}
                        />
                        <LyricStanzaCard {...other}
                            isSubstanza
                            stanzaArray={topSideSubstanza}
                        />
                    </div>
                }
                {dotStanza &&
                    <LyricStanzaDot
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

export default connect(mapStateToProps)(LyricStanza)
