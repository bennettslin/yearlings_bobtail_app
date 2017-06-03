// Button in nav section to select book.

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NavButton from './nav-button'
import { getBookColumnIndex } from '../../helpers/data-helper'

// Pass Redux state into component props.
const passReduxStateToProps = ({
    selectedSongIndex
}) => ({
    selectedSongIndex
})

const NavBookButton = ({

    selectedSongIndex,
    bookIndex,

...other }) => {

    const hasSelectedSong = bookIndex === getBookColumnIndex(selectedSongIndex)

    return (
        <div className="nav-book toggle">
            <NavButton {...other}
                isSelected={hasSelectedSong}
            />
        </div>
    )
}

NavBookButton.propTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired,

    // From parent.
    bookIndex: PropTypes.number.isRequired
}

export default connect(passReduxStateToProps)(NavBookButton)
