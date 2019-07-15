// Component to wrap text span in appropriate parent element.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import isString from 'lodash/isstring'

import TextLyricAnchor from './LyricAnchor'
import Texts from '..'
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

        ...props
    }) => {

        const {
            inVerseBar,
            ...other
        } = props

        // It's a text span.
        if (isString(textEntity)) {
            return (
                <TextSpan {...other}
                    {...{ text: textEntity }}
                />
            )

        } else if (typeof textEntity === 'object') {
            const {
                lyric,
                isItalic,
                isEmphasis
            } = textEntity

            if (isItalic || isEmphasis) {
                return (
                    <Texts {...props}
                        hasRecursed
                        {...{
                            isItalic,
                            isEmphasis,
                            text: lyric
                        }}
                    />
                )

            // It's an anchor.
            } else {
                const {
                        anchor,
                        annotationIndex
                    } = textEntity,
                    { wormholeAnnotationIndex } = props,

                    /**
                     * If recursing, keep knowledge of text being in wormhole
                     * or verse bar, which is needed by anchor.
                     */
                    showAsPlainText =
                        Boolean(wormholeAnnotationIndex) ||
                        inVerseBar,

                    text = anchor

                if (showAsPlainText) {

                    /**
                     * A verse line with a wormhole anchor may contain other
                     * anchors. Make sure that we know this is the wormhole
                     * anchor.
                     */
                    const isWormholeDestinationAnchor =
                            annotationIndex === wormholeAnnotationIndex

                    return (
                        <Texts {...other}
                            hasRecursed
                            {...{
                                text,
                                isWormholeDestinationAnchor
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

export default memo(Text)
