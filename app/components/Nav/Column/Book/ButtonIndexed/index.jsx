// Container to show logue or song button in nav section.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import NavButton from '../Button'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'

const mapStateToProps = ({
    toggleStore: { isAccessOn },
    songStore: { selectedSongIndex },
    selectedDotsIndex,
    accessedNavSongIndex
}) => ({
    isAccessOn,
    selectedSongIndex,
    selectedDotsIndex,
    accessedNavSongIndex
})

class NavButtonIndexed extends Component {

    static propTypes = {
        // Through Redux.
        accessedNavSongIndex: PropTypes.number.isRequired,
        isAccessOn: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedDotsIndex: PropTypes.number.isRequired,

        // From parent.
        songIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    render() {

        const {
                /* eslint-disable no-unused-vars */
                dispatch,
                /* eslint-enable no-unused-vars */

                songIndex,
                isAccessOn,
                selectedSongIndex,
                selectedDotsIndex,
                accessedNavSongIndex,

                ...other
            } = this.props,

            isSelected = selectedSongIndex === songIndex,

            // Don't show access icon if dots slide is open.
            isAccessed =
                isAccessOn &&
                !selectedDotsIndex &&
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
