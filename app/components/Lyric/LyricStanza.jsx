// Component to show main stanza, side stanza, and dot stanza for stanza.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import LyricStanzaText from './LyricStanzaText'
import LyricStanzaDot from './LyricStanzaDot'
import { TITLE } from '../../constants/lyrics'
import { getLyricUnitArray } from '../../helpers/dataHelper'
import { getComponentShouldUpdate } from '../../helpers/generalHelper'

const mapStateToProps = ({
    renderReadySongIndex,
    selectedVerseIndex,
    sliderVerseIndex
}) => ({
    renderReadySongIndex,
    selectedVerseIndex,
    sliderVerseIndex
})

/*************
 * CONTAINER *
 *************/

class LyricStanza extends Component {

    static propTypes = {
        // Through Redux.
        renderReadySongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        sliderVerseIndex: PropTypes.number.isRequired,

        // From parent.
        unitIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'unitIndex',
                    'renderReadySongIndex',
                    'selectedVerseIndex',
                    'sliderVerseIndex'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { renderReadySongIndex,
                selectedVerseIndex,
                sliderVerseIndex,
                unitIndex,
                ...other } = this.props,

            unitArray = getLyricUnitArray(renderReadySongIndex, unitIndex),

            unitMapObject = unitArray[unitArray.length - 1],

            /**
             * Provided by Willy the Cocoa, Odin, and Constellations. Provide
             * special formatting for custom sub blocks.
             */
            { unitClassName,
              sceneIndex,

              stanzaIndex,
              stanzaType,
              substanzaType,
              sideStanzaType,
              sideSubstanzaType,

              firstVerseIndex,
              lastVerseIndex,

              subsequent,
              dotStanza,
              subStanza,
              topSideStanza,
              bottomSideStanza } = unitMapObject,

            // This exists solely for "Maranatha."
            topSideSubStanza = topSideStanza ?
                topSideStanza[topSideStanza.length - 1].subStanza : null,

            isTitleUnit = unitIndex === 0,

            hasSide = !!(topSideStanza || bottomSideStanza),
            isDotOnly = !!dotStanza && unitArray.length === 1,
            isBottomOnly = !topSideStanza && !!bottomSideStanza,

            /**
             * If slider touched, compare unit to slider verse. Otherwise,
             * compare to selected verse.
             */
            unitVerseIndex = sliderVerseIndex > -1 ?
                sliderVerseIndex : selectedVerseIndex,
            verseAfterUnit = lastVerseIndex < unitVerseIndex,
            verseBeforeUnit = firstVerseIndex > unitVerseIndex,
            verseInUnit = firstVerseIndex <= unitVerseIndex &&
                lastVerseIndex >= unitVerseIndex

        return (
            <LyricUnitView {...other}
                isTitleUnit={isTitleUnit}
                unitClassName={unitClassName}
                sceneIndex={sceneIndex}
                unitIndex={unitIndex}
                stanzaIndex={stanzaIndex}
                unitArray={unitArray}
                stanzaType={isTitleUnit ? TITLE : stanzaType}
                substanzaType={substanzaType}
                sideStanzaType={sideStanzaType}
                sideSubstanzaType={sideSubstanzaType}
                subsequent={subsequent}
                dotStanza={dotStanza}
                subStanza={subStanza}
                topSideStanza={topSideStanza}
                bottomSideStanza={bottomSideStanza}
                topSideSubStanza={topSideSubStanza}
                hasSide={hasSide}
                isDotOnly={isDotOnly}
                isBottomOnly={isBottomOnly}
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

const lyricUnitViewDefaultProps = {
    subsequent: false
},

lyricUnitViewPropTypes = {
    // From parent.
    unitArray: PropTypes.array.isRequired,
    isTitleUnit: PropTypes.bool.isRequired,
    unitClassName: PropTypes.string,
    sceneIndex: PropTypes.number,

    dotStanza: PropTypes.object,
    subStanza: PropTypes.array,
    topSideStanza: PropTypes.array,
    bottomSideStanza: PropTypes.array,
    topSideSubStanza: PropTypes.array,
    subsequent: PropTypes.bool.isRequired,

    hasSide: PropTypes.bool.isRequired,
    isDotOnly: PropTypes.bool.isRequired,
    isBottomOnly: PropTypes.bool.isRequired,
    verseBeforeUnit: PropTypes.bool.isRequired,
    verseAfterUnit: PropTypes.bool.isRequired,
    verseInUnit: PropTypes.bool.isRequired,

    handleLyricAnnotationSelect: PropTypes.func.isRequired
},

LyricUnitView = ({

    // From props.
    unitArray,

    // From controller.
    isTitleUnit,
    unitClassName,
    unitIndex,
    sceneIndex,

    dotStanza,
    subStanza,
    topSideStanza,
    bottomSideStanza,
    topSideSubStanza,

    hasSide,
    isDotOnly,
    isBottomOnly,

    verseBeforeUnit,
    verseAfterUnit,
    verseInUnit,

...other }) => {

    const { subsequent,
            handleLyricAnnotationSelect } = other

    return (
        <div
            className={cx(
                'LyricStanza',
                unitIndex && `unit-${unitIndex}`,
                sceneIndex && `scene-${sceneIndex}`,
                unitClassName,
                { 'has-side': hasSide,
                  'custom-sub-block': unitClassName,
                  'title-unit': isTitleUnit,

                  // It's only ever one of these three.
                  'verse-before-unit': verseBeforeUnit,
                  'verse-after-unit': verseAfterUnit,
                  'verse-in-unit': verseInUnit,

                  subsequent }
            )}
        >
            {!isDotOnly &&
                <div className={cx(
                    'stanza-block',
                    'main'
                )}>
                    <LyricStanzaText {...other}
                        stanzaArray={unitArray}
                        truncatableMain={hasSide}
                        inMain
                    />
                    <LyricStanzaText {...other}
                        stanzaArray={subStanza}
                        truncatableMain={hasSide}
                        inMain
                        addSub
                    />
                </div>
            }
            {hasSide &&
                <div className={cx(
                    'stanza-block',
                    'side',
                    { 'bottom-only': isBottomOnly }
                )}>
                    <LyricStanzaText {...other}
                        stanzaArray={topSideStanza}
                    />
                    <LyricStanzaText {...other}
                        stanzaArray={bottomSideStanza}
                    />
                    <LyricStanzaText {...other}
                        stanzaArray={topSideSubStanza}
                        addSub
                    />
                </div>
            }
            {dotStanza &&
                <LyricStanzaDot
                    dotStanzaObject={dotStanza}
                    handleLyricAnnotationSelect={handleLyricAnnotationSelect}
                />
            }
        </div>
    )
}

LyricUnitView.defaultProps = lyricUnitViewDefaultProps
LyricUnitView.propTypes = lyricUnitViewPropTypes

export default connect(mapStateToProps)(LyricStanza)
