// Component to wrap text span in appropriate parent element.

import React from 'react'
import PropTypes from 'prop-types'
import TextLyricAnchor from './TextLyricAnchor'
import Texts from './Texts'
import TextSpan from './TextSpan'

const textPropTypes = {
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

    const { inPortal,
            inVerseBar,
            ...other } = props

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
         * If recursing, keep knowledge of text being in portal or verse bar,
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

                showAsPlainText = lyric || inPortal || inVerseBar,

                text = lyric || anchor

            if (showAsPlainText) {
                const { isVerseBeginningSpan,
                        isVerseEndingSpan } = textEntity,

                    { portalAnnotationIndex } = props,

                    /**
                     * A verse line with a portal anchor may contain other
                     * anchors. Make sure that we know this is the portal
                     * anchor.
                     */
                    isPortalAnchorInPortal =
                        inPortal && annotationIndex === portalAnnotationIndex

                return (
                    <Texts {...other}
                        text={text}
                        isVerseBeginningSpan={isVerseBeginningSpan}
                        isVerseEndingSpan={isVerseEndingSpan}
                        isPortalAnchorInPortal={isPortalAnchorInPortal}
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
                        text={text}
                        dotKeys={dotKeys}
                        wikiIndex={wikiIndex}
                        wikiAnnotationIndex={wikiAnnotationIndex}
                        annotationIndex={annotationIndex}
                    />
                )
            }
        }
    }

    // Portals don't have a text description, so return null.
    return null
}

Text.propTypes = textPropTypes

export default Text
