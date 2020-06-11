import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import { mapCanScoreMount } from '../../../redux/mount/selectors'
import { mapMenuHeight } from '../../../redux/viewport/selectors'

import AnnotationPopup from '../Annotation'
import AboutPopup from '../About'
import ScorePopup from '../Score'
import WikiPopup from '../Wiki'

const MainPopups = () => {
    const
        canScoreMount = useSelector(mapCanScoreMount),
        menuHeight = useSelector(mapMenuHeight)

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
