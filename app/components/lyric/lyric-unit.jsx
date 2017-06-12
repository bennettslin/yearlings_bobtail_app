// Component to show main stanza, side stanza, and dot stanza for stanza.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import LyricStanza from './lyric-stanza'
import LyricDotStanza from './lyric-dot-stanza'
import { TITLE, LEFT, RIGHT } from '../../constants/lyrics'
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
                    // 'appMounted',
                    'isSliderTouched',
                    'sliderVerseIndex',
                    'isPlaying',
                    'accessedAnnotationIndex',
                    'selectedSongIndex',
                    'selectedAnnotationIndex',
                    'interactivatedVerseIndex',
                    'selectedVerseIndex',
                    'hiddenLyricColumnKey',
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

            { hiddenLyricColumnKey } = other,

            isTitleUnit = unitIndex === 0,

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

            isBottomOnly = !topSideStanza && !!bottomSideStanza,
            topSideSubStanza = topSideStanza ? topSideStanza[topSideStanza.length - 1].subStanza : null,
            isDotOnly = dotStanza && unitArray.length === 1,
            hasSide = topSideStanza || bottomSideStanza,

            // FIXME: Take care of this through CSS.
            truncateMain = hasSide && hiddenLyricColumnKey === LEFT,
            showMain = !isDotOnly && (!hasSide || hiddenLyricColumnKey !== LEFT || truncateMain),

            showSide = hasSide && hiddenLyricColumnKey !== RIGHT

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
                isBottomOnly={isBottomOnly}
                showMain={showMain}
                truncateMain={truncateMain}
                showSide={showSide}
                topSideSubStanza={topSideSubStanza}
            />
        )
    }
}

LyricUnit.propTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired,

    // From parent.
    unitIndex: PropTypes.number.isRequired,
    hiddenLyricColumnKey: PropTypes.string
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

    isBottomOnly,
    truncateMain,
    showMain,
    showSide,

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
            {showMain &&
                <div className="stanza-block">
                    <LyricStanza {...other}
                        stanzaArray={unitArray}
                        truncateMain={truncateMain}
                        inMain={true}
                    />
                    <LyricStanza {...other}
                        stanzaArray={subStanza}
                        truncateMain={truncateMain}
                        inMain={true}
                        addSub={true}
                    />
                </div>
            }
            {showSide &&
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
    subsequent: false,
    truncateMain: false,
    showSide: false
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

    isBottomOnly: PropTypes.bool.isRequired,
    truncateMain: PropTypes.bool.isRequired,
    showMain: PropTypes.bool.isRequired,
    showSide: PropTypes.bool.isRequired
}

export default connect(({
    selectedSongIndex
}) => ({
    selectedSongIndex
}))(LyricUnit)
