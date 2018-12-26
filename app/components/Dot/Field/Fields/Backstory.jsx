import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

const BackstoryField = ({

    className

}) => (
    <path
        {...{
            className,
            x: 0,
            y: 0,
            d: 'M 50,0 L 100,50 L 50,100 L0,50 Z'
        }}
    />
)

const propTypes = {
    className: PropTypes.string
}

BackstoryField.propTypes = propTypes

export default BackstoryField
