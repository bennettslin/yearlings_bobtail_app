import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getSingleShownEarColumnKey } from './helper'

const ResponsiveWrapper = ({ children }) => {
    const {
            earColumnIndex,
            isCarouselNavShowable,
            isTipsShowable,
            isEarShown,
            isHeightlessLyric,
            isLyricExpandable,
            showShrunkNavIcon
        } = useSelector(mapStateToProps),

        singleShownEarColumnKey = getSingleShownEarColumnKey({
            isEarShown,
            earColumnIndex
        })

    return (
        <div
            {...{
                className: cx(
                    'ResponsiveWrapper',

                    showShrunkNavIcon ?
                        'RW__navIconShrunk' :
                        'RW__navIconStatic',

                    isCarouselNavShowable &&
                        'RW__carouselNavShowable',

                    !isTipsShowable &&
                        'RW__tipsNotShowable',

                    singleShownEarColumnKey ?
                        `RW__${singleShownEarColumnKey}EarColumnOnly` :
                        'RW__bothEarColumnsShown',

                    !isHeightlessLyric &&
                        'RW__lyricHeighted',

                    isLyricExpandable ?
                        'RW__lyricExpandable' :
                        'RW__lyricNotExpandable'
                )
            }}
        >
            {children}
        </div>
    )
}

const mapStateToProps = ({
    selectedStore: { earColumnIndex },
    transientStore: {
        isCarouselNavShowable,
        isTipsShowable,
        isEarShown
    },
    responsiveStore: {
        isHeightlessLyric,
        isLyricExpandable,
        showShrunkNavIcon
    }
}) => ({
    earColumnIndex,
    isCarouselNavShowable,
    isTipsShowable,
    isEarShown,
    isHeightlessLyric,
    isLyricExpandable,
    showShrunkNavIcon
})

ResponsiveWrapper.propTypes = {
    children: PropTypes.any.isRequired
}

export default ResponsiveWrapper
