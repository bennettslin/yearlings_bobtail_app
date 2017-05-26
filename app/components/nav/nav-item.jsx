import React from 'react'
import PropTypes from 'prop-types'
import NavButton from './nav-button'

/*************
 * CONTAINER *
 *************/

const NavItem = ({

    index,
    isToggle,
    hasSelectedSong,
    selectedSongIndex,
    accessedSongIndex,

...other }) => {

    const isSelected = isToggle ? hasSelectedSong : selectedSongIndex === index,
        accessHighlighted = accessedSongIndex === index,
        navItemProps = {
            songIndex: index,
            isSelected,
            accessHighlighted
        }

    return <NavButton {...other} {...navItemProps} />
}

NavItem.propTypes = {
    isToggle: PropTypes.bool,
    hasSelectedSong: PropTypes.bool,
    index: PropTypes.number,
    accessedSongIndex: PropTypes.number.isRequired,
    selectedSongIndex: PropTypes.number.isRequired
}

export default NavItem
