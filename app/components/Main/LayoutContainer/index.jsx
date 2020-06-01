import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import {
    mapCanCarouselMount,
    mapMainHeight
} from '../../../redux/mount/selectors'
import { MENU_HEIGHT_SELECTOR } from '../../../redux/responsive/selectors'

const LayoutContainer = ({
    className,
    alwaysRender,
    children

}) => {
    const
        canCarouselMount = useSelector(mapCanCarouselMount),
        mainHeight = useSelector(mapMainHeight),
        menuHeight = useSelector(MENU_HEIGHT_SELECTOR)

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

export default LayoutContainer
