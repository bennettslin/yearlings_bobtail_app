import React from 'react'
import PropTypes from 'prop-types'
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

NavItem.propTypes = {
    isToggle: PropTypes.bool,
    hasSelectedSong: PropTypes.bool,
    index: PropTypes.number,
    selectedAdminIndex: PropTypes.bool,
    accessedSongIndex: PropTypes.number.isRequired,
    selectedSongIndex: PropTypes.number.isRequired
}

export default NavItem
