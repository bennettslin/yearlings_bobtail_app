import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AdminNavRow from './AdminNavRow'

const mapStateToProps = ({
    songStore: { selectedSongIndex }
}) => ({
    selectedSongIndex
})

/*************
 * CONTAINER *
 *************/

const AdminNavItem = ({

    index,
    isToggle,
    hasSelectedSong,
    selectedSongIndex,

    ...other
}) => {

    const isSelected = isToggle ? hasSelectedSong : selectedSongIndex === index,
        navItemProps = {
            songIndex: index,
            isSelected
        }

    return <AdminNavRow {...other} {...navItemProps} />
}

AdminNavItem.propTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired,

    // From parent.
    index: PropTypes.number,
    isToggle: PropTypes.bool,
    hasSelectedSong: PropTypes.bool
}

export default connect(mapStateToProps)(AdminNavItem)
