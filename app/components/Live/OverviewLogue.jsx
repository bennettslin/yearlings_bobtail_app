// Section for dots and overview toggle buttons.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import OverviewPopup from '../Popups/OverviewPopup'

const overviewLoguePropTypes = {
    // From parent.
    overviewPopupHandlers: PropTypes.object.isRequired
},

OverviewLogue = ({

    overviewPopupHandlers

}) => (
    <div className={cx(
        'OverviewLogue',
        'position__lyricColumn__desktop',
        'topHeight__overlayPopups',
        'topHeight__overlayPopups__mobile'
    )}>
        <OverviewPopup {...overviewPopupHandlers} />
    </div>
)

OverviewLogue.propTypes = overviewLoguePropTypes

export default OverviewLogue
