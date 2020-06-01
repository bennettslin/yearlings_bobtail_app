// Container to show logue or song button in nav section.

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NavButton from '../Button'
import {
    mapIsAccessOn,
    mapAccessedNavIndex
} from '../../../../../redux/access/selectors'
import { mapSelectedSongIndex } from '../../../../../redux/selected/selectors'
import { mapIsDotsSlideShown } from '../../../../../redux/toggle/selectors'

const mapStateToProps = state => {
    const
        isAccessOn = mapIsAccessOn(state),
        accessedNavIndex = mapAccessedNavIndex(state),
        selectedSongIndex = mapSelectedSongIndex(state),
        isDotsSlideShown = mapIsDotsSlideShown(state)

    return {
        isAccessOn,
        selectedSongIndex,
        isDotsSlideShown,
        accessedNavIndex
    }
}

class NavButtonIndexed extends PureComponent {

    static propTypes = {
        // Through Redux.
        accessedNavIndex: PropTypes.number.isRequired,
        isAccessOn: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        dispatch: PropTypes.func.isRequired,

        // From parent.
        songIndex: PropTypes.number.isRequired
    }

    render() {

        const {
                /* eslint-disable no-unused-vars */
                dispatch,
                /* eslint-enable no-unused-vars */

                songIndex,
                isAccessOn,
                selectedSongIndex,
                isDotsSlideShown,
                accessedNavIndex,

                ...other
            } = this.props,

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
                    isAccessed
                }}
            />
        )
    }
}

export default connect(mapStateToProps)(NavButtonIndexed)
