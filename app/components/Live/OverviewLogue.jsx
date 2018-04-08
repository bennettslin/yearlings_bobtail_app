// Section for dots and overview toggle buttons.

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import OverviewPopup from '../Popups/OverviewPopup'

const mapStateToProps = ({
    stageCoordinates,
    windowWidth
}) => ({
    stageCoordinates,
    windowWidth
})

const OverviewLogueColumnPropTypes = {

    // TODO: Why exactly are these needed by this component?

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

OverviewLogue = ({

    overviewPopupHandlers

}) => (
    <div className={cx(
        'OverviewLogue',
        'width__lyricColumn',
        'column'
    )}>
        <OverviewPopup {...overviewPopupHandlers}
            inOverviewSubfield={false}
        />
    </div>
)

OverviewLogue.propTypes = OverviewLogueColumnPropTypes

export default connect(mapStateToProps)(OverviewLogue)
