// Component for a single line in a verse.

import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../../../hocs/DidMountHoc'
import Texts from '../../../Texts'
import './style'

const VerseLine = forwardRef(({
    didMount,
    columnKey,
    isTruncatable,
    isWrappable,
    ...other

}, ref) => {
    const { inVerseBar } = other

    /**
     * TODO: Can this truncatable functionality be done without having to
     * render fragments?
     */
    /**
     * If it's truncatable, we will only ever show either the complete or
     * the truncated text. Applies to Golden Cord and Uncanny Valley.
     */
    return (
        <>
            <div
                {...{
                    ...didMount && {
                        className: cx(
                            'VerseLine',

                            /**
                             * Allow anchor in a verse line to know it's in a
                             * cursor verse.
                             */
                            !inVerseBar && 'sibling__verseCursor',

                            // Lyric, left, centre, right.
                            `VerseLine__${columnKey}`,

                            {
                                VerseLine__truncatable: isTruncatable,
                                VerseLine__wrappable: isWrappable,
                            },
                        ),
                    },
                }}
            >
                <Texts
                    isVerseLyric
                    {...{
                        ref,
                        ...other,
                    }}
                />
            </div>

            {/* Only render if this is a truncatable verse. */}
            {didMount && isTruncatable && (
                <div
                    className="VerseLine__truncated"
                >
                    {'\u2026'}
                </div>
            )}
        </>
    )
})

VerseLine.propTypes = {
    didMount: PropTypes.bool.isRequired,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object,
    ]).isRequired,

    isTruncatable: PropTypes.bool,
    isWrappable: PropTypes.bool,
    inVerseBar: PropTypes.bool,
    columnKey: PropTypes.string.isRequired,
}

export default memo(getDidMountHoc(VerseLine))
