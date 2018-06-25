// Container for text anchor.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import TextAnchor from '../Anchor/TextAnchor'
import Texts from './Texts'

const mapStateToProps = ({
    renderableAnnotationIndex,
    accessedAnnotationIndex,
    accessedAnnotationAnchorIndex
}) => ({
    renderableAnnotationIndex,
    accessedAnnotationIndex,
    accessedAnnotationAnchorIndex
})

class TextLyricAnchor extends Component {

    static propTypes = {
        // Through Redux.
        renderableAnnotationIndex: PropTypes.number.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        accessedAnnotationAnchorIndex: PropTypes.number.isRequired,

        wikiIndex: PropTypes.number,
        wikiAnnotationIndex: PropTypes.number,
        annotationIndex: PropTypes.number,

        // From parent.
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
                renderableAnnotationIndex,
                carouselAnnotationIndex } = this.props,

            isSelected = annotationIndex === renderableAnnotationIndex,

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
                renderableAnnotationIndex,
                accessedAnnotationIndex,
                accessedAnnotationAnchorIndex,
                wikiIndex,
                wikiAnnotationIndex,
                text,
                dotKeys,

            ...other } = this.props,

            isSelected = annotationIndex === renderableAnnotationIndex

        let isAccessed

        if (renderableAnnotationIndex) {
            isAccessed =
                // Check that we're in the annotation that's selected.
                renderableAnnotationIndex === wikiAnnotationIndex &&

                accessedAnnotationAnchorIndex === wikiIndex

        } else {
            isAccessed =
                accessedAnnotationIndex === annotationIndex
        }

        // This space will not display if it starts the verse line.
        return [(
                <span
                    key="space"
                    className="anchorSpace"
                >
                    {' '}
                </span>
            ), (
                <TextAnchor
                    key="anchor"
                    className={cx(
                        annotationIndex &&
                            `LyricAnnotation__scrollChild__${annotationIndex}`,

                        wikiIndex && `wiki__${wikiIndex}`
                    )}
                    text={(
                        <Texts {...other}
                            text={text}
                        />
                    )}
                    sequenceDotKeys={dotKeys}
                    isWikiAnchor={Boolean(wikiIndex)}
                    isAccessed={isAccessed}
                    isSelected={isSelected}
                    handleAnchorClick={this._handleAnchorClick}
                />
            )]
    }
}

export default connect(mapStateToProps)(TextLyricAnchor)
