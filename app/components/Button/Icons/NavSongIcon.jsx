import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    buttonIdentifier: PropTypes.number.isRequired,
    className: PropTypes.string
}

const NavSongIcon = ({

    buttonIdentifier: songIndex,
    className

}) => {
    let characterIndex = songIndex

    // Hard-coding because I don't know if this code will be kept, and I'm lazy.
    if (songIndex === 0) {
        characterIndex = 'p'

    } else if (songIndex === 19) {
        characterIndex = 'e'
    }

    return (
        <text
            {...{
                className,
                x: 25,
                y: 75,
                fontSize: 75
            }}
        >
            {characterIndex}
        </text>
    )
}

NavSongIcon.propTypes = propTypes

export default NavSongIcon
