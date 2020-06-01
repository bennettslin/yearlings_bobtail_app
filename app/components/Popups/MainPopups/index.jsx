import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import { mapCanScoreMount } from '../../../redux/mount/selectors'
import { MENU_HEIGHT_SELECTOR } from '../../../redux/responsive/selectors'

import AnnotationPopup from '../Annotation'
import AboutPopup from '../About'
import ScorePopup from '../Score'
import WikiPopup from '../Wiki'

const MainPopups = () => {
    const
        canScoreMount = useSelector(mapCanScoreMount),
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
