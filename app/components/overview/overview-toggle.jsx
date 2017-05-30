import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../button/button'
import { OVERVIEW_OPTIONS,
         OVERVIEW_TOGGLE_KEY } from '../../helpers/constants'

 const passReduxStateToProps = ({
     selectedOverviewIndex,
 }) => ({
     // Pass Redux state into component props.
     selectedOverviewIndex,
 })

/*************
 * CONTAINER *
 *************/

const OverviewToggle = (props) => (
    <OverviewToggleView {...props} />
)

OverviewToggle.propTypes = {
    selectedOverviewIndex: PropTypes.number.isRequired,
    handleOverviewToggle: PropTypes.func.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const OverviewToggleView = ({

    // From props.
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

export default connect(passReduxStateToProps)(OverviewToggle)
