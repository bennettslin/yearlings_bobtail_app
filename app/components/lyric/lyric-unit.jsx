// Component to show main stanza, side stanza, and dot stanza for stanza.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import LyricStanza from './lyric-stanza'
import LyricDotStanza from './lyric-dot-stanza'
import { TITLE } from '../../constants/lyrics'
import { getLyricsUnitArray } from '../../helpers/data-helper'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

/*************
 * CONTAINER *
 *************/

class LyricUnit extends Component {

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'deviceIndex',
                    'isSliderTouched',
                    'sliderVerseIndex',
                    'isPlaying',
                    'accessedAnnotationIndex',
                    'selectedSongIndex',
                    'selectedAnnotationIndex',
                    'interactivatedVerseIndex',
                    'selectedVerseIndex',
                    'unitIndex'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { selectedSongIndex,
                unitIndex,
                ...other } = this.props,

            unitArray = getLyricsUnitArray(selectedSongIndex, unitIndex),

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

              subsequent,
              dotStanza,
              subStanza,
              topSideStanza,
              bottomSideStanza } = unitArray[unitArray.length - 1],

            // This exists solely for "Maranatha."
            topSideSubStanza = topSideStanza ?
                topSideStanza[topSideStanza.length - 1].subStanza : null,

            isTitleUnit = unitIndex === 0,

            hasSide = !!(topSideStanza || bottomSideStanza),
            isDotOnly = !!dotStanza && unitArray.length === 1,
            isBottomOnly = !topSideStanza && !!bottomSideStanza


        return (
            <LyricUnitView {...other}
                isTitleUnit={isTitleUnit}
                unitClassName={unitClassName}
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
            />
        )
    }
}

LyricUnit.propTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired,

    // From parent.
    unitIndex: PropTypes.number.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const LyricUnitView = ({

    // From props.
    unitArray,

    // From controller.
    isTitleUnit,
    unitClassName,

    dotStanza,
    subStanza,
    topSideStanza,
    bottomSideStanza,
    topSideSubStanza,

    hasSide,
    isDotOnly,
    isBottomOnly,

...other }) => {

    const { subsequent } = other

    return (
        <div
            className={classnames(
                'lyric-unit',
                unitClassName,
                { 'title-unit': isTitleUnit,
                  'custom-sub-block': unitClassName,
                  subsequent }
            )}
        >
            {!isDotOnly &&
                <div className={classnames(
                    'stanza-block',
                    'main'
                )}>
                    <LyricStanza {...other}
                        stanzaArray={unitArray}
                        truncatableMain={hasSide}
                        inMain={true}
                    />
                    <LyricStanza {...other}
                        stanzaArray={subStanza}
                        truncatableMain={hasSide}
                        inMain={true}
                        addSub={true}
                    />
                </div>
            }
            {hasSide &&
                <div className={classnames(
                    'stanza-block',
                    'side',
                    { 'bottom-only': isBottomOnly }
                )}>
                    <LyricStanza {...other}
                        stanzaArray={topSideStanza}
                    />
                    <LyricStanza {...other}
                        stanzaArray={bottomSideStanza}
                    />
                    <LyricStanza {...other}
                        stanzaArray={topSideSubStanza}
                        addSub={true}
                    />
                </div>
            }
            {dotStanza &&
                <LyricDotStanza {...other}
                    dotStanzaObject={dotStanza}
                />
            }
        </div>
    )
}

LyricUnitView.defaultProps = {
    subsequent: false
}

LyricUnitView.propTypes = {
    // From parent.
    unitArray: PropTypes.array.isRequired,
    isTitleUnit: PropTypes.bool.isRequired,
    unitClassName: PropTypes.string,

    dotStanza: PropTypes.object,
    subStanza: PropTypes.array,
    topSideStanza: PropTypes.array,
    bottomSideStanza: PropTypes.array,
    topSideSubStanza: PropTypes.array,
    subsequent: PropTypes.bool.isRequired,

    hasSide: PropTypes.bool.isRequired,
    isDotOnly: PropTypes.bool.isRequired,
    isBottomOnly: PropTypes.bool.isRequired
}

export default connect(({
    selectedSongIndex
}) => ({
    selectedSongIndex
}))(LyricUnit)
