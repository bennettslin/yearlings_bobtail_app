// Container for text anchor.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import DotSequence from '../Dot/DotSequence'
import TextAnchor from '../Anchor/TextAnchor'
import Texts from './Texts'

const mapStateToProps = ({
    selectedAnnotationIndex,
    accessedAnnotationIndex,
    accessedAnnotationAnchorIndex
}) => ({
    selectedAnnotationIndex,
    accessedAnnotationIndex,
    accessedAnnotationAnchorIndex
})

class TextLyricAnchor extends Component {

    static propTypes = {
        // Through Redux.
        selectedAnnotationIndex: PropTypes.number.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        accessedAnnotationAnchorIndex: PropTypes.number.isRequired,

        wikiIndex: PropTypes.number,
        annotationIndex: PropTypes.number,
        portalAnnotationIndex: PropTypes.number,

        // From parent.
        isSpacePrefixed: PropTypes.bool.isRequired,
        text: PropTypes.oneOfType([
            PropTypes.string,

            // "Bobtail's words" in M is an array.
            PropTypes.array,

            // "Ubermensch" in Golden Cord is an object.
            PropTypes.object

        ]).isRequired,
        dotKeys: PropTypes.object
    }

    constructor(props) {
        super(props)

        this._handleAnchorClick = this._handleAnchorClick.bind(this)
    }

    _handleAnchorClick(e) {

        const { wikiIndex,
                annotationIndex,
                selectedAnnotationIndex,
                carouselAnnotationIndex } = this.props,

            isSelected = annotationIndex === selectedAnnotationIndex,

            /**
             * If it's an annotation, then the argument passed to the
             * click handler is the annotation index. Otherwise, it's a
             * reference, and the argument is a url string.
             */
            anchorIndex = annotationIndex || wikiIndex

        if (!isSelected) {
            this.props.handleAnchorClick(
                e, anchorIndex, carouselAnnotationIndex
            )
        }
    }

    render() {

        const {
                annotationIndex,
                selectedAnnotationIndex,
                accessedAnnotationIndex,
                accessedAnnotationAnchorIndex,
                wikiIndex,
                text,
                dotKeys,

            ...other } = this.props,

            isAccessed =
                accessedAnnotationIndex === annotationIndex ||
                accessedAnnotationAnchorIndex === wikiIndex,

            isSelected = annotationIndex === selectedAnnotationIndex

        // This space will not display if it starts the verse line.
        return [(
                <span key="space">
                    {' '}
                </span>
            ), (
                <TextAnchor {...other}
                    key="anchor"
                    className={cx(
                        annotationIndex &&
                            `LyricAnnotation__scrollChild__${annotationIndex}`,

                        wikiIndex && `wiki__${wikiIndex}`,
                    )}
                    text={(
                        <Texts
                            text={text}
                        />
                    )}
                    isAccessed={isAccessed}
                    isSelected={isSelected}
                    wikiIndex={wikiIndex}
                    annotationIndex={annotationIndex}
                    handleAnchorClick={this._handleAnchorClick}
                >
                    {dotKeys ? (
                        <DotSequence
                            inTextAnchor
                            dotKeys={dotKeys}
                        />
                    ) : null}
                </TextAnchor>
            )]
    }
}

export default connect(mapStateToProps)(TextLyricAnchor)
