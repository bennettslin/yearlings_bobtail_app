// Toggle button to show, hide, and disable overview section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../button/button'
import { OVERVIEW_TOGGLE_KEY } from '../../constants/access'
import { OVERVIEW_OPTIONS } from '../../constants/options'

// Pass Redux state into component props.
const passReduxStateToProps = ({
    selectedOverviewIndex
}) => ({
    selectedOverviewIndex
})

const OverviewToggle = ({

    selectedOverviewIndex,
    handleOverviewToggle

}) => (
    <div className="overview-toggle-button-container">
        <Button
            isCustomShape={true}
            isCustomSize={true}
            accessKey={OVERVIEW_TOGGLE_KEY}
            iconText={OVERVIEW_OPTIONS[selectedOverviewIndex]}
            handleClick={handleOverviewToggle}
        />
    </div>
)

OverviewToggle.propTypes = {
    // Through Redux.
    selectedOverviewIndex: PropTypes.number.isRequired,

    // From props.
    handleOverviewToggle: PropTypes.func.isRequired
}

export default connect(passReduxStateToProps)(OverviewToggle)
