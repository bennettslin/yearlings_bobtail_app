import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import { mapMenuHeight } from '../../../redux/viewport/selector'

import AnnotationPopup from '../Annotation'
import AboutPopup from '../About'
import ScorePopup from '../Score'
import PromoPopup from '../Promo'
import WikiPopup from '../Wiki'

const MainPopups = forwardRef(({ didMount }, ref) => {
    const menuHeight = useSelector(mapMenuHeight)

    return (
        <div
            {...{
                ...didMount && {
                    className: cx(
                        'MainPopups',
                        'abF',
                    ),
                    style: {
                        top: `${menuHeight}px`,
                        height: `calc(100% - ${menuHeight}px)`,
                    },
                },
            }}
        >
            <AnnotationPopup />
            <AboutPopup />
            <ScorePopup />
            <PromoPopup {...{ ref }} />
            <WikiPopup />
        </div>
    )
})

MainPopups.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default memo(getDidMountHoc(MainPopups))
