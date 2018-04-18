// Component to iterate through array of text.

import React from 'react'
import PropTypes from 'prop-types'
import Text from './Text'

/*************
 * CONTAINER *
 *************/

const textsPropTypes = {
    // From parent.
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object
    ])
},

Texts = ({

    text: textEntity,

...other }) => {

    return (Array.isArray(textEntity)) ? (
        textEntity.map((textElement, index) => (
            <Texts {...other}
                key={index}
                text={textElement}
            />
        ))
    ) : (
        <Text {...other}
            text={textEntity}
        />
    )
}

Texts.propTypes = textsPropTypes

export default Texts
