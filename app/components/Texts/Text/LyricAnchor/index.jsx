// Container for text anchor.

import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { updateAnnotationStore } from 'flux/annotation/action'

import WikiDispatcher from '../../../../handlers/Wiki/Dispatcher'
import Anchor from '../../../Anchor'
import Texts from '../../'

import { populateRefs } from 'helpers/ref'

import { LYRIC_ANNOTATION_SCROLL } from 'constants/scroll'

import { getWordsForWikiAnchor } from './helpers'

const mapStateToProps = ({
    appStore: { isHigherProcessor },
    lyricStore: {
        lyricSongIndex,
        lyricAnnotationIndex
    },
    accessStore: {
        isAccessedIndexedAnchorShown,
        accessedAnnotationIndex,
        accessedWikiWormholeIndex
    }
}) => ({
    isHigherProcessor,
    lyricAnnotationIndex,

    // This is just to know when to update.
    lyricSongIndex,

    isAccessedIndexedAnchorShown,
    accessedAnnotationIndex,
    accessedWikiWormholeIndex
})

class TextLyricAnchor extends PureComponent {

    static propTypes = {
        // Through Redux.
        isHigherProcessor: PropTypes.bool.isRequired,
        lyricAnnotationIndex: PropTypes.number.isRequired,
        lyricSongIndex: PropTypes.number.isRequired,
        isAccessedIndexedAnchorShown: PropTypes.bool.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        accessedWikiWormholeIndex: PropTypes.number.isRequired,

        updateAnnotationStore: PropTypes.func.isRequired,

        // From parent.
        wikiIndex: PropTypes.number,
        wikiAnnotationIndex: PropTypes.number,
        annotationIndex: PropTypes.number,

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

    _handleAnchorClick = () => {
        const {
                lyricAnnotationIndex,
                annotationIndex,
                wikiIndex,
                wikiAnnotationIndex
            } = this.props,

            isSelected = annotationIndex === lyricAnnotationIndex

        if (isSelected) {
            return false
        }

        if (wikiIndex) {
            return this.dispatchWiki(
                wikiIndex,
                wikiAnnotationIndex
            )
        }

        if (annotationIndex) {
            this.props.updateAnnotationStore({
                queuedAnnotationIndex: annotationIndex,
                queuedAnnotationFromLyricVerse: true
            })
            return true
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

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {

        const {
                /* eslint-disable no-unused-vars */
                lyricSongIndex,
                handleAnchorClick,
                setLyricAnnotationElement,
                updateAnnotationStore,
                dispatch,
                /* eslint-enable no-unused-vars */

                isHigherProcessor,
                annotationIndex,
                lyricAnnotationIndex,
                isAccessedIndexedAnchorShown,
                accessedAnnotationIndex,
                accessedWikiWormholeIndex,

                wikiIndex,
                wikiAnnotationIndex,
                text,
                dotKeys,

                ...other
            } = this.props,

            isSelected = annotationIndex === lyricAnnotationIndex,

            isWikiTextAnchor = Boolean(wikiIndex)

        let isAccessed = false

        if (isAccessedIndexedAnchorShown) {
            if (lyricAnnotationIndex) {
                isAccessed =
                    // Check that we're in the annotation that's selected.
                    lyricAnnotationIndex === wikiAnnotationIndex &&

                    accessedWikiWormholeIndex === wikiIndex

            } else {
                isAccessed =
                    accessedAnnotationIndex === annotationIndex
            }
        }

        // Only split wiki anchor text in higher processor.
        const words =
            isWikiTextAnchor && isHigherProcessor ?
                getWordsForWikiAnchor(text) : [text]

        return (
            <___>
                {/* This space will not show if it starts the verse line. */}
                {' '}
                <Anchor
                    {...{
                        setLyricAnnotationElement:
                            this.setLyricAnnotationElement,
                        className: cx(
                            annotationIndex &&
                                `${LYRIC_ANNOTATION_SCROLL}__${annotationIndex}`,

                            wikiIndex && `wiki__${wikiIndex}`
                        ),
                        isAccessed,
                        isSelected,
                        isWikiTextAnchor,
                        text: words.map((word, index) => (
                            <Texts {...other}
                                hasRecursed
                                {...{
                                    key: index,
                                    text: word,
                                    isWikiTextAnchor
                                }}
                            />
                        )),
                        sequenceDotKeys: dotKeys,
                        handleAnchorClick: this._handleAnchorClick
                    }}
                />
                {isWikiTextAnchor && (
                    <WikiDispatcher {...{ getRefs: this._getRefs }} />
                )}
            </___>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateAnnotationStore }
)(TextLyricAnchor)
