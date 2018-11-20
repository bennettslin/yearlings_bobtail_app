// Container for lyric audio button and all lines of a single verse.
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import VerseLines from './Lines'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'

import { VERSE_SCROLL } from 'constants/dom'

const mapStateToProps = ({
    renderStore: { canLyricRender },
    renderedStore: { renderedSongIndex }
}) => ({
    canLyricRender,
    renderedSongIndex
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
        canLyricRender: PropTypes.bool.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,

        // From parent.
        verseObject: PropTypes.object.isRequired,
        verseIndex: PropTypes.number,

        inMain: PropTypes.bool.isRequired,
        inVerseBar: PropTypes.bool.isRequired,
        handleLyricAnnotationSelect: PropTypes.func,
        handleVerseInteractivate: PropTypes.func,

        setVerseRef: PropTypes.func
    }

    shouldComponentUpdate(nextProps) {
        const shouldComponentUpdate = nextProps.canLyricRender &&
            !getPropsAreShallowEqual({
                props: this.props,
                nextProps,
                alwaysBypassCheck: {
                    inMain: true,
                    isTruncatable: true,
                    inVerseBar: true
                }
            })

        return shouldComponentUpdate
    }

    _handleInteractivatableClick = (e) => {
        // Allow clicks on interactable verses.
        const {
            verseIndex,
            handleVerseInteractivate
        } = this.props

        if (this.getIsInteractable()) {
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

    setVerseRef = (node) => {
        if (this.getIsInteractable()) {
            this.props.setVerseRef({
                node,
                index: this.props.verseIndex
            })
        }
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                renderedSongIndex,
                canLyricRender,
                handleVerseInteractivate,
                setVerseRef,
                dispatch,
                /* eslint-enable no-unused-vars */

                handleLyricAnnotationSelect,

                ...other
            } = this.props,

            {
                inVerseBar,
                verseObject
            } = other,

            {
                lyric,
                centre,
                isTitle
            } = verseObject,

            isInteractable = this.getIsInteractable()

        return (
            <VerseView {...other}
                setRef={this.setVerseRef}
                handleInteractivatableClick={this._handleInteractivatableClick}
                {...{
                    isTitle,
                    isInteractable,
                    isDoubleSpeaker: !lyric && !centre
                }}
                {
                ...!inVerseBar && {
                    handleAnchorClick: handleLyricAnnotationSelect
                }
                }
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
        logicSelectors: PropTypes.string,
        verseIndex: PropTypes.number,

        inVerseBar: PropTypes.bool.isRequired,
        isInteractable: PropTypes.bool.isRequired,

        handleInteractivatableClick: PropTypes.func,
        setRef: PropTypes.func,

        children: PropTypes.any
    },

    VerseView = ({

        // From controller.
        logicSelectors,
        verseClassName,
        isInteractable,

        handleInteractivatableClick,
        setRef,
        children,

        ...other }) => {

        const {
            inVerseBar,
            verseIndex,
            isTitle
        } = other

        return (
            <div
                key={isInteractable ? verseIndex : undefined}
                ref={setRef}
                className={cx(
                    logicSelectors,
                    'Verse',

                    isTitle && 'Verse__title',
                    inVerseBar ? 'Verse__inBar' : 'Verse__inLyric',

                    !isNaN(verseIndex) &&
                    `${VERSE_SCROLL}__${verseIndex}`,

                    // title, even, odd, inSide.
                    verseClassName && `verse__${verseClassName}`,
                    isInteractable && 'Verse__interactable',

                    'verseColour__hoverParent'
                )}
                onClick={handleInteractivatableClick}
                onTouchStart={handleInteractivatableClick}
            >
                {children}
                <VerseLines {...other} />
            </div>
        )
    }

VerseView.defaultProps = verseViewDefaultProps
VerseView.propTypes = verseViewPropTypes

export default connect(mapStateToProps)(Verse)
