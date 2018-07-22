import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Anchor from './Anchor';

const textAnchorPropTypes = {
    // From parent.
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]).isRequired
},

TextAnchor = ({

    text,

...other }) => {

    const {
            isAccessed,
            isSelected
        } = other,

        isStringText = typeof text === 'string'

    return (
        <Anchor {...other}>
            <span className={cx(
                'TextAnchor',

                isAccessed && !isSelected && 'TextAnchor__accessed',
                isStringText && 'TextAnchor__transition'
            )}>
                {/* Shown when no dot in dot sequence is selected. */}
                <span className={cx(
                    'TextAnchor__plainText'
                )}>
                    {text}
                </span>

                {/* Shown once some dot in dot sequence is selected. */}
                <div className={cx(
                    'TextAnchor__linkText',
                    'TextAnchor__linkText__default',

                    isSelected &&
                        'TextAnchor__linkText__selected',

                    'absoluteFullContainer'
                )}>
                    {text}
                </div>

                {/* Shown instead when access is on. */}
                <div className={cx(
                    'TextAnchor__linkText',
                    'TextAnchor__linkText__accessed',

                    isSelected &&
                        'TextAnchor__linkText__selected',

                    'absoluteFullContainer'
                )}>
                    {text}
                </div>
            </span>
        </Anchor>
    )
}

TextAnchor.propTypes = textAnchorPropTypes

export default TextAnchor
