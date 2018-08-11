// Button in nav section to select book.

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import NavButton from '../NavButton'
import { getBookColumnIndex } from 'helpers/dataHelper'

const mapStateToProps = ({
    selectedStore: { selectedSongIndex }
}) => ({
    selectedSongIndex
})

const navBookTogglePropTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired,

    // From parent.
    bookIndex: PropTypes.number.isRequired
},

NavBookToggle = ({
    /* eslint-disable no-unused-vars */
    dispatch,
    /* eslint-enable no-unused-vars */

    selectedSongIndex,
    bookIndex,

...other }) => {

    const hasSelectedSong =
        bookIndex === getBookColumnIndex(selectedSongIndex)

    return (
        <div className={cx(
            'NavBookToggle',
            'NavBook'
        )}>
            <NavButton {...other}
                isToggle
                isSelected={hasSelectedSong}
                bookIndex={bookIndex}
            />
        </div>
    )
}

NavBookToggle.propTypes = navBookTogglePropTypes

export default connect(mapStateToProps)(NavBookToggle)
