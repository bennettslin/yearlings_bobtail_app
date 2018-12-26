import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

const SongwritingField = ({

    className

}) => (
    <rect
        {...{
            className,
            x: 0,
            y: 0,
            width: 100,
            height: 100
        }}
    />
)

const propTypes = {
    className: PropTypes.string
}

SongwritingField.propTypes = propTypes

export default SongwritingField
