// Button to select book or song in nav section.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import ButtonTitle from '../../../../../Button/Title'
import { getTitleForSong } from '../../../../../../api/album/songs'
import { getIndexCharacter } from '../helper'
import './style'

const NavButtonTitle = ({
    bookIndex,
    songIndex,
    isSelected,
}) => {

    const title = Number.isFinite(bookIndex) ?
        `Book ${getIndexCharacter({ bookIndex })}` :
        getTitleForSong(songIndex)

    return Boolean(title) && (
        <ButtonTitle
            {...{
                title,
                isSelected,
            }}
        />
    )
}

NavButtonTitle.propTypes = {
    bookIndex: PropTypes.number,
    songIndex: PropTypes.number,
    isSelected: PropTypes.bool,
}

export default memo(NavButtonTitle)
