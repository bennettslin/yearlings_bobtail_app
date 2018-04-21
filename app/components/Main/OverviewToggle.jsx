// Toggle button to show, hide, and disable overview section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button2 from '../Button/Button2'
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
    <div className="OverviewToggle">
        <Button2
            isCustomSize
            buttonName="overview"
            isDisabled={!isEnabled}
            accessKey={OVERVIEW_TOGGLE_KEY}
            temporaryText={OVERVIEW_OPTIONS[selectedOverviewIndex]}
            handleButtonClick={handleOverviewToggle}
        />
    </div>
)

OverviewToggle.defaultProps = overviewToggleDefaultProps
OverviewToggle.propTypes = overviewTogglePropTypes

export default connect(mapStateToProps)(OverviewToggle)
