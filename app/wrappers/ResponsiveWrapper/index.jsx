import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getSingleShownEarColumnKey } from './helper'
import {
    mapIsHeightlessLyric,
    mapIsLyricExpandable,
    mapShowShrunkNavIcon
} from '../../redux/responsive/selectors'
import { mapEarColumnIndex } from '../../redux/selected/selectors'
import {
    mapIsCarouselNavShowable,
    mapIsTipsShowable,
    mapIsEarShown
} from '../../redux/transient/selectors'

const ResponsiveWrapper = ({ children }) => {
    const
        isHeightlessLyric = useSelector(mapIsHeightlessLyric),
        isLyricExpandable = useSelector(mapIsLyricExpandable),
        showShrunkNavIcon = useSelector(mapShowShrunkNavIcon),
        earColumnIndex = useSelector(mapEarColumnIndex),
        isCarouselNavShowable = useSelector(mapIsCarouselNavShowable),
        isTipsShowable = useSelector(mapIsTipsShowable),
        isEarShown = useSelector(mapIsEarShown),

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
