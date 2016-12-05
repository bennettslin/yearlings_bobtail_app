import React from 'react'
import NavRow from './nav-row'
import NavButton from './nav-button'

/*************
 * CONTAINER *
 *************/

const NavItem = ({

    index,
    isAdmin,
    selectedSongIndex,
    accessedSongIndex,
    sectionAccessHighlighted,

...other }) => {

    const isSelected = selectedSongIndex === index,
        accessHighlighted = sectionAccessHighlighted && accessedSongIndex === index,
        navItemProps = {
            songIndex: index,
            isSelected,
            accessHighlighted
        }

    return isAdmin ?
        <NavRow {...other} {...navItemProps} /> :
        <NavButton {...other} {...navItemProps} />
}

export default NavItem
