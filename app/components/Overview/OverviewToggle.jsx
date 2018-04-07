// Toggle button to show, hide, and disable overview section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../Button/Button'
import { OVERVIEW_TOGGLE_KEY } from '../../constants/access'
import { OVERVIEW_OPTIONS } from '../../constants/options'

const mapStateToProps = ({
    selectedOverviewIndex
}) => ({
    selectedOverviewIndex
})

const overviewToggleDefaultProps = {
    isEnabled: true
},

overviewTogglePropTypes = {
    // Through Redux.
    selectedOverviewIndex: PropTypes.number.isRequired,

    // From props.
    isEnabled: PropTypes.bool.isRequired,
    handleOverviewToggle: PropTypes.func.isRequired
},

OverviewToggle = ({

    selectedOverviewIndex,
    isEnabled,
    handleOverviewToggle

}) => (
    <div className="OverviewToggle-button-container">
        <Button
            isCustomSize
            isCustomShape
            accessKeysShown
            isEnabled={isEnabled}
            accessKey={OVERVIEW_TOGGLE_KEY}
            iconText={OVERVIEW_OPTIONS[selectedOverviewIndex]}
            handleClick={handleOverviewToggle}
        />
    </div>
)

OverviewToggle.defaultProps = overviewToggleDefaultProps
OverviewToggle.propTypes = overviewTogglePropTypes

export default connect(mapStateToProps)(OverviewToggle)
