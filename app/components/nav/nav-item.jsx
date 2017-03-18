import React from 'react'
import NavRow from './nav-row'
import NavButton from './nav-button'

/*************
 * CONTAINER *
 *************/

const NavItem = ({

    index,
    selectedAdminIndex,
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

    return selectedAdminIndex ?
        <NavRow {...other} {...navItemProps} /> :
        <NavButton {...other} {...navItemProps} />
}

export default NavItem
