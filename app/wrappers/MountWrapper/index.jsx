// Wrapper for device class names.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import getDidMountHoc from '../../components/DidMountHoc'
import {
    mapCanCarouselNavMount,
    mapCanSliderMount,
} from '../../redux/viewport/selector'

const MountWrapper = ({ didMount, children }) => {
    const
        canCarouselNavMount = useSelector(mapCanCarouselNavMount),
        canSliderMount = useSelector(mapCanSliderMount)

    return (
        <div
            {...{
                ...didMount && {
                    className: cx(
                        'MountWrapper',
                        canCarouselNavMount ?
                            'MW__canCarouselNavMount' :
                            'MW__cannotCarouselShow',
                        canSliderMount &&
                            'MW__canSliderMount',
                        'abF'
                    ),
                },
            }}
        >
            {children}
        </div>
    )
}

MountWrapper.propTypes = {
    didMount: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired,
}

export default memo(getDidMountHoc(MountWrapper))
