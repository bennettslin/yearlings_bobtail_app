// Section for dots and overview toggle buttons.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import OverviewPopup from '../../Popups/Overview'

const propTypes = {
    // From parent.
        overviewPopupHandlers: PropTypes.object.isRequired
    },

    OverviewLogue = ({

        overviewPopupHandlers

    }) => (
        <div className={cx(
            'OverviewLogue',
            'position__earColumn__desktop',
            'topHeight__overlayPopups__mobile'
        )}>
            <OverviewPopup {...overviewPopupHandlers} />
        </div>
    )

OverviewLogue.propTypes = propTypes

export default OverviewLogue
