import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import AdminNavRow from '../AdminNavRow'
import { mapSelectedSongIndex } from '../../../../../app/redux/selected/selector'

/*************
 * CONTAINER *
 *************/

const AdminNavItem = ({
    index,
    isToggle,
    hasSelectedSong,
    ...other

}) => {
    const
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        isSelected = isToggle ? hasSelectedSong : selectedSongIndex === index,
        navItemProps = {
            songIndex: index,
            isSelected
        }

    return <AdminNavRow {...other} {...navItemProps} />
}

AdminNavItem.propTypes = {
    index: PropTypes.number,
    isToggle: PropTypes.bool,
    hasSelectedSong: PropTypes.bool
}

export default AdminNavItem
