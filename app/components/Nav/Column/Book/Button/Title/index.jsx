// Button to select book or song in nav section.
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getTitleForSong } from '../../../../../../api/album/songs'
import { getIndexCharacter } from '../Character/helper'
import './style'

const NavButtonTitle = ({
    bookIndex,
    songIndex,
    isSelected
}) => {

    const title = Number.isFinite(bookIndex) ?
        `Book ${getIndexCharacter({ bookIndex })}` :
        getTitleForSong(songIndex)

    return Boolean(title) && (
        <div
            {...{
                className: cx(
                    'NavButtonTitle',
                    'abF'
                )
            }}
        >
            <div
                {...{
                    className: cx(
                        'NavButtonTitle__text',
                        isSelected ?
                            'Nav__text__selected' :
                            'Nav__text__interactable',
                        'Rancho',
                        'textShadow__dark',
                        'fCC'
                    )
                }}
            >
                {title}
            </div>
        </div>
    )
}

NavButtonTitle.propTypes = {
    bookIndex: PropTypes.number,
    songIndex: PropTypes.number,
    isSelected: PropTypes.bool
}

export default NavButtonTitle
