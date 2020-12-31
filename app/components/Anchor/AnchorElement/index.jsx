import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const AnchorElement = forwardRef((props, ref) => {
    return props.to ? (
        <Link
            {...props}
            {...{ ref }}
        />
    ) : (
        <a
            {...props}
            {...{ ref }}
        />
    )
})

AnchorElement.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
}

export default AnchorElement
