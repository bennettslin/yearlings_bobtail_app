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
    ]).isRequired,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element
    ])
},

TextAnchor = ({

    text,
    children,

...other }) => {

    const { isAccessed,
            isSelected } = other

    return (
        <Anchor {...other}>
            <span className={cx(
                'TextAnchor',

                isAccessed && 'TextAnchor__accessed',

                isSelected ?
                    'TextAnchor__selected' :
                    'TextAnchor__selectable'
            )}>
                {text}
            </span>

            {children}
        </Anchor>
    )
}

TextAnchor.propTypes = textAnchorPropTypes

export default TextAnchor
