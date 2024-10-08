// Component to wrap text span in appropriate parent element.
import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import { isString } from '../../../helpers/general'

import Anchor from '../../Anchor'
import Contact from '../../Contact'
import Texts from '..'
import TextSpan from './Span'
import TextLyricAnchor from './LyricAnchor'
import PromoLinkAnchor from './PromoLinkAnchor'
import PromoSongAnchor from './PromoSongAnchor'

const Text = forwardRef(({
    text: textEntity,
    ...props

}, ref) => {
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
            breakTag,
            lyric,
            isContact,
            isItalic,
            isEmphasis,
        } = textEntity

        if (breakTag) {
            return <br />
        }

        if (isContact) {
            return <Contact />
        }

        if (isItalic || isEmphasis) {
            return (
                <Texts {...props}
                    hasRecursed
                    {...{
                        ref,
                        isItalic,
                        isEmphasis,
                        text: lyric,
                    }}
                />
            )

        // It's an anchor.
        } else {
            const {
                    anchor: text,
                    externalLink,
                    promoKey,
                    songIndex: promoSongIndex,
                    annotationIndex,
                } = textEntity,
                { wormholeAnnotationIndex } = props

            // It's an external link.
            if (externalLink) {
                return (
                    <Anchor
                        {...{
                            externalLink,
                            text,
                            analyticsLabel: 'pitchAnchor',
                        }}
                    />
                )

            } else if (promoKey) {
                return (
                    <PromoLinkAnchor
                        {...{
                            text,
                            promoKey,
                        }}
                    />
                )

            } else if (promoSongIndex) {
                return (
                    <PromoSongAnchor
                        {...{
                            text,
                            songIndex: promoSongIndex,
                        }}
                    />
                )

            /**
             * If recursing, keep knowledge of text being in wormhole or verse
             * bar, which is needed by anchor.
             */
            } else if (Boolean(wormholeAnnotationIndex) || inVerseBar) {
                return (
                    <Texts {...other}
                        hasRecursed
                        {...{
                            ref,
                            text,

                            /**
                             * A verse line with a wormhole anchor may contain
                             * other anchors. Make sure that we know this is
                             * the wormhole anchor.
                             */
                            isWormholeDestinationAnchor:
                                annotationIndex === wormholeAnnotationIndex,
                        }}
                    />
                )

            } else {
                const
                    {
                        dotsBit,
                        wikiIndex,
                        wikiAnnotationIndex,
                    } = textEntity,

                    // This gets passed by annotation card for wiki anchors.
                    { songIndex: wikiSongIndex } = other

                return (
                    <TextLyricAnchor {...other}
                        {...{
                            ref,
                            text,
                            dotsBit,
                            wikiSongIndex,
                            /**
                             * There is only ever an annotation index passed
                             * from the verse, or a wiki annotation index
                             * passed from the annotation.
                            */
                            wikiAnnotationIndex,
                            annotationIndex,
                            wikiIndex,
                        }}
                    />
                )
            }
        }
    }

    // Wormholes don't have a text description, so return null.
    return null
})

Text.propTypes = {
    // From parent.
    inVerseBar: PropTypes.bool,
    songIndex: PropTypes.number,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
    wormholeAnnotationIndex: PropTypes.number,
}

export default memo(Text)
