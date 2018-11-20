// Container to show logue or song button in nav section.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import NavButton from '../Button'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'

const mapStateToProps = ({
    selectedAccessIndex,
    songStore: { selectedSongIndex },
    selectedDotsIndex,
    accessedNavSongIndex,
}) => ({
    selectedAccessIndex,
    selectedSongIndex,
    selectedDotsIndex,
    accessedNavSongIndex,
})

class NavButtonIndexed extends Component {

    static propTypes = {
        // Through Redux.
        accessedNavSongIndex: PropTypes.number.isRequired,
        selectedAccessIndex: PropTypes.number.isRequired,
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
                selectedAccessIndex,
                selectedSongIndex,
                selectedDotsIndex,
                accessedNavSongIndex,

            ...other } = this.props,

            isSelected = selectedSongIndex === songIndex,

            // Don't show access icon if dots slide is open.
            isAccessed =
                Boolean(selectedAccessIndex) &&
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
