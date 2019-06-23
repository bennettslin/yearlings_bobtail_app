import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import PresenceSvgInjector from 'modules/PresenceSvgInjector'

const propTypes = {
    // From parent.
    className: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    scaleFactor: PropTypes.number
}

const MyPresence = ({
    className, x, y, scaleFactor

}) => (
    <PresenceSvgInjector
        {...{
            className: cx(
                'MyPresence',
                className
            ),
            viewBoxWidth: 1000,
            viewBoxHeight: 1000,
            x,
            y,
            scaleFactor
        }}
    >

    </PresenceSvgInjector>
)

MyPresence.propTypes = propTypes

export default MyPresence
