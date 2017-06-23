// Container for lyric audio button and all lines of a single verse.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import VerseLinesBlock from './verse-lines-block'
import VerseAudioButton from './verse-audio-button'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

/*************
 * CONTAINER *
 *************/

class VerseUnit extends Component {

    constructor(props) {
        super(props)

        this._checkIsSelectedVerse = this._checkIsSelectedVerse.bind(this)
        this._checkIsSliderSelectedVerse = this._checkIsSliderSelectedVerse.bind(this)
        this._handleInteractivatableClick = this._handleInteractivatableClick.bind(this)
    }

    componentDidMount() {
        this._checkIsSelectedVerse(this.props)
    }

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'deviceIndex',
                    'isSliderTouched',

                    // TODO: Possible to update without selected song index?
                    'selectedSongIndex',
                    'inMain',
                    'isSelected',
                    'isAfterSelected',
                    'isSliderSelected',
                    'isAfterSliderSelected',
                    'isInteractivated',
                    {
                        staticProp: 'inVerseBar',
                        subUpdatingKey: 'barVerseIndex'
                    }
                ]
            })

        return componentShouldUpdate
    }

    componentDidUpdate(prevProps) {
        const { props } = this

        this._checkIsSelectedVerse(props)

        if (props.isSliderSelected && !prevProps.isSliderSelected) {
            this._checkIsSliderSelectedVerse(props)
        }
    }

    _checkIsSelectedVerse(props) {
        if (props.isSelected) {
            props.handleVerseElementSelect(this.myVerse)
        }
    }

    _checkIsSliderSelectedVerse(props) {
        props.handleVerseElementSlide(this.myVerse)
    }

    _getBackgroundClassName({
        isEven,
        inVerseBar,
        inMain,
        isTitle
    }) {

        if (!inVerseBar) {
            if (isTitle) {
                return 'title'
            } else if (inMain) {
                return isEven ? 'even' : 'odd'
            } else {
                return 'in-side'
            }
        }

        return ''
    }

    _getSliderPlacementClassName({
        inMain,
        isTitle,
        isSliderTouched,
        isSliderSelected,
        isAfterSliderSelected
    }) {

        if (isSliderTouched && inMain && !isTitle) {
            if (isSliderSelected) {
                return 'on-slider'

            } else if (isAfterSliderSelected) {
                return 'after-slider'

            } else {
                return 'before-slider'
            }
        }

        return ''
    }

    _handleInteractivatableClick(e) {
        // Allow clicks on interactable verses.
        const { verseObject,
                inVerseBar,
                handleVerseInteractivate } = this.props,

            { verseIndex } = verseObject

        if (!isNaN(verseIndex) && !inVerseBar) {
            handleVerseInteractivate(e, verseIndex)
        }
    }

    render() {
        const { inMain,
                isSliderTouched,
                isSliderSelected,
                isAfterSliderSelected,
                isInteractivated,
                handleLyricAnnotationSelect,
                ...other } = this.props,

            { inVerseBar,
              verseObject,
              isSelected } = other,

            { lyric,
              centre,
              isTitle,
              verseIndex } = verseObject,

            isInteractable = !isNaN(verseIndex) && !inVerseBar,

            // If not an interactable verse, we'll count it as odd.
            isEven = isInteractable && verseIndex % 2 === 0,
            backgroundClassName = this._getBackgroundClassName({
                isEven,
                inVerseBar,
                inMain,
                isTitle
            }),
            sliderPlacementClassName = this._getSliderPlacementClassName({
                inMain,
                isTitle,
                isSliderTouched,
                isSliderSelected,
                isAfterSliderSelected
            }),
            interactivatedClassName = isInteractivated ? 'interactivated' : 'not-interactivated',

            // FIXME: Is this needed?
            verseIndexClassName = `${inVerseBar ? 'bar-' : ''}${isInteractable ? 'verse-' + verseIndex : ''}`

        return (
            <VerseUnitView {...other}
                myRef={(node) => (this.myVerse = node)}
                verseIndex={verseIndex}
                verseIndexClassName={verseIndexClassName}
                backgroundClassName={backgroundClassName}
                isAudioButtonEnabled={isInteractivated}
                sliderPlacementClassName={sliderPlacementClassName}
                interactivatedClassName={interactivatedClassName}
                isTitle={isTitle}
                isDoubleSpeaker={!lyric && !centre}
                isSelected={isSelected}
                isSliderSelected={isSliderSelected}
                isInteractable={isInteractable}
                handleAnchorClick={handleLyricAnnotationSelect}
                handleInteractivatableClick={this._handleInteractivatableClick}
            />
        )
    }
}

VerseUnit.defaultProps = {
    isSelected: false,
    isAfterSelected: false,
    isSliderSelected: false,
    isInteractivated: false,
    inMain: true,
    inVerseBar: false,
    isSliderTouched: false
}

VerseUnit.propTypes = {
    // Through Redux.
    isSliderTouched: PropTypes.bool.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,

    // From parent.
    verseObject: PropTypes.object.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isAfterSelected: PropTypes.bool.isRequired,
    isSliderSelected: PropTypes.bool.isRequired,
    isInteractivated: PropTypes.bool.isRequired,
    inMain: PropTypes.bool.isRequired,
    inVerseBar: PropTypes.bool.isRequired,
    handleLyricAnnotationSelect: PropTypes.func,
    handleVerseInteractivate: PropTypes.func
}

/****************
 * PRESENTATION *
 ****************/

const VerseUnitView = ({

    // From controller.
    myRef,
    verseIndex,
    verseIndexClassName,
    backgroundClassName,
    sliderPlacementClassName,
    interactivatedClassName,

    isAudioButtonEnabled,
    isInteractable,
    isSelected,
    isAfterSelected,

    handleInteractivatableClick,
    handleLyricPlay,
    handleLyricVerseSelect,

...other }) => {

    return (
        <div
            ref={myRef}
            className={classnames(
                'verse',
                verseIndexClassName,
                backgroundClassName,
                interactivatedClassName,
                sliderPlacementClassName,
                { 'selected': isSelected,
                  'interactable': isInteractable }
            )}
            onClick={handleInteractivatableClick}
        >
            {isInteractable &&
                <VerseAudioButton
                    isAudioButtonEnabled={isAudioButtonEnabled}
                    verseIndex={verseIndex}
                    isSelected={isSelected}
                    isAfterSelected={isAfterSelected}
                    handleLyricPlay={handleLyricPlay}
                    handleLyricVerseSelect={handleLyricVerseSelect}
                />
            }
            <VerseLinesBlock {...other} />
        </div>
    )
}

VerseUnitView.propTypes = {
    // From parent.
    verseIndex: PropTypes.number,
    isTitle: PropTypes.bool,
    inVerseBar: PropTypes.bool,
    isAudioButtonEnabled: PropTypes.bool.isRequired,
    isInteractable: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isAfterSelected: PropTypes.bool.isRequired,
    verseIndexClassName: PropTypes.string.isRequired,
    backgroundClassName: PropTypes.string.isRequired,
    sliderPlacementClassName: PropTypes.string.isRequired,
    interactivatedClassName: PropTypes.string.isRequired,
    myRef: PropTypes.func.isRequired,

    handleInteractivatableClick: PropTypes.func,
    handleLyricPlay: PropTypes.func,
    handleLyricVerseSelect: PropTypes.func
}

export default connect(({
    isSliderTouched,
    selectedSongIndex
}) => ({
    isSliderTouched,
    selectedSongIndex
}))(VerseUnit)
