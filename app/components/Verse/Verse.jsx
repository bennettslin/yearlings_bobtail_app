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
    appMounted,
    renderReadySongIndex
}) => ({
    appMounted,
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
        appMounted: PropTypes.bool.isRequired,
        renderReadySongIndex: PropTypes.number.isRequired,

        // From parent.
        verseObject: PropTypes.object.isRequired,
        verseIndex: PropTypes.number,

        isOnCursor: PropTypes.bool,
        isAfterCursor: PropTypes.bool,
        isInteractivated: PropTypes.bool,

        inMain: PropTypes.bool.isRequired,
        inVerseBar: PropTypes.bool.isRequired,
        handleLyricAnnotationSelect: PropTypes.func,
        handleVerseInteractivate: PropTypes.func,
        handleSetVerseElement: PropTypes.func,

        getVerseRef: PropTypes.func
    }

    constructor(props) {
        super(props)

        this._handleInteractivatableClick = this._handleInteractivatableClick.bind(this)
        this.getVerseRef = this.getVerseRef.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    // TODO: Possible to update without selected song index?
                    'appMounted',
                    'renderReadySongIndex',
                    'verseIndex',

                    'isOnCursor',
                    'isAfterCursor',
                    'isInteractivated'
                ]
            })

        return componentShouldUpdate
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.isOnCursor) {
            this._handleSetVerseElement(this.props)
        }

        if (this.props.appMounted && !prevProps.appMounted) {
            this._handleSetVerseElement(this.props)
        }
    }

    _handleSetVerseElement(props = this.props) {
        if (props.isOnCursor) {
            this.props.handleSetVerseElement(
                this.myVerse
            )
        }
    }

    _handleInteractivatableClick(e) {
        // Allow clicks on interactable verses.
        const { verseIndex,
                inVerseBar,
                handleVerseInteractivate } = this.props

        if (!isNaN(verseIndex) && !inVerseBar) {
            handleVerseInteractivate(e, verseIndex)
        }
    }

    getIsInteractable() {
        const {
            inVerseBar,
            verseIndex
        } = this.props

        return !isNaN(verseIndex) && !inVerseBar
    }

    getVerseRef(node) {
        if (this.getIsInteractable()) {
            this.myVerse = node
            this.props.getVerseRef(node, this.props.verseIndex)
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
              verseIndex,
              verseObject } = other,

            { lyric,
              centre,
              isTitle } = verseObject,

            isInteractable = this.getIsInteractable(),

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
                getRef={this.getVerseRef}
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

    handleInteractivatableClick: PropTypes.func,
    handleLyricPlay: PropTypes.func,
    handleLyricVerseSelect: PropTypes.func,
    getRef: PropTypes.func,

    children: PropTypes.any
},

VerseView = ({

    // From controller.
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
    getRef,

    children,

...other }) => {

    const { inVerseBar } = other,

        cursorStatusClassName = hasCursorStyling && getCursorStatusClassName({
            isOnCursor,
            isAfterCursor
        })

    return (
        <div
            ref={getRef}
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
