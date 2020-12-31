// Container to show logue or song button in nav section.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import NavButton from '../Button'
import {
    mapIsAccessOn,
    mapAccessedNavIndex,
} from '../../../../../redux/access/selector'
import { mapSelectedSongIndex } from '../../../../../redux/selected/selector'
import { mapIsDotsSlideShown } from '../../../../../redux/toggle/selector'

const NavButtonIndexed = ({ songIndex, ...other }) => {
    const
        isAccessOn = useSelector(mapIsAccessOn),
        accessedNavIndex = useSelector(mapAccessedNavIndex),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        isDotsSlideShown = useSelector(mapIsDotsSlideShown)

    const
        // TODO: Make this a selector.
        isSelected = selectedSongIndex === songIndex,

        // Don't show access icon if dots slide is open.
        isAccessed =
            isAccessOn &&
            !isDotsSlideShown &&
            accessedNavIndex === songIndex

    return (
        <NavButton {...other}
            {...{
                songIndex,
                isSelected,
                isAccessed,
            }}
        />
    )
}

NavButtonIndexed.propTypes = {
    songIndex: PropTypes.number.isRequired,
}

export default memo(NavButtonIndexed)
