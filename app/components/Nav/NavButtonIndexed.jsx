// Container to show logue or song button in nav section.

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NavButton from './NavButton'

const mapStateToProps = ({
    selectedSongIndex,
    selectedDotsIndex,
    accessedNavSongIndex,
}) => ({
    selectedSongIndex,
    selectedDotsIndex,
    accessedNavSongIndex,
})

const navButtonIndexedPropTypes = {
    // Through Redux.
    accessedNavSongIndex: PropTypes.number.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,
    selectedDotsIndex: PropTypes.number.isRequired,

    // From parent.
    songIndex: PropTypes.number.isRequired
},

NavButtonIndexed = ({
    /* eslint-disable no-unused-vars */
    dispatch,
    /* eslint-enable no-unused-vars */

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
