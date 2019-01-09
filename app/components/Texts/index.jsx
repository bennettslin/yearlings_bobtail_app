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
        isWormholeDestinationVerse: PropTypes.bool
    },

    Texts = memo(({
        text: textEntity,
        isWormholeDestinationVerse,
        ...other

    }) => {
        return (Array.isArray(textEntity)) ? (

            textEntity.map((textEntry, index) => {

                return (
                    <Texts {...other}
                        key={index}
                        {...{ text: textEntry }}
                        {...isWormholeDestinationVerse && {
                            /**
                             * If it's a wormhole's destination verse text,
                             * then determine if it's the beginning span or
                             * ending span.
                             */
                            isVerseBeginningSpan: index === 0,
                            isVerseEndingSpan: index === textEntity.length - 1
                        }}
                    />
                )
            })

        ) : (
            <Text {...other}
                {...{ text: textEntity }}
                {...isWormholeDestinationVerse && {
                    /**
                     * If it's a wormhole's destination verse text, then as a
                     * single entity, it's both the beginning and ending span.
                     */
                    isVerseBeginningSpan: true,
                    isVerseEndingSpan: true
                }}
            />
        )
    })

Texts.propTypes = propTypes

export default Texts
