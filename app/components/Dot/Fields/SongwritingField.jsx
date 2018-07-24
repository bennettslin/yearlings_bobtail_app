import React from 'react'
import PropTypes from 'prop-types'

const SongwritingField = ({

    className

}) => (
    <circle
        {...{
            className,
            cx: 50,
            cy: 50,
            r: 50
        }}
    />
)

const propTypes = {
    className: PropTypes.string
}

SongwritingField.propTypes = propTypes

export default SongwritingField
