import React, { memo } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import { mapMenuHeight } from '../../../redux/viewport/selector'

import AnnotationPopup from '../Annotation'
import AboutPopup from '../About'
import ScorePopup from '../Score'
import WikiPopup from '../Wiki'

const MainPopups = () => {
    const menuHeight = useSelector(mapMenuHeight)

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
            <ScorePopup />
            <WikiPopup />
        </div>
    )
}

export default memo(MainPopups)
