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

const mapStateToProps = ({
    deviceStore: { isDesktop },
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
    isDesktop,
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
        isDesktop: PropTypes.bool.isRequired,
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

                isDesktop,
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

        // Don't split in mobile.
        const words = isWikiTextAnchor && isDesktop ? text.split(' ') : [text]

        return (
            <___>
                {/* This space will not show if it starts the verse line. */}
                {' '}
                <span
                    key={annotationIndex}
                    {...{
                        ref: this.setLyricAnnotationElement,
                        className: cx(
                            annotationIndex &&
                                `${LYRIC_ANNOTATION_SCROLL}__${annotationIndex}`,

                            wikiIndex && `wiki__${wikiIndex}`
                        )
                    }}
                >
                    <Anchor
                        {...{
                            isAccessed,
                            isSelected,
                            isWikiTextAnchor,
                            text: words.map((word, index) => (
                                <Texts {...other}
                                    key={index}
                                    isTextAnchor
                                    {...{ text: word }}
                                />
                            )),
                            sequenceDotKeys: dotKeys,
                            handleAnchorClick: this._handleAnchorClick
                        }}
                    />
                </span>
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
