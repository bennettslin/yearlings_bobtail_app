// Container for lyric audio button and all lines of a single verse.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import VerseLinesBlock from './verse-lines-block'
import VerseAudioButton from './verse-audio-button'
import VerseAudioIndicator from './verse-audio-indicator'
import { getVerseUnitClassName, getSliderStatusClassName } from '../../helpers/formatHelper'
import { getComponentShouldUpdate } from '../../helpers/generalHelper'

const mapStateToProps = ({
    isSliderTouched,
    renderReadySongIndex
}) => ({
    isSliderTouched,
    renderReadySongIndex
})

/*************
 * CONTAINER *
 *************/

class VerseUnit extends Component {

    static defaultProps = {
        isSelected: false,
        isAfterSelected: false,
        isSliderSelected: false,
        inMain: true,
        inVerseBar: false,
        isSliderTouched: false
    }

    static propTypes = {
        // Through Redux.
        isSliderTouched: PropTypes.bool.isRequired,
        renderReadySongIndex: PropTypes.number.isRequired,

        // From parent.
        verseObject: PropTypes.object.isRequired,
        isSelected: PropTypes.bool.isRequired,
        isAfterSelected: PropTypes.bool.isRequired,
        isSliderSelected: PropTypes.bool.isRequired,
        inMain: PropTypes.bool.isRequired,
        inVerseBar: PropTypes.bool.isRequired,
        handleLyricAnnotationSelect: PropTypes.func,
        handleVerseInteractivate: PropTypes.func
    }

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
                    'renderReadySongIndex',
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

        /* eslint-disable no-unused-vars */
        const { renderReadySongIndex,
        /* eslint-enable no-unused-vars */

                inMain,
                isSliderTouched,
                isSliderSelected,
                isAfterSliderSelected,
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
            verseUnitClassName = getVerseUnitClassName({
                isEven,
                inVerseBar,
                inMain,
                isTitle
            }),
            sliderStatusClassName = getSliderStatusClassName({
                inMain,
                isTitle,
                isSliderTouched,
                isSliderSelected,
                isAfterSliderSelected
            })

        return (
            <VerseUnitView {...other}
                myRef={(node) => (this.myVerse = node)}
                verseIndex={verseIndex}
                verseUnitClassName={verseUnitClassName}
                sliderStatusClassName={sliderStatusClassName}
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

/****************
 * PRESENTATION *
 ****************/

const verseUnitViewDefaultProps = {
    isInteractivated: false
},

verseUnitViewPropTypes = {
    // From parent.
    verseIndex: PropTypes.number,
    isInteractable: PropTypes.bool.isRequired,
    isInteractivated: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isAfterSelected: PropTypes.bool.isRequired,
    verseUnitClassName: PropTypes.string.isRequired,
    sliderStatusClassName: PropTypes.string.isRequired,
    myRef: PropTypes.func.isRequired,

    handleInteractivatableClick: PropTypes.func,
    handleLyricPlay: PropTypes.func,
    handleLyricVerseSelect: PropTypes.func
},

VerseUnitView = ({

    // From controller.
    myRef,
    verseIndex,
    verseUnitClassName,
    sliderStatusClassName,
    isInteractivated,

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
            className={cx(
                'verse',
                isInteractable && 'verse-' + verseIndex,
                verseUnitClassName,
                sliderStatusClassName,
                { 'selected': isSelected,
                  'interactable': isInteractable,
                  'interactivated': isInteractivated }
            )}
            onClick={handleInteractivatableClick}
            onTouchStart={handleInteractivatableClick}
        >
            {isInteractable && (
                <VerseAudioButton
                    isInteractivated={isInteractivated}
                    verseIndex={verseIndex}
                    isSelected={isSelected}
                    isAfterSelected={isAfterSelected}
                    handleLyricPlay={handleLyricPlay}
                    handleLyricVerseSelect={handleLyricVerseSelect}
                />
            )}
            {isInteractable && (
                <VerseAudioIndicator
                    isSelected={isSelected}
                />
            )}

            <VerseLinesBlock {...other} />
        </div>
    )
}

VerseUnitView.defaultProps = verseUnitViewDefaultProps
VerseUnitView.propTypes = verseUnitViewPropTypes

export default connect(mapStateToProps)(VerseUnit)
