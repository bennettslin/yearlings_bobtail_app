import React from 'react'
import PropTypes from 'prop-types'

const getNavSongIcon = (songIndex) => {

    return (
        <text
            {...{
                x: 50,
                y: 50,
                fontSize: 50
            }}
        >
            {songIndex}
        </text>
    )
}

const propTypes = {
    buttonIdentifier: PropTypes.number.isRequired
}

const NavSongIcon = ({

    buttonIdentifier: songIndex

}) => {
    return getNavSongIcon(songIndex)
}

NavSongIcon.propTypes = propTypes

export default NavSongIcon
