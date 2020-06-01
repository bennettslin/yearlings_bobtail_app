// Section for dots and overview toggle buttons.

import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import ScoreToggle from '../../Score/Toggle'
import TipsToggle from '../../Tips/Toggle'
import DotsSlideToggle from '../DotsSlideToggle'
import OverviewToggle from '../OverviewToggle'
import { mapIsShelfLeftShown } from '../../../redux/transient/selectors'
import { mapIsDesktopWidth } from '../../../redux/viewport/selectors'
import './style'

const CHILD_SELECTOR = 'ShelfLeft__child'

const ShelfLeft = () => {
    const
        isShelfLeftShown = useSelector(mapIsShelfLeftShown),
        isDesktopWidth = useSelector(mapIsDesktopWidth)

    return (
        <div className={cx(
            'ShelfLeft',
            isShelfLeftShown && 'ShelfLeft__shown',
            'flex__mainSideButtons'
        )}>
            <OverviewToggle {...{ className: CHILD_SELECTOR }} />
            <DotsSlideToggle {...{ className: CHILD_SELECTOR }} />
            {isDesktopWidth && (
                <>
                    <ScoreToggle {...{ className: CHILD_SELECTOR }} />
                    <TipsToggle {...{ className: CHILD_SELECTOR }} />
                </>
            )}
        </div>
    )
}

export default ShelfLeft
