// Component to wrap text span in appropriate parent element.

import React from 'react'
import PropTypes from 'prop-types'
import LyricTextAnchor from './LyricTextAnchor'
import TextBlock from './TextBlock'
import TextSpan from './TextSpan'

const textUnitPropTypes = {
    // From parent.
    inVerseBar: PropTypes.bool,

    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
},

TextUnit = ({

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
                    <TextBlock {...other}
                        text={italic}
                    />
                </i>
            )

        } else if (emphasis) {
            return (
                <em>
                    <TextBlock {...other}
                        text={emphasis}
                    />
                </em>
            )

        } else {
            const { lyric,
                    anchor,
                    // isVerseBeginningSpan,
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
                    <TextBlock {...other}
                        text={text}
                        isPortalAnchorInPortal={isPortalAnchorInPortal}
                        // isVerseBeginningSpan={isVerseBeginningSpan}
                        isVerseEndingSpan={isVerseEndingSpan}
                    />
                )
            } else {
                const {
                    dotKeys,
                    wikiIndex,
                    // isVerseBeginningSpan
                } = textEntity

                return (
                    <LyricTextAnchor {...other}
                        text={text}
                        dotKeys={dotKeys}
                        annotationIndex={annotationIndex}
                        wikiIndex={wikiIndex}
                        // isSpacePrefixed={!isVerseBeginningSpan}
                        isSpacePrefixed
                    />
                )
            }
        }
    }

    // Portals don't have a text description, so return null.
    return null
}

TextUnit.propTypes = textUnitPropTypes

export default TextUnit
