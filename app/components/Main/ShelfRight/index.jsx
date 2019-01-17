// Section for score and tips toggle buttons.

import React, { memo } from 'react'
import cx from 'classnames'

import ScoreToggle from '../../Score/Toggle'
import TipsToggle from '../../Tips/Toggle'

const ShelfRight = memo(() => (
    <div className={cx(
        'ShelfRight',
        'flex__mainSideButtons'
    )}>
        <TipsToggle />
        <ScoreToggle />
    </div>
))

export default ShelfRight
