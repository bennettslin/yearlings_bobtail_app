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

                renderableSongIndex,
                renderableVerseIndex,
                sliderVerseIndex,
                unitIndex,
                ...other
            } = this.props,

            unitArray = getLyricUnitArray(renderableSongIndex, unitIndex),

            unitMapObject = unitArray[unitArray.length - 1],

            /**
             * Provided by Willy the Cocoa, Odin, and Constellations. Provide
             * special formatting for custom sub blocks.
             */
            { unitClassName,

              stanzaIndex,
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
            unitVerseIndex = sliderVerseIndex > -1 ?
                sliderVerseIndex : renderableVerseIndex,
            verseAfterUnit = lastVerseIndex < unitVerseIndex,
            verseBeforeUnit = firstVerseIndex > unitVerseIndex,
            verseInUnit = firstVerseIndex <= unitVerseIndex &&
                lastVerseIndex >= unitVerseIndex

        return (
            <LyricStanzaView {...other}
                isTitleUnit={isTitleUnit}
                unitClassName={unitClassName}
                unitIndex={unitIndex}
                stanzaIndex={stanzaIndex}
                unitArray={unitArray}
                stanzaType={isTitleUnit ? TITLE : stanzaType}
                substanzaType={substanzaType}
                sideStanzaType={sideStanzaType}
                sideSubstanzaType={sideSubstanzaType}
                subsequent={subsequent}
                dotStanza={dotStanza}
                substanza={substanza}
                topSideStanza={topSideStanza}
                bottomSideStanza={bottomSideStanza}
                topSideSubstanza={topSideSubstanza}
                hasSide={hasSide}
                isDotOnly={isDotOnly}
                isSideBottomOnly={isSideBottomOnly}
                verseAfterUnit={verseAfterUnit}
                verseBeforeUnit={verseBeforeUnit}
                verseInUnit={verseInUnit}
            />
        )
    }
}

/****************
 * PRESENTATION *
 ****************/

const lyricStanzaViewDefaultProps = {
    subsequent: false
},

lyricStanzaViewPropTypes = {
    // From parent.
    unitArray: PropTypes.array.isRequired,
    isTitleUnit: PropTypes.bool.isRequired,
    unitClassName: PropTypes.string,
    isLastStanza: PropTypes.bool.isRequired,

    dotStanza: PropTypes.object,
    substanza: PropTypes.array,
    topSideStanza: PropTypes.array,
    bottomSideStanza: PropTypes.array,
    topSideSubstanza: PropTypes.array,
    subsequent: PropTypes.bool.isRequired,

    hasSide: PropTypes.bool.isRequired,
    isDotOnly: PropTypes.bool.isRequired,
    isSideBottomOnly: PropTypes.bool.isRequired,
    verseBeforeUnit: PropTypes.bool.isRequired,
    verseAfterUnit: PropTypes.bool.isRequired,
    verseInUnit: PropTypes.bool.isRequired,

    handleLyricAnnotationSelect: PropTypes.func.isRequired,
    setLyricAnnotationRef: PropTypes.func.isRequired
},

LyricStanzaView = ({

    // From props.
    unitArray,

    // From controller.
    isTitleUnit,
    unitClassName,
    unitIndex,
    isLastStanza,
    // sceneIndex,

    dotStanza,
    substanza,
    topSideStanza,
    bottomSideStanza,
    topSideSubstanza,

    hasSide,
    isDotOnly,
    isSideBottomOnly,

    verseBeforeUnit,
    verseAfterUnit,
    verseInUnit,

...other }) => {

    const {
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
                unitIndex && `stanza__${unitIndex}`,
                // sceneIndex && `scene-${sceneIndex}`,

                unitClassNames,

                isTitleUnit ? 'fontSize__title' : 'fontSize__verse',

                { 'LyricStanza__hasSide': hasSide,
                  'LyricStanza__title': isTitleUnit,

                  // It's only ever one of these three.
                  'LyricStanza__verseBefore': verseBeforeUnit,
                  'LyricStanza__verseAfter': verseAfterUnit,
                  'LyricStanza__verseIn': verseInUnit,
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

LyricStanzaView.defaultProps = lyricStanzaViewDefaultProps
LyricStanzaView.propTypes = lyricStanzaViewPropTypes

export default connect(mapStateToProps)(LyricStanza)
