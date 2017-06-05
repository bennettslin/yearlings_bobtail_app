// Toggle button to show, hide, and disable overview section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../button/button'
import { OVERVIEW_TOGGLE_KEY } from '../../constants/access'
import { OVERVIEW_OPTIONS } from '../../constants/options'

const OverviewToggle = ({

    selectedOverviewIndex,
    isEnabled,
    handleOverviewToggle

}) => (
    <div className="overview-toggle-button-container">
        <Button
            isCustomShape={true}
            isCustomSize={true}
            isEnabled={isEnabled}
            accessKey={OVERVIEW_TOGGLE_KEY}
            iconText={OVERVIEW_OPTIONS[selectedOverviewIndex]}
            handleClick={handleOverviewToggle}
        />
    </div>
)

OverviewToggle.defaultProps = {
    isEnabled: true
}

OverviewToggle.propTypes = {
    // Through Redux.
    selectedOverviewIndex: PropTypes.number.isRequired,

    // From props.
    isEnabled: PropTypes.bool.isRequired,
    handleOverviewToggle: PropTypes.func.isRequired
}

export default connect(({
    selectedOverviewIndex
}) => ({
    selectedOverviewIndex
}))(OverviewToggle)
