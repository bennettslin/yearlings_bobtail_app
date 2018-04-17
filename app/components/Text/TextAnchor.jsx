// Component to show text anchor with underline bar.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import TextBlock from './TextBlock'
import DotSequence from '../Dot/DotSequence'

class TextAnchor extends Component {

    static defaultProps = {
        isLyric: false,
        inPortal: false,
        isVerseBeginningSpan: false,
        isVerseEndingSpan: false
    }

    static propTypes = {
        // From parent.
        isSelected: PropTypes.bool.isRequired,
        accessHighlighted: PropTypes.bool.isRequired,
        isLyric: PropTypes.bool.isRequired,
        inPortal: PropTypes.bool.isRequired,
        hasTodo: PropTypes.bool,
        isPortalAnchor: PropTypes.bool.isRequired,
        isVerseBeginningSpan: PropTypes.bool.isRequired,
        isVerseEndingSpan: PropTypes.bool.isRequired,

        anchorText: PropTypes.oneOfType([
            PropTypes.string,

            // "Bobtail's words" in M is an array.
            PropTypes.array,

            // "Ubermensch" in Golden Cord is an object.
            PropTypes.object

        ]).isRequired,
        annotationDotKeys: PropTypes.object,

        annotationIndex: PropTypes.number,
        carouselAnnotationIndex: PropTypes.number,
        wikiIndex: PropTypes.number,

        handleAnchorClick: PropTypes.func
    }

    constructor(props) {
        super(props)

        this._handleAnchorClick = this._handleAnchorClick.bind(this)
    }

    _handleAnchorClick(e) {

        const { isSelected,
                inPortal,
                annotationIndex,
                carouselAnnotationIndex,
                wikiIndex } = this.props,

            /**
             * If it's an annotation, then the argument passed to the
             * click handler is the annotation index. Otherwise, it's a
             * reference, and the argument is a url string.
             */
            anchorIndex = annotationIndex || wikiIndex

        if (!isSelected && !inPortal) {
            this.props.handleAnchorClick(e, anchorIndex, carouselAnnotationIndex)
        }
    }

    render() {
        const { isSelected,
                accessHighlighted,
                isLyric,
                inPortal,
                hasTodo,
                isPortalAnchor,
                isVerseBeginningSpan,
                isVerseEndingSpan,

                anchorText,
                annotationDotKeys,
                annotationIndex,
                wikiIndex

            } = this.props

        return (

            <span>
                {/* This non-anchor space negates the space that starts the text in the anchor tag. Kind of hackish, but there are no immediate solutions since two anchor tags next to each other have no other element between them. */}
                {!isVerseBeginningSpan &&
                    ' '
                }
                <a
                    className={cx(
                        'anchor-block',
                        'TextAnchorBlock',

                        /**
                         * isPortalAnchor is the actual portal anchor, inPortal
                         * is any other anchor found in that same verse.
                         */
                        !isPortalAnchor && !inPortal && annotationDotKeys,
                        !inPortal && annotationIndex && `LyricAnnotation__scrollChild__${annotationIndex}`,
                        wikiIndex && `wiki-${wikiIndex}`,
                        { 'selected': isSelected,
                          'accessHighlighted': accessHighlighted && !isSelected,
                          'portal-anchor': isPortalAnchor,
                          'reference': !!wikiIndex,
                          'todo': hasTodo }
                    )}
                    onClick={this._handleAnchorClick}
                    onTouchStart={this._handleAnchorClick}
                >
                    {isLyric &&
                        <span className="underlineBar" />
                    }
                    {/* Don't show any dots in portal block. */}
                    {!wikiIndex && !inPortal &&
                        <DotSequence
                            inTextAnchor
                            dotKeys={annotationDotKeys}
                        />
                    }
                    {/* Only the first text span inside the anchor will forego space. */}
                    <TextBlock
                        isLyric={isLyric}
                        text={anchorText}
                        inPortal={inPortal}
                        isVerseBeginningSpan={isVerseBeginningSpan}
                        isVerseEndingSpan={isVerseEndingSpan}
                        inTextAnchor
                    />
                </a>
            </span>
        )
    }
}

export default TextAnchor
