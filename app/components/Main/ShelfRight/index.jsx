// Section for score and tips toggle buttons.
import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import ScoreToggle from '../../Score/Toggle'
import TipsToggle from '../../Tips/Toggle'
import { mapIsDesktopWidth } from '../../../redux/viewport/selectors'
import './style'

const CHILD_CLASS_NAME = 'ShelfRight__child'

const ShelfRight = () => {
    const isDesktopWidth = useSelector(mapIsDesktopWidth)

    return !isDesktopWidth && (
        <div className={cx(
            'ShelfRight',
            'flex__mainSideButtons'
        )}>
            <TipsToggle {...{ className: CHILD_CLASS_NAME }} />
            <ScoreToggle {...{ className: CHILD_CLASS_NAME }} />
        </div>
    )
}

export default ShelfRight
