// Button to select book or song in nav section.
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getSongIsLogue } from '../../../../../../album/api/songs'
import { getIndexCharacter } from './helper'
import './style'

const NavCharacter = ({
    bookIndex,
    songIndex,
    isSelected

}) => {
    const indexCharacter = getIndexCharacter({ bookIndex, songIndex })

    return (
        <div
            {...{
                className: cx(
                    'NavCharacter',
                    isSelected ?
                        'Nav__text__selected' :
                        'Nav__text__interactable',
                    getSongIsLogue(songIndex) && 'textShadow__light',
                    'Rancho',
                    'abF',
                    'fCC',
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
    songIndex: PropTypes.number,
    isSelected: PropTypes.bool
}

export default NavCharacter
