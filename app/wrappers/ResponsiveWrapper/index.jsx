import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getSingleShownEarColumnKey } from './helper'
import { EAR_COLUMN_INDEX_SELECTOR } from '../../redux/selected/selectors'
import {
    IS_HEIGHTLESS_LYRIC_SELECTOR,
    IS_LYRIC_EXPANDABLE_SELECTOR,
    SHOW_SHRUNK_NAV_ICON_SELECTOR
} from '../../redux/responsive/selectors'
import {
    IS_CAROUSEL_NAV_SHOWABLE_SELECTOR,
    IS_TIPS_SHOWABLE_SELECTOR,
    IS_EAR_SHOWN_SELECTOR
} from '../../redux/transient/selectors'

const ResponsiveWrapper = ({ children }) => {
    const
        earColumnIndex = useSelector(EAR_COLUMN_INDEX_SELECTOR),
        isCarouselNavShowable = useSelector(IS_CAROUSEL_NAV_SHOWABLE_SELECTOR),
        isTipsShowable = useSelector(IS_TIPS_SHOWABLE_SELECTOR),
        isEarShown = useSelector(IS_EAR_SHOWN_SELECTOR),
        isHeightlessLyric = useSelector(IS_HEIGHTLESS_LYRIC_SELECTOR),
        isLyricExpandable = useSelector(IS_LYRIC_EXPANDABLE_SELECTOR),
        showShrunkNavIcon = useSelector(SHOW_SHRUNK_NAV_ICON_SELECTOR),

        // TODO: Make this a selector.
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

ResponsiveWrapper.propTypes = {
    children: PropTypes.node.isRequired
}

export default ResponsiveWrapper
