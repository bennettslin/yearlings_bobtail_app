import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getSingleShownEarColumnKey } from './helper'
import {
    IS_LYRIC_EXPANDABLE_SELECTOR,
    SHOW_SHRUNK_NAV_ICON_SELECTOR
} from '../../redux/responsive/selectors'

const ResponsiveWrapper = ({ children }) => {
    const {
            earColumnIndex,
            isCarouselNavShowable,
            isTipsShowable,
            isEarShown,
            isHeightlessLyric
        } = useSelector(mapStateToProps),
        isLyricExpandable = useSelector(IS_LYRIC_EXPANDABLE_SELECTOR),
        showShrunkNavIcon = useSelector(SHOW_SHRUNK_NAV_ICON_SELECTOR),
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

const mapStateToProps = state => {
    const {
        selectedStore: { earColumnIndex },
        transientStore: {
            isCarouselNavShowable,
            isTipsShowable,
            isEarShown
        },
        responsiveStore: {
            isHeightlessLyric
        }
    } = state

    return {
        earColumnIndex,
        isCarouselNavShowable,
        isTipsShowable,
        isEarShown,
        isHeightlessLyric
    }
}

ResponsiveWrapper.propTypes = {
    children: PropTypes.node.isRequired
}

export default ResponsiveWrapper
