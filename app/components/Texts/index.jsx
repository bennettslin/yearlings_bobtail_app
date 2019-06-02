// Component to iterate through array of text.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Text from './Text'

/*************
 * CONTAINER *
 *************/

const defaultProps = {
    hasRecursed: false
}

const propTypes = {
    // From parent.
        hasRecursed: PropTypes.bool.isRequired,
        text: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array,
            PropTypes.object
        ])
    },

    Texts = ({
        hasRecursed,
        text: textEntity,
        beginsVerse: prevBeginsVerse,
        endsVerse: prevEndsVerse,
        ...other

    }) => {

        return (Array.isArray(textEntity)) ? (

            textEntity.map((textEntry, index) => {
                const
                    /**
                     * If it's the root text component, then determine if it's
                     * the beginning or ending span. If it's a subsequent
                     * recursion, then ensure that only the first entry of the
                     * first entry is registered as the beginning, and the last
                     * entry of the last entry is registered as the end.
                     */
                    beginsVerse =
                        (prevBeginsVerse || !hasRecursed) &&
                            index === 0,

                    endsVerse =
                        (prevEndsVerse || !hasRecursed) &&
                            index === textEntity.length - 1

                return (
                    <Texts {...other}
                        key={index}
                        hasRecursed
                        {...{
                            text: textEntry,
                            beginsVerse,
                            endsVerse
                        }}
                    />
                )
            })

        ) : (
            <Text {...other}
                {...{
                    text: textEntity,

                    /**
                     * If it's the root text component, then as a single
                     * entity, it is, or has, both the beginning and ending
                     * span. But if it's a subsequent recursion, then just pass
                     * in the previous value.
                     */
                    beginsVerse: prevBeginsVerse || !hasRecursed,
                    endsVerse: prevEndsVerse || !hasRecursed
                }}
            />
        )
    }

Texts.defaultProps = defaultProps
Texts.propTypes = propTypes

export default memo(Texts)
