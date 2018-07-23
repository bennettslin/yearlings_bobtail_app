// Toggle button to show, hide, and disable overview section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Button from '../Button/Button'
import { OVERVIEW_TOGGLE_KEY } from '../../constants/access'
import { OVERVIEW_BUTTON_KEY } from '../../constants/buttons'
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
    inLeftShelf: PropTypes.bool,
    isEnabled: PropTypes.bool.isRequired,
    handleOverviewToggle: PropTypes.func.isRequired
},

OverviewToggle = ({

    inLeftShelf,
    selectedOverviewIndex,
    isEnabled,
    handleOverviewToggle

}) => (
    <div className={cx(
        'OverviewToggle',
        inLeftShelf && 'LeftShelf__child'
    )}>
        <Button
            isCustomSize
            buttonName={OVERVIEW_BUTTON_KEY}
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
