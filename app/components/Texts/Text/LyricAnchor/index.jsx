// Container for text anchor.

import React, { Component, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import AnnotationDispatcher from '../../../../handlers/AnnotationHandler/Dispatcher'
import StopPropagationDispatcher from '../../../../dispatchers/StopPropagationDispatcher'
import WikiDispatcher from '../../../../handlers/WikiHandler/Dispatcher'
import AnchorText from '../../../Anchor/AnchorText'
import Texts from '../../'

import { getPropsAreShallowEqual } from 'helpers/general'

import { LYRIC_ANNOTATION_SCROLL } from 'constants/dom'

const mapStateToProps = ({
    renderStore: { canLyricRender },
    renderedStore: {
        renderedSongIndex,
        renderedAnnotationIndex
    },
    toggleStore: {
        isAccessOn,
        isCarouselShown,
        isDotsSlideShown,
        isLyricExpanded
    },
    accessStore: {
        accessedAnnotationIndex,
        accessedWikiWormholeIndex
    },
    sessionStore: { interactivatedVerseIndex }
}) => ({
    canLyricRender,
    renderedAnnotationIndex,

    // This is just to know when to update.
    renderedSongIndex,

    isLyricExpanded,
    accessedAnnotationIndex,
    accessedWikiWormholeIndex,
    isAccessOn,
    isCarouselShown,
    isDotsSlideShown,
    interactivatedVerseIndex
})

class TextLyricAnchor extends Component {

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,
        renderedAnnotationIndex: PropTypes.number.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        accessedWikiWormholeIndex: PropTypes.number.isRequired,

        isAccessOn: PropTypes.bool.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,

        wikiIndex: PropTypes.number,
        wikiAnnotationIndex: PropTypes.number,
        annotationIndex: PropTypes.number,

        // From parent.
        showAccessInPopupAnnotation: PropTypes.bool,
        text: PropTypes.oneOfType([
            PropTypes.string,

            // "Bobtail's words" in M is an array.
            PropTypes.array,

            // "Ubermensch" in Golden Cord is an object.
            PropTypes.object

        ]).isRequired,
        dotKeys: PropTypes.object,
        setLyricAnnotationElement: PropTypes.func
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canLyricRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    _handleAnchorClick = (e) => {
        const {
                renderedAnnotationIndex,
                annotationIndex,
                wikiIndex,
                wikiAnnotationIndex
            } = this.props,

            isSelected = annotationIndex === renderedAnnotationIndex

        if (!isSelected) {

            if (wikiIndex) {
                this.dispatchWiki(
                    wikiIndex,
                    wikiAnnotationIndex
                )
            }

            if (annotationIndex) {
                /**
                 * Because we have to check to stop propagation here, we will
                 * continue to dispatch annotation index directly, rather than
                 * sending a queued event to do so.
                 */
                if (this.dispatchAnnotationIndex({
                    selectedAnnotationIndex: annotationIndex
                })) {
                    /**
                     * The text lyric anchor itself does not know if it cannot
                     * be selected due to no dots selected. So if the dispatch
                     * was successful, it will stop propagation. Otherwise, it
                     * will behave as if plain text was clicked.
                     */
                    this.dispatchStopPropagation(e)
                }
            }
        }
    }

    setLyricAnnotationElement = (node) => {

        // This method is only passed down by stanza, not carousel annotation.
        if (this.props.setLyricAnnotationElement) {
            this.props.setLyricAnnotationElement({
                node,
                index: this.props.annotationIndex
            })
        }
    }

    render() {

        const {
                /* eslint-disable no-unused-vars */
                canLyricRender,
                renderedSongIndex,
                handleAnchorClick,
                setLyricAnnotationElement,
                dispatch,
                /* eslint-enable no-unused-vars */

                annotationIndex,
                renderedAnnotationIndex,
                accessedAnnotationIndex,
                accessedWikiWormholeIndex,

                isAccessOn,
                isCarouselShown,
                isDotsSlideShown,
                interactivatedVerseIndex,
                isLyricExpanded,

                wikiIndex,
                wikiAnnotationIndex,
                text,
                dotKeys,
                showAccessInPopupAnnotation,

                ...other
            } = this.props,

            isSelected = annotationIndex === renderedAnnotationIndex,

            isWikiTextAnchor = Boolean(wikiIndex)

        let
            isAccessed =

                isAccessOn &&

                /**
                 * TODO: This conditional is repeated in Carousel,
                 * UnitDot, and TextLyricAnchor. TextLyricAnchor is a little
                 * different.
                 */
                !isDotsSlideShown &&
                interactivatedVerseIndex < 0 &&

                // Let popup annotation show anchors when carousel is hidden.
                (
                    Boolean(isCarouselShown) ===
                        !showAccessInPopupAnnotation ||

                    isLyricExpanded
                )

        /**
         * If any of the previous conditions ruled out isAccessed, it is ruled
         * out for good.
         */
        if (isAccessed) {
            if (renderedAnnotationIndex) {
                isAccessed =
                    // Check that we're in the annotation that's selected.
                    renderedAnnotationIndex === wikiAnnotationIndex &&

                    accessedWikiWormholeIndex === wikiIndex

            } else {
                isAccessed =
                    accessedAnnotationIndex === annotationIndex
            }
        }

        const words = isWikiTextAnchor ? text.split(' ') : [text]

        return (
            <___>
                {/* This space will not show if it starts the verse line. */}
                {' '}
                <span
                    key={annotationIndex}
                    ref={this.setLyricAnnotationElement}
                    className={cx(
                        annotationIndex &&
                            `${LYRIC_ANNOTATION_SCROLL}__${annotationIndex}`,

                        wikiIndex && `wiki__${wikiIndex}`
                    )}
                >
                    <AnchorText
                        {...{
                            text: words.map((word, index) => (
                                <Texts {...other}
                                    key={index}
                                    isTextAnchor
                                    {...{
                                        text: word
                                    }}
                                />
                            )),
                            sequenceDotKeys: dotKeys,
                            doBypassStopPropagation: !isWikiTextAnchor,
                            isWikiTextAnchor,
                            isAccessed,
                            isSelected,
                            handleAnchorClick: this._handleAnchorClick
                        }}
                    />
                </span>
                <AnnotationDispatcher {...{ parentThis: this }} />
                <StopPropagationDispatcher {...{ parentThis: this }} />
                <WikiDispatcher {...{ parentThis: this }} />
            </___>
        )
    }
}

export default connect(mapStateToProps)(TextLyricAnchor)
