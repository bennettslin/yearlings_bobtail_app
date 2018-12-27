// Component to wrap text span in appropriate parent element.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import TextLyricAnchor from './LyricAnchor'
import Texts from '../'
import TextSpan from './Span'

const propTypes = {
    // From parent.
        inVerseBar: PropTypes.bool,

        text: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ])
    },

    Text = memo(({
        text: textEntity,

        ...props
    }) => {

        const {
                inVerseBar,
                ...other
            } = props,

            { inWormhole } = other

        // It's a text span.
        if (typeof textEntity === 'string') {
            return (
                <TextSpan {...other}
                    text={textEntity}
                />
            )

        } else if (typeof textEntity === 'object') {
            const {
                lyric,
                isItalic,
                isEmphasis
            } = textEntity

            /**
         * If recursing, keep knowledge of text being in wormhole or verse bar,
         * which is needed by anchor.
         */

            if (isItalic) {
                return (
                    <Texts {...props}
                        isItalic
                        text={lyric}
                    />
                )

            } else if (isEmphasis) {
                return (
                    <Texts {...props}
                        isEmphasis
                        text={lyric}
                    />
                )

            } else {
                const {
                        anchor,
                        annotationIndex
                    } = textEntity,

                    showAsPlainText = inWormhole || inVerseBar,

                    text = anchor

                if (showAsPlainText) {
                    const {
                            isVerseBeginningSpan,
                            isVerseEndingSpan
                        } = textEntity,

                        { wormholeAnnotationIndex } = props,

                        /**
                     * A verse line with a wormhole anchor may contain other
                     * anchors. Make sure that we know this is the wormhole
                     * anchor.
                     */
                        isWormholeAnchorInWormhole =
                        inWormhole && annotationIndex === wormholeAnnotationIndex

                    return (
                        <Texts {...other}
                            {...{
                                text,
                                isVerseBeginningSpan,
                                isVerseEndingSpan,
                                isWormholeAnchorInWormhole
                            }}
                        />
                    )

                } else {
                    const {
                        dotKeys,
                        wikiIndex,
                        wikiAnnotationIndex
                    } = textEntity

                    return (
                        <TextLyricAnchor {...other}
                            {...{
                                text,
                                dotKeys,
                                wikiIndex,

                                /**
                             * There is only ever an annotation index passed
                             * from the verse, or a wiki annotation index
                             * passed from the annotation.
                             */
                                annotationIndex,
                                wikiAnnotationIndex
                            }}
                        />
                    )
                }
            }
        }

        // Wormholes don't have a text description, so return null.
        return null
    })

Text.propTypes = propTypes

export default Text
