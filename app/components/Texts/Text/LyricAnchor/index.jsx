// Container for text anchor.

import React, {
    Component, Fragment
} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import AnchorText from '../../../Anchor/AnchorText'
import Texts from '../../'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'

import { LYRIC_ANNOTATION_SCROLL } from 'constants/dom'

const mapStateToProps = ({
    renderStore: { canLyricRender },
    renderedStore: {
        renderedSongIndex,
        renderedAnnotationIndex
    },
    toggleStore: {
        isAccessOn,
        isLyricExpanded
    },
    accessedAnnotationIndex,
    accessedAnnotationAnchorIndex,
    selectedCarouselNavIndex,
    selectedDotsIndex,
    interactivatedVerseIndex
}) => ({
    canLyricRender,
    renderedAnnotationIndex,

    // This is just to know when to update.
    renderedSongIndex,

    isLyricExpanded,
    accessedAnnotationIndex,
    accessedAnnotationAnchorIndex,
    isAccessOn,
    selectedCarouselNavIndex,
    selectedDotsIndex,
    interactivatedVerseIndex
})

class TextLyricAnchor extends Component {

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,
        renderedAnnotationIndex: PropTypes.number.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        accessedAnnotationAnchorIndex: PropTypes.number.isRequired,

        isAccessOn: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        selectedCarouselNavIndex: PropTypes.number.isRequired,
        selectedDotsIndex: PropTypes.number.isRequired,
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
        setLyricAnnotationRef: PropTypes.func
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

            isSelected = annotationIndex === renderedAnnotationIndex,

            /**
             * If it's an annotation, then the argument passed to the
             * click handler is the annotation index. Otherwise, it's a
             * reference, and the argument is a url string.
             */
            anchorIndex = annotationIndex || wikiIndex

        if (!isSelected) {
            this.props.handleAnchorClick(
                e, anchorIndex, wikiAnnotationIndex
            )
        }
    }

    setLyricAnnotationRef = (node) => {

        // This method is only passed down by stanza, not carousel annotation.
        if (this.props.setLyricAnnotationRef) {
            this.props.setLyricAnnotationRef({
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
                setLyricAnnotationRef,
                dispatch,
                /* eslint-enable no-unused-vars */

                annotationIndex,
                renderedAnnotationIndex,
                accessedAnnotationIndex,
                accessedAnnotationAnchorIndex,

                isAccessOn,
                selectedCarouselNavIndex,
                selectedDotsIndex,
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
                !selectedDotsIndex &&
                interactivatedVerseIndex < 0 &&

                // Let popup annotation show anchors when carousel is hidden.
                (
                    Boolean(selectedCarouselNavIndex) ===
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

                    accessedAnnotationAnchorIndex === wikiIndex

            } else {
                isAccessed =
                    accessedAnnotationIndex === annotationIndex
            }
        }

        const words = isWikiTextAnchor ? text.split(' ') : [text]

        return (
            <Fragment>
                {/* This space will not show if it starts the verse line. */}
                {' '}
                <span
                    key={annotationIndex}
                    ref={this.setLyricAnnotationRef}
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
                            isWikiTextAnchor,
                            isAccessed,
                            isSelected,
                            handleAnchorClick: this._handleAnchorClick
                        }}
                    />
                </span>
            </Fragment>
        )
    }
}

export default connect(mapStateToProps)(TextLyricAnchor)
