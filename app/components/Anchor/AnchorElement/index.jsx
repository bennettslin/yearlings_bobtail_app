import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const AnchorElement = props => {
    return props.to ? (
        <Link {...props} />
    ) : (
        <a {...props} />
    )
}

AnchorElement.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string
}

export default AnchorElement
