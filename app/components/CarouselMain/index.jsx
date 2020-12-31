import React, { cloneElement, useContext, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import AlbumPageElementContext from '../../contexts/AlbumPageElement'
import getDidMountHoc from '../DidMountHoc'
import getMainHoc from '../MainHoc'
import Carousel from '../Carousel'
import { getIsServerSide } from '../../utils/server'

const CarouselMain = ({ didMount, style }) => {
    const albumPageElement = useContext(AlbumPageElementContext)

    return (
        <div
            {...{
                ...didMount && {
                    className: cx(
                        'CarouselMain',
                        'abF'
                    ),
                    style,
                },
            }}
        >
            {getIsServerSide() ? (
                cloneElement(albumPageElement, { isCarousel: true })
            ) : (
                <Carousel />
            )}
        </div>
    )
}

CarouselMain.propTypes = {
    didMount: PropTypes.bool.isRequired,
    style: PropTypes.object,
}

export default memo(getDidMountHoc(getMainHoc(CarouselMain)))
