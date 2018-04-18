import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Anchor from './Anchor';

const textAnchorPropTypes = {
    // From parent.
    isSelected: PropTypes.bool,
    text: PropTypes.string.isRequired,
    children: PropTypes.element
},

TextAnchor = ({

    text,

...other }) => (

    <Anchor {...other}>

        <span className={cx(
            'TextAnchor',

            other.isSelected ?
                'TextAnchor__selected' :
                'TextAnchor__selectable'
        )}>
            {text}
        </span>

    </Anchor>
)

TextAnchor.propTypes = textAnchorPropTypes

export default TextAnchor
