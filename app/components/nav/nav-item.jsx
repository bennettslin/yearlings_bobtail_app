import React from 'react'
import NavRow from './nav-row'
import NavButton from './nav-song'

/*************
 * CONTAINER *
 *************/

const NavItem = ({

    song,
    index,
    isAdmin,
    selectedSongIndex,
    accessedSongIndex,
    sectionAccessHighlighted,

...other }) => {

    const isSelected = selectedSongIndex === index,
        accessHighlighted = sectionAccessHighlighted && accessedSongIndex === index,
        navItemProps = {
            key: index,
            songIndex: index,
            song,
            isSelected,
            accessHighlighted
        }

    return isAdmin ?
        <NavRow {...other} {...navItemProps}
            maxTotalNeededHours={maxTotalNeededHours}
        /> :
        <NavButton {...other} {...navItemProps} />
}

export default NavItem
