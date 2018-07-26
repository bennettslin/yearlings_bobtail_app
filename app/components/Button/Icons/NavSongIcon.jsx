import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    buttonIdentifier: PropTypes.number.isRequired,
    className: PropTypes.string
}

const NavSongIcon = ({

    buttonIdentifier: songIndex,
    className

}) => (
    <text
        {...{
            className,
            x: 25,
            y: 75,
            fontSize: 75
        }}
    >
        {songIndex}
    </text>
)

NavSongIcon.propTypes = propTypes

export default NavSongIcon
