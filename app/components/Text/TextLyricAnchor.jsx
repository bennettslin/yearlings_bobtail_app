// Container for text anchor.

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import TextAnchor from '../Anchor/TextAnchor'
import Texts from './Texts'

import { LYRIC_ANNOTATION_SCROLL } from '../../constants/dom'

const mapStateToProps = ({
    canLyricRender,
    renderableAnnotationIndex,
    accessedAnnotationIndex,
    accessedAnnotationAnchorIndex
}) => ({
    canLyricRender,
    renderableAnnotationIndex,
    accessedAnnotationIndex,
    accessedAnnotationAnchorIndex
})

class TextLyricAnchor extends Component {

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,
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
        dotKeys: PropTypes.object,
        setLyricAnnotationRef: PropTypes.func
    }

    constructor(props) {
        super(props)

        this._handleAnchorClick = this._handleAnchorClick.bind(this)
        this.setLyricAnnotationRef = this.setLyricAnnotationRef.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canLyricRender
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

    setLyricAnnotationRef(node) {

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
                handleAnchorClick,
                setLyricAnnotationRef,
                dispatch,
                /* eslint-enable no-unused-vars */

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
        return (
            <Fragment>
                <span
                    className="anchorSpace"
                >
                    {' '}
                </span>
                <span
                    key={annotationIndex}
                    ref={this.setLyricAnnotationRef}
                    className={cx(
                        annotationIndex &&
                            `${LYRIC_ANNOTATION_SCROLL}__${annotationIndex}`,

                        wikiIndex && `wiki__${wikiIndex}`
                    )}
                >
                    <TextAnchor
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
                </span>
            </Fragment>
        )
    }
}

export default connect(mapStateToProps)(TextLyricAnchor)
