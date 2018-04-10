// Container to show logue or song button in nav section.

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NavButton from './NavButton'

const mapStateToProps = ({
    selectedSongIndex,
    accessedNavSongIndex,
    showSingleBookColumn
}) => ({
    selectedSongIndex,
    accessedNavSongIndex,
    showSingleBookColumn
})

const navIndexedButton = {
    // Through Redux.
    accessedNavSongIndex: PropTypes.number.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,
    showSingleBookColumn: PropTypes.bool.isRequired,

    // From parent.
    songIndex: PropTypes.number.isRequired
},

NavIndexedButton = ({

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

NavIndexedButton.propTypes = navIndexedButton

export default connect(mapStateToProps)(NavIndexedButton)
