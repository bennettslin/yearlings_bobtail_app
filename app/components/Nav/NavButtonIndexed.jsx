// Container to show logue or song button in nav section.

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NavButton from './NavButton'

const mapStateToProps = ({
    selectedSongIndex,
    selectedDotsIndex,
    accessedNavSongIndex,
    showSingleBookColumn
}) => ({
    selectedSongIndex,
    selectedDotsIndex,
    accessedNavSongIndex,
    showSingleBookColumn
})

const navButtonIndexedPropTypes = {
    // Through Redux.
    accessedNavSongIndex: PropTypes.number.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,
    selectedDotsIndex: PropTypes.bool.isRequired,
    showSingleBookColumn: PropTypes.bool.isRequired,

    // From parent.
    songIndex: PropTypes.number.isRequired
},

NavButtonIndexed = ({

    songIndex,
    selectedSongIndex,
    selectedDotsIndex,
    accessedNavSongIndex,

...other }) => {

    const isSelected = selectedSongIndex === songIndex,

        // Don't show access icon if dots slide is open.
        isAccessed = !selectedDotsIndex && accessedNavSongIndex === songIndex

    return (
        <NavButton {...other}
            songIndex={songIndex}
            isSelected={isSelected}
            isAccessed={isAccessed}
        />
    )
}

NavButtonIndexed.propTypes = navButtonIndexedPropTypes

export default connect(mapStateToProps)(NavButtonIndexed)
