// Component to iterate through array of text.
import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import Text from './Text'

const Texts = forwardRef(({
    hasRecursed = false,
    text: textEntity,
    beginsVerse: prevBeginsVerse,
    endsVerse: prevEndsVerse,
    ...other

}, ref) => (
    Array.isArray(textEntity) ? (

        textEntity.map((textEntry, index) => {
            const
                /**
                 * NOTE: This value is no longer used anywhere, but I'll keep
                 * it for now, just in case.
                 */
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
                    hasRecursed
                    {...{
                        key: index,
                        ref,
                        text: textEntry,
                        beginsVerse,
                        endsVerse,
                    }}
                />
            )
        })

    ) : (
        <Text {...other}
            {...{
                ref,
                text: textEntity,

                /**
                 * If it's the root text component, then as a single
                 * entity, it is, or has, both the beginning and ending
                 * span. But if it's a subsequent recursion, then just pass
                 * in the previous value.
                 */
                beginsVerse: prevBeginsVerse || !hasRecursed,
                endsVerse: prevEndsVerse || !hasRecursed,
            }}
        />
    )
))

Texts.propTypes = {
    // From parent.
    hasRecursed: PropTypes.bool,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object,
    ]),
    beginsVerse: PropTypes.bool,
    endsVerse: PropTypes.bool,
}

export default memo(Texts)
