// Component to iterate through array of text.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Text from './Text'

/*************
 * CONTAINER *
 *************/

const propTypes = {
    // From parent.
        text: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array,
            PropTypes.object
        ]),
        isFullWormholeDestinationVerse: PropTypes.bool
    },

    Texts = memo(({
        text: textEntity,

        // This is true only once. It is false in every subsequent recursion.
        isFullWormholeDestinationVerse = false,
        beginsWormholeDestinationVerse: prevBeginsWormholeDestinationVerse,
        endsWormholeDestinationVerse: prevEndsWormholeDestinationVerse,
        ...other

    }) => {

        return (Array.isArray(textEntity)) ? (

            textEntity.map((textEntry, index) => {
                const
                    /**
                     * If it's the full wormhole destination verse text, then
                     * determine if it's the beginning span or ending span. If
                     * it's a subsequent recursion, ensure that only the first
                     * entry of the first entry is registered as the beginning,
                     * and the last entry of the last entry is registered as
                     * the end.
                     */
                    beginsWormholeDestinationVerse =
                        (
                            prevBeginsWormholeDestinationVerse ||
                            isFullWormholeDestinationVerse
                        ) && index === 0,

                    endsWormholeDestinationVerse =
                        (
                            prevEndsWormholeDestinationVerse ||
                            isFullWormholeDestinationVerse
                        ) && index === textEntity.length - 1

                return (
                    <Texts {...other}
                        key={index}
                        {...{
                            text: textEntry,
                            beginsWormholeDestinationVerse,
                            endsWormholeDestinationVerse
                        }}
                    />
                )
            })

        ) : (
            <Text {...other}
                {...{
                    text: textEntity,

                    /**
                     * If it's the full wormhole destination verse text, then
                     * as a single entity, it's both the beginning and ending
                     * span. If it's a subsequent recursion, just pass in the
                     * previous value.
                     */
                    beginsWormholeDestinationVerse:
                        isFullWormholeDestinationVerse ||
                        prevBeginsWormholeDestinationVerse,
                    endsWormholeDestinationVerse:
                        isFullWormholeDestinationVerse ||
                        prevEndsWormholeDestinationVerse
                }}
            />
        )
    })

Texts.propTypes = propTypes

export default Texts
