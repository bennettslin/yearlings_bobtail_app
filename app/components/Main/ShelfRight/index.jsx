// Section for score and tips toggle buttons.
import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import ScoreToggle from '../../Score/Toggle'
import TipsToggle from '../../Tips/Toggle'
import { IS_DESKTOP_WIDTH_SELECTOR } from '../../../redux/viewport/selectors'
import './style'

const CHILD_SELECTOR = 'ShelfRight__child'

const ShelfRight = () => {
    const isDesktopWidth = useSelector(IS_DESKTOP_WIDTH_SELECTOR)

    return !isDesktopWidth && (
        <div className={cx(
            'ShelfRight',
            'flex__mainSideButtons'
        )}>
            <TipsToggle {...{ className: CHILD_SELECTOR }} />
            <ScoreToggle {...{ className: CHILD_SELECTOR }} />
        </div>
    )
}

export default ShelfRight
