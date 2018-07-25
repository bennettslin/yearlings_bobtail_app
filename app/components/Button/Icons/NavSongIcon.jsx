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
            x: 50,
            y: 50,
            fontSize: 50
        }}
    >
        {songIndex}
    </text>
)

NavSongIcon.propTypes = propTypes

export default NavSongIcon
