import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import { IS_DESKTOP_WIDTH_SELECTOR } from '../../../redux/viewport/selectors'
import './style'

const MainFlexContainer = ({
    isRight,
    children

}) => {
    const isDesktopWidth = useSelector(IS_DESKTOP_WIDTH_SELECTOR)

    return (
        <div
            {...{
                className: cx(
                    'MainFlexContainer',
                    /**
                     * Left container is always on side. Right container is on
                     * side in mobile.
                     */
                    (!isRight || !isDesktopWidth) &&
                        'MainFlexContainer__side',
                    isRight && isDesktopWidth && 'fCC',
                    isRight && !isDesktopWidth && 'MainFlexContainer__right',
                    'abF'
                )
            }}
        >
            {children}
        </div>
    )
}

MainFlexContainer.propTypes = {
    isRight: PropTypes.bool,
    children: PropTypes.node.isRequired
}

export default MainFlexContainer
