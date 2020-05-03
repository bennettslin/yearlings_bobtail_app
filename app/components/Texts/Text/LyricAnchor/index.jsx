// Container for text anchor.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { updateAnnotationStore } from 'flux/annotation/action'

import StopPropagationDispatcher from '../../../../dispatchers/StopPropagation'
import WikiDispatcher from '../../../../handlers/Wiki/Dispatcher'
import Anchor from '../../../Anchor'

import { populateRefs } from 'helpers/ref'

import { LYRIC_ANNOTATION_SCROLL } from 'constants/scroll'

const mapStateToProps = ({
    lyricStore: {
        lyricSongIndex,
        lyricAnnotationIndex
    },
    accessStore: {
        isAccessedIndexedAnchorShown,
        accessedAnnotationIndex,
        accessedWikiWormholeIndex
    },
    activatedStore: { isActivated },
    sliderStore: { isSliderMoving }
}) => ({
    lyricAnnotationIndex,

    // This is just to know when to update.
    lyricSongIndex,

    isAccessedIndexedAnchorShown,
    accessedAnnotationIndex,
    accessedWikiWormholeIndex,
    isActivated,
    isSliderMoving
})

class TextLyricAnchor extends PureComponent {

    static propTypes = {
        // Through Redux.
        lyricAnnotationIndex: PropTypes.number.isRequired,
        lyricSongIndex: PropTypes.number.isRequired,
        isAccessedIndexedAnchorShown: PropTypes.bool.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        accessedWikiWormholeIndex: PropTypes.number.isRequired,
        isActivated: PropTypes.bool.isRequired,
        isSliderMoving: PropTypes.bool.isRequired,
        updateAnnotationStore: PropTypes.func.isRequired,
        dispatch: PropTypes.func,

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

        isVerseLyric: PropTypes.bool,
        isItalic: PropTypes.bool,
        isEmphasis: PropTypes.bool,
        beginsVerse: PropTypes.bool,
        endsVerse: PropTypes.bool,

        dotKeys: PropTypes.object,
        setLyricAnnotationElement: PropTypes.func,
        handleAnchorClick: PropTypes.func
    }

    _handleAnchorClick = (e) => {
        const {
                lyricAnnotationIndex,
                annotationIndex,
                wikiIndex,
                wikiAnnotationIndex,
                isSliderMoving,
                isActivated
            } = this.props,

            isSelected = annotationIndex === lyricAnnotationIndex

        if (isSelected || isSliderMoving || isActivated) {
            return false
        }

        // Stop propagation if anchor click is valid.
        this.dispatchStopPropagation(e)

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

                annotationIndex,
                lyricAnnotationIndex,
                isAccessedIndexedAnchorShown,
                accessedAnnotationIndex,
                accessedWikiWormholeIndex,

                wikiIndex,
                wikiAnnotationIndex,
                text,
                dotKeys,

                isVerseLyric,
                isItalic,
                isEmphasis,
                beginsVerse,
                endsVerse
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

        return (
            <>
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
                        text,
                        textConfig: {
                            isVerseLyric,
                            isItalic,
                            isEmphasis,
                            beginsVerse,
                            endsVerse
                        },
                        sequenceDotKeys: dotKeys,
                        handleAnchorClick: this._handleAnchorClick
                    }}
                />
                {isWikiTextAnchor && (
                    <WikiDispatcher {...{ getRefs: this._getRefs }} />
                )}
                <StopPropagationDispatcher {...{ getRefs: this._getRefs }} />
            </>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateAnnotationStore }
)(TextLyricAnchor)
