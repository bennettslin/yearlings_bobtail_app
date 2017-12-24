// Button in nav section to select book.

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NavButton from './nav-button'
import { getBookColumnIndex } from '../../helpers/data-helper'
import { getLeftOrRightOfAccessHighlight } from '../../helpers/nav-helper'

const mapStateToProps = ({
    selectedSongIndex,
    accessedNavSongIndex,
    showSingleBookColumn
}) => ({
    selectedSongIndex,
    accessedNavSongIndex,
    showSingleBookColumn
})

const navBookButtonPropTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired,
    accessedNavSongIndex: PropTypes.number.isRequired,
    showSingleBookColumn: PropTypes.bool.isRequired,

    // From parent.
    bookIndex: PropTypes.number.isRequired
},

NavBookButton = ({

    selectedSongIndex,
    accessedNavSongIndex,
    showSingleBookColumn,
    bookIndex,

...other }) => {

    const hasSelectedSong =
        bookIndex === getBookColumnIndex(selectedSongIndex),

        { leftOfAccessHighlight,
          rightOfAccessHighlight } = getLeftOrRightOfAccessHighlight({
            bookIndex,
            accessedNavSongIndex,
            showSingleBookColumn
        })

    return (
        <div className="nav-book toggle">
            <NavButton {...other}
                isSelected={hasSelectedSong}
                leftOfAccessHighlight={leftOfAccessHighlight}
                rightOfAccessHighlight={rightOfAccessHighlight}
                bookIndex={bookIndex}
            />
        </div>
    )
}

NavBookButton.propTypes = navBookButtonPropTypes

export default connect(mapStateToProps)(NavBookButton)
