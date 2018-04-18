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
    inPortal,
    inVerseBar,

...other }) => {

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

        if (italic) {
            return (
                <i>
                    <Texts {...other}
                        text={italic}
                    />
                </i>
            )

        } else if (emphasis) {
            return (
                <em>
                    <Texts {...other}
                        text={emphasis}
                    />
                </em>
            )

        } else {
            const { lyric,
                    anchor,
                    annotationIndex } = textEntity,

                showAsPlainText = lyric || inPortal || inVerseBar,

                text = lyric || anchor

            if (showAsPlainText) {
                const { portalAnnotationIndex,
                        isVerseEndingSpan } = textEntity

                // TODO: Use this to style.
                /**
                 * A verse line with a portal anchor may contain other anchors.
                 * Make sure that we know this is the portal anchor.
                 */
                const isPortalAnchorInPortal =
                    inPortal && annotationIndex === portalAnnotationIndex

                return (
                    <Texts {...other}
                        text={text}
                        isPortalAnchorInPortal={isPortalAnchorInPortal}
                        isVerseEndingSpan={isVerseEndingSpan}
                    />
                )
            } else {
                const {
                    dotKeys,
                    wikiIndex
                } = textEntity

                return (
                    <TextLyricAnchor {...other}
                        text={text}
                        dotKeys={dotKeys}
                        annotationIndex={annotationIndex}
                        wikiIndex={wikiIndex}
                        isSpacePrefixed
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
