// Section for dots and overview toggle buttons.

import React, { memo } from 'react'
import cx from 'classnames'

import OverviewPopup from '../../Popups/Overview'

const OverviewLogue = memo(() => (
    <div className={cx(
        'OverviewLogue',
        'position__lyricColumn__desktop',
        'topHeight__overlayPopups__mobile'
    )}>
        <OverviewPopup />
    </div>
))

export default OverviewLogue
