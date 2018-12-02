// Section for dots and overview toggle buttons.

import React from 'react'
import cx from 'classnames'

import OverviewPopup from '../../Popups/Overview'

const OverviewLogue = () => (
    <div className={cx(
        'OverviewLogue',
        'position__lyricColumn__desktop',
        'topHeight__overlayPopups__mobile'
    )}>
        <OverviewPopup />
    </div>
)

export default OverviewLogue
