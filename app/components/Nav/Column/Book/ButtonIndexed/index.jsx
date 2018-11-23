// Container to show logue or song button in nav section.

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import NavButton from '../Button'

const mapStateToProps = ({
    toggleStore: {
        isAccessOn,
        isDotsSlideShown
    },
    songStore: { selectedSongIndex },
    accessStore: { accessedNavSongIndex }
}) => ({
    isAccessOn,
    selectedSongIndex,
    isDotsSlideShown,
    accessedNavSongIndex
})

class NavButtonIndexed extends PureComponent {

    static propTypes = {
        // Through Redux.
        accessedNavSongIndex: PropTypes.number.isRequired,
        isAccessOn: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,

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
                accessedNavSongIndex,

                ...other
            } = this.props,

            isSelected = selectedSongIndex === songIndex,

            // Don't show access icon if dots slide is open.
            isAccessed =
                isAccessOn &&
                !isDotsSlideShown &&
                accessedNavSongIndex === songIndex

        return (
            <NavButton {...other}
                songIndex={songIndex}
                isSelected={isSelected}
                isAccessed={isAccessed}
            />
        )
    }
}

export default connect(mapStateToProps)(NavButtonIndexed)
