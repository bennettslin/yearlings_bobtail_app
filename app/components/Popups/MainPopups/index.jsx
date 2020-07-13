import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import getDidMountHoc from '../../DidMountHoc'
import { mapMenuHeight } from '../../../redux/viewport/selector'

import AnnotationPopup from '../Annotation'
import AboutPopup from '../About'
import ScorePopup from '../Score'
import WikiPopup from '../Wiki'

const MainPopups = ({ didMount }) => {
    const menuHeight = useSelector(mapMenuHeight)

    return (
        <div
            {...{
                ...didMount && {
                    className: cx(
                        'MainPopups',
                        'abF'
                    ),
                    style: {
                        top: `${menuHeight}px`,
                        height: `calc(100% - ${menuHeight}px)`
                    }
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

MainPopups.propTypes = {
    didMount: PropTypes.bool.isRequired
}

export default memo(getDidMountHoc(MainPopups))
