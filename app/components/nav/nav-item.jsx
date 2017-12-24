// Container to show logue or song button in nav section.

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NavButton from './nav-button'
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

const navItemPropTypes = {
    // Through Redux.
    accessedNavSongIndex: PropTypes.number.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,
    showSingleBookColumn: PropTypes.bool.isRequired,

    // From parent.
    songIndex: PropTypes.number.isRequired
},

NavItem = ({

    songIndex,
    selectedSongIndex,
    accessedNavSongIndex,
    showSingleBookColumn,

...other }) => {

    const isSelected = selectedSongIndex === songIndex,
        accessHighlighted = accessedNavSongIndex === songIndex,

        { leftOfAccessHighlight,
          rightOfAccessHighlight } = getLeftOrRightOfAccessHighlight({
            songIndex,
            accessedNavSongIndex,
            showSingleBookColumn
        })

    return (
        <NavButton {...other}
            songIndex={songIndex}
            isSelected={isSelected}
            accessHighlighted={accessHighlighted}
            leftOfAccessHighlight={leftOfAccessHighlight}
            rightOfAccessHighlight={rightOfAccessHighlight}
        />
    )
}

NavItem.propTypes = navItemPropTypes

export default connect(mapStateToProps)(NavItem)
