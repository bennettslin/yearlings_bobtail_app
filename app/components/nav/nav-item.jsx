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
    accessedNavSongIndex,

...other }) => {

    const isSelected = isToggle ? hasSelectedSong : selectedSongIndex === index,
        accessHighlighted = accessedNavSongIndex === index,
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
    accessedNavSongIndex: PropTypes.number.isRequired,
    selectedSongIndex: PropTypes.number.isRequired
}

export default NavItem
