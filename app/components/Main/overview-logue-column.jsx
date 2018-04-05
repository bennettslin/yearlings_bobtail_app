// Section for dots and overview toggle buttons.

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import OverviewPopup from '../Popups/OverviewPopup'

const mapStateToProps = ({
    stageCoordinates,
    windowWidth
}) => ({
    stageCoordinates,
    windowWidth
})

const OverviewLogueColumnPropTypes = {
    // From Redux.
    stageCoordinates: PropTypes.shape({
        top: PropTypes.number.isRequired,
        left: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired
    }),
    windowWidth: PropTypes.number.isRequired,

    // From parent.
    overviewPopupHandlers: PropTypes.object.isRequired
},

OverviewLogueColumn = ({

    overviewPopupHandlers

}) => (
    <div className="column overview-logue-column">
        <OverviewPopup {...overviewPopupHandlers}
            inOverviewSubfield={false}
        />
    </div>
)

OverviewLogueColumn.propTypes = OverviewLogueColumnPropTypes

export default connect(mapStateToProps)(OverviewLogueColumn)
