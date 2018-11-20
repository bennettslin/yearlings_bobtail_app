// Component to wrap text span in appropriate parent element.

import React from 'react'
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

    Text = ({
        text: textEntity,

        ...props }) => {

        const { inVerseBar,
                ...other } = props,

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
                italic,
                emphasis
            } = textEntity

            /**
         * If recursing, keep knowledge of text being in wormhole or verse bar,
         * which is needed by anchor.
         */

            if (italic) {
                return (
                    <Texts {...props}
                        isItalic
                        text={italic}
                    />
                )

            } else if (emphasis) {
                return (
                    <Texts {...props}
                        isEmphasis
                        text={emphasis}
                    />
                )

            } else {
                const { lyric,
                        anchor,
                        annotationIndex } = textEntity,

                    showAsPlainText = lyric || inWormhole || inVerseBar,

                    text = lyric || anchor

                if (showAsPlainText) {
                    const { isVerseBeginningSpan,
                            isVerseEndingSpan } = textEntity,

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
    }

Text.propTypes = propTypes

export default Text
