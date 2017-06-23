// Container to show logue or song button in nav section.

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NavButton from './nav-button'

const NavItem = ({

    songIndex,
    selectedSongIndex,
    accessedNavSongIndex,

...other }) => {

    const isSelected = selectedSongIndex === songIndex,
        accessHighlighted = accessedNavSongIndex === songIndex

    return (
        <NavButton {...other}
            songIndex={songIndex}
            isSelected={isSelected}
            accessHighlighted={accessHighlighted}
        />
    )
}

NavItem.propTypes = {
    // Through Redux.
    accessedNavSongIndex: PropTypes.number.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,

    // From parent.
    songIndex: PropTypes.number.isRequired
}

export default connect(({
    selectedSongIndex,
    accessedNavSongIndex
}) => ({
    selectedSongIndex,
    accessedNavSongIndex
}))(NavItem)
