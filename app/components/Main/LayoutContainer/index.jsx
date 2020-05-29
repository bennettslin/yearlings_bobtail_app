import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import {
    CAN_CAROUSEL_MOUNT_SELECTOR,
    MAIN_HEIGHT_SELECTOR
} from '../../../redux/mount/selectors'
import { MENU_HEIGHT_SELECTOR } from '../../../redux/responsive/selectors'

const LayoutContainer = ({
    className,
    alwaysRender,
    children

}) => {
    const
        canCarouselMount = useSelector(CAN_CAROUSEL_MOUNT_SELECTOR),
        mainHeight = useSelector(MAIN_HEIGHT_SELECTOR),
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
