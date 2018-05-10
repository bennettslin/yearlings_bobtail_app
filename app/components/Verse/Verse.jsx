// Container for lyric audio button and all lines of a single verse.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import VerseLines from './VerseLines'
import VerseAudio from './VerseAudio/VerseAudio'

import { getVerseUnitClassName, getCursorStatusClassName } from '../../helpers/formatHelper'
import { getComponentShouldUpdate } from '../../helpers/generalHelper'

const mapStateToProps = ({
    renderReadySongIndex
}) => ({
    renderReadySongIndex
})

/*************
 * CONTAINER *
 *************/

class Verse extends Component {

    static defaultProps = {
        inMain: true,
        inVerseBar: false
    }

    static propTypes = {
        // Through Redux.
        renderReadySongIndex: PropTypes.number.isRequired,

        // From parent.
        barVerseIndex: PropTypes.number,
        verseObject: PropTypes.object.isRequired,

        isOnCursor: PropTypes.bool,
        isAfterCursor: PropTypes.bool,
        isInteractivated: PropTypes.bool,

        inMain: PropTypes.bool.isRequired,
        inVerseBar: PropTypes.bool.isRequired,
        handleLyricAnnotationSelect: PropTypes.func,
        handleVerseInteractivate: PropTypes.func,
        handleVerseElementSelect: PropTypes.func,
        handleVerseElementSelectOrSlide: PropTypes.func
    }

    constructor(props) {
        super(props)

        this._handleInteractivatableClick = this._handleInteractivatableClick.bind(this)
    }

    componentDidMount() {

        // TODO: Make this a more general case where this is called when song is selected.
        // if (this.props.isOnCursor) {
        //     this.props.handleVerseElementSelect(this.myVerse)
        // }

        this._handleVerseElementSelectOrSlide(this.props)
    }

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    // TODO: Possible to update without selected song index?
                    'renderReadySongIndex',

                    'isOnCursor',
                    'isAfterCursor',
                    'isInteractivated',
                    {
                        staticProp: 'inVerseBar',
                        subUpdatingKey: 'barVerseIndex'
                    }
                ]
            })

        return componentShouldUpdate
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.isOnCursor) {
            this._handleVerseElementSelectOrSlide(nextProps)
        }
    }

    _handleVerseElementSelectOrSlide(props = this.props) {
        if (props.isOnCursor) {
            this.props.handleVerseElementSelectOrSlide(this.myVerse)
        }
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
                handleLyricAnnotationSelect,
                ...other } = this.props,

            { inVerseBar,
              verseObject } = other,

            { lyric,
              centre,
              isTitle,
              verseIndex } = verseObject,

            isInteractable = !isNaN(verseIndex) && !inVerseBar,

            // If not an interactable verse, we'll count it as odd.
            isEven = isInteractable && verseIndex % 2 === 0,
            verseClassName = getVerseUnitClassName({
                isEven,
                inVerseBar,
                inMain,
                isTitle
            }),
            hasCursorStyling = inMain && !isTitle

        return (
            <VerseView {...other}
                myRef={(node) => (this.myVerse = node)}
                verseIndex={verseIndex}
                isTitle={isTitle}
                isDoubleSpeaker={!lyric && !centre}
                isInteractable={isInteractable}
                verseClassName={verseClassName}
                hasCursorStyling={hasCursorStyling}
                handleAnchorClick={handleLyricAnnotationSelect}
                handleInteractivatableClick={this._handleInteractivatableClick}
            />
        )
    }
}

/****************
 * PRESENTATION *
 ****************/

const verseViewDefaultProps = {
    isInteractivated: false
},

verseViewPropTypes = {
    // From parent.
    inVerseBar: PropTypes.bool.isRequired,
    verseIndex: PropTypes.number,
    verseClassName: PropTypes.string.isRequired,
    isInteractable: PropTypes.bool.isRequired,

    hasCursorStyling: PropTypes.bool.isRequired,
    isOnCursor: PropTypes.bool,
    isAfterCursor: PropTypes.bool,
    isInteractivated: PropTypes.bool,

    myRef: PropTypes.func.isRequired,
    handleInteractivatableClick: PropTypes.func,
    handleLyricPlay: PropTypes.func,
    handleLyricVerseSelect: PropTypes.func,

    children: PropTypes.any
},

VerseView = ({

    // From controller.
    myRef,
    verseIndex,
    verseClassName,
    isInteractable,

    hasCursorStyling,
    isOnCursor,
    isAfterCursor,
    isInteractivated,

    handleInteractivatableClick,
    handleLyricPlay,
    handleLyricVerseSelect,

    children,

...other }) => {

    const { inVerseBar } = other,

        cursorStatusClassName = hasCursorStyling && getCursorStatusClassName({
            isOnCursor,
            isAfterCursor
        })

    return (
        <div
            ref={myRef}
            className={cx(
                'Verse',
                // 'textShadow__background',
                isInteractable &&
                    `Verse__scrollChild__${verseIndex}`,

                inVerseBar ? 'Verse__inBar' : 'Verse__inLyric',

                // title, even, odd, inSide.
                verseClassName && `verse__${verseClassName}`,

                // onCursor, beforeCursor, or afterCursor.
                hasCursorStyling && `verse__${cursorStatusClassName}`,

                // Shared styling with SliderVerse.
                { 'verse__interactable': isInteractable,
                  'verse__interactivated': isInteractivated }
            )}
            onClick={handleInteractivatableClick}
            onTouchStart={handleInteractivatableClick}
        >
            {children}
            {isInteractable && (
                <VerseAudio
                    verseIndex={verseIndex}
                    isInteractivated={isInteractivated}
                    isSelected={isOnCursor}
                    isAfterSelected={isAfterCursor}
                    handleLyricPlay={handleLyricPlay}
                    handleLyricVerseSelect={handleLyricVerseSelect}
                />
            )}

            <VerseLines {...other} />
        </div>
    )
}

VerseView.defaultProps = verseViewDefaultProps
VerseView.propTypes = verseViewPropTypes

export default connect(mapStateToProps)(Verse)
