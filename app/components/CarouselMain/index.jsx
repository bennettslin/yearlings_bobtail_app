import React, { cloneElement, useContext, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import PageElementContext from '../../contexts/PageElement'
import getDidMountHoc from '../DidMountHoc'
import getMainHoc from '../MainHoc'
import Carousel from '../Carousel'
import { getIsServerSide } from '../../utils/server'

const CarouselMain = ({ didMount, style }) => {
    const pageElement = useContext(PageElementContext)

    return (
        <div
            {...{
                ...didMount && {
                    className: cx(
                        'CarouselMain',
                        'abF'
                    ),
                    style
                }
            }}
        >
            {getIsServerSide() ? (
                cloneElement(pageElement, { isCarousel: true })
            ) : (
                <Carousel />
            )}
        </div>
    )
}

CarouselMain.propTypes = {
    didMount: PropTypes.bool.isRequired,
    style: PropTypes.object
}

export default memo(getDidMountHoc(getMainHoc(CarouselMain)))
