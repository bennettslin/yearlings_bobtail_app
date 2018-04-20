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
},

TextAnchor = ({

    text,

...other }) => {

    const { isAccessed,
            isSelected } = other

    return (
        <Anchor {...other}>
            <span className={cx(
                'TextAnchor',

                isAccessed && !isSelected && 'TextAnchor__accessed',

                isSelected ?
                    'TextAnchor__selected' :
                    'TextAnchor__selectable'
            )}>
                {text}
            </span>
        </Anchor>
    )
}

TextAnchor.propTypes = textAnchorPropTypes

export default TextAnchor
