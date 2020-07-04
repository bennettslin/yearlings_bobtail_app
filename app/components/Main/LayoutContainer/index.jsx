import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import { mapMainHeight } from '../../../redux/main/selector'
import {
    mapMenuHeight,
    mapCanCarouselMount
} from '../../../redux/viewport/selector'

const LayoutContainer = ({
    className,
    alwaysRender,
    children

}) => {
    const
        canCarouselMount = useSelector(mapCanCarouselMount),
        mainHeight = useSelector(mapMainHeight),
        menuHeight = useSelector(mapMenuHeight)

    return (alwaysRender || canCarouselMount) && (
        <div
            {...{
                className: cx(
                    className,
                    'abF'
                ),
                style: {
                    top: `${menuHeight}px`,
                    height: mainHeight
                }
            }}
        >
            {children}
        </div>
    )
}

LayoutContainer.propTypes = ({
    className: PropTypes.string,
    alwaysRender: PropTypes.bool,
    children: PropTypes.node.isRequired
})

export default memo(LayoutContainer)
