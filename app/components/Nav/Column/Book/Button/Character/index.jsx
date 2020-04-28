// Button to select book or song in nav section.
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getSongIsLogue } from '../../../../../../album/api/songs'
import { getIndexCharacter } from './helper'

const NavCharacter = ({ bookIndex, songIndex }) => {

    const indexCharacter = getIndexCharacter({ bookIndex, songIndex })

    return (
        <div
            {...{
                className: cx(
                    'NavCharacter',
                    getSongIsLogue(songIndex) && 'textShadow__light',
                    'Rancho',
                    'abF',
                    'flexCentreContainer',
                    'textShadow__dark'
                )
            }}
        >
            {indexCharacter}
        </div>
    )
}

NavCharacter.propTypes = {
    bookIndex: PropTypes.number,
    songIndex: PropTypes.number
}

export default NavCharacter
