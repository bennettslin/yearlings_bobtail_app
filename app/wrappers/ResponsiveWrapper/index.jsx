import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getSingleShownEarColumnKey } from './helper'
import { IS_LYRIC_EXPANDABLE_SELECTOR } from '../../redux/responsive/selectors'

const ResponsiveWrapper = ({ children }) => {
    const {
            earColumnIndex,
            isCarouselNavShowable,
            isTipsShowable,
            isEarShown,
            isHeightlessLyric,
            showShrunkNavIcon
        } = useSelector(mapStateToProps),
        isLyricExpandable = useSelector(IS_LYRIC_EXPANDABLE_SELECTOR),
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
        showShrunkNavIcon
    }
}) => ({
    earColumnIndex,
    isCarouselNavShowable,
    isTipsShowable,
    isEarShown,
    isHeightlessLyric,
    showShrunkNavIcon
})

ResponsiveWrapper.propTypes = {
    children: PropTypes.any.isRequired
}

export default ResponsiveWrapper
