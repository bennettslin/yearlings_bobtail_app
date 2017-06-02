// Button in nav section to select book.

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NavButton from './nav-button'
import { getStartingIndexForBook } from '../../helpers/data-helper'

const passReduxStateToProps = ({
    selectedSongIndex
}) => ({
// Pass Redux state into component props.
    selectedSongIndex
})

// TODO: Get directly from Redux.
const NavBookButton = ({

    selectedSongIndex,
    bookIndex,

...other }) => {

    const bookTwoStartingIndex = getStartingIndexForBook(1),
        hasSelectedSong = bookIndex === 1 ?
            selectedSongIndex < bookTwoStartingIndex :
            selectedSongIndex >= bookTwoStartingIndex

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
