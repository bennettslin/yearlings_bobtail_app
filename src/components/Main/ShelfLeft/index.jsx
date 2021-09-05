// Section for dots and overview toggle buttons.

import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import ScoreToggle from '../../Score/Toggle'
import TipsToggle from '../../Tips/Toggle'
import DotsSlideToggle from '../DotsSlideToggle'
import OverviewToggle from '../OverviewToggle'
import ShareButtons from '../../ShareButtons'
import { mapIsDesktopWidth } from '../../../redux/device/selector'
import { mapIsShelfLeftShown } from '../../../redux/main/selector'
import './style'
import { SHELF_LEFT_SOCIAL_MEDIA } from '../../../constants/socialMedia'

const CHILD_CLASS_NAME = 'ShelfLeft__child'

const ShelfLeft = () => {
    const
        isShelfLeftShown = useSelector(mapIsShelfLeftShown),
        isDesktopWidth = useSelector(mapIsDesktopWidth)

    return (
        <div className={cx(
            'ShelfLeft',
            isShelfLeftShown && 'ShelfLeft__shown',
            'flex__mainSideButtons',
        )}>
            <OverviewToggle {...{ className: CHILD_CLASS_NAME }} />
            <DotsSlideToggle {...{ className: CHILD_CLASS_NAME }} />
            {isDesktopWidth && (
                <>
                    <ScoreToggle {...{ className: CHILD_CLASS_NAME }} />
                    <TipsToggle {...{ className: CHILD_CLASS_NAME }} />
                </>
            )}
            <ShareButtons
                {...{
                    id: SHELF_LEFT_SOCIAL_MEDIA,
                    className: CHILD_CLASS_NAME,
                }}
            />
        </div>
    )
}

export default ShelfLeft
