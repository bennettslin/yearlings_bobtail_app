// Section for score and tips toggle buttons.

import React, { memo } from 'react'
import cx from 'classnames'
import ScoreToggle from '../../Score/Toggle'
import TipsToggle from '../../Tips/Toggle'
const CHILD_SELECTOR = 'ShelfRight__child'
import './style'

const ShelfRight = () => (
    <div className={cx(
        'ShelfRight',
        'flex__mainSideButtons'
    )}>
        <TipsToggle {...{ className: CHILD_SELECTOR }} />
        <ScoreToggle {...{ className: CHILD_SELECTOR }} />
    </div>
)

export default memo(ShelfRight)
