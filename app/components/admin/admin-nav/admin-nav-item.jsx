import React from 'react'
import PropTypes from 'prop-types'
import AdminNavRow from './admin-nav-row'

/*************
 * CONTAINER *
 *************/

const AdminNavItem = ({

    index,
    isToggle,
    hasSelectedSong,
    selectedSongIndex,

...other }) => {

    const isSelected = isToggle ? hasSelectedSong : selectedSongIndex === index,
        navItemProps = {
            songIndex: index,
            isSelected
        }

    return <AdminNavRow {...other} {...navItemProps} />
}

AdminNavItem.propTypes = {
    index: PropTypes.number,
    isToggle: PropTypes.bool,
    hasSelectedSong: PropTypes.bool,
    selectedSongIndex: PropTypes.number.isRequired
}

export default AdminNavItem
