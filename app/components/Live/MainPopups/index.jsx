import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import { CAN_SCORE_MOUNT_SELECTOR } from '../../../redux/mount/selectors'
import { MENU_HEIGHT_SELECTOR } from '../../../redux/responsive/selectors'

import AnnotationPopup from '../../Popups/Annotation'
import AboutPopup from '../../Popups/About'
import ScorePopup from '../../Popups/Score'
import WikiPopup from '../../Popups/Wiki'

const MainPopups = () => {
    const
        canScoreMount = useSelector(CAN_SCORE_MOUNT_SELECTOR),
        menuHeight = useSelector(MENU_HEIGHT_SELECTOR)

    return (
        <div
            {...{
                className: cx(
                    'MainPopups',
                    'abF'
                ),
                style: {
                    top: `${menuHeight}px`,
                    height: `calc(100% - ${menuHeight}px)`
                }
            }}
        >
            <AnnotationPopup />
            <AboutPopup />
            {canScoreMount && (
                <ScorePopup />
            )}
            <WikiPopup />
        </div>
    )
}

export default MainPopups
