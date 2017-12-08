// Button in nav section to select book.

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NavButton from './nav-button'
import { getBookColumnIndex } from '../../helpers/data-helper'

const mapStateToProps = ({
    selectedSongIndex
}) => ({
    selectedSongIndex
})

const navBookButtonPropTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired,

    // From parent.
    bookIndex: PropTypes.number.isRequired
},

NavBookButton = ({

    selectedSongIndex,
    bookIndex,

...other }) => {

    const hasSelectedSong = bookIndex === getBookColumnIndex(selectedSongIndex)

    return (
        <div className="nav-book toggle">
            <NavButton {...other}
                isSelected={hasSelectedSong}
                bookIndex={bookIndex}
            />
        </div>
    )
}

NavBookButton.propTypes = navBookButtonPropTypes

export default connect(mapStateToProps)(NavBookButton)
