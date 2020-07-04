import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getSingleShownEarColumnKey } from './helper'
import { mapIsCarouselNavShowable } from '../../redux/carousel/selector'
import { mapIsEarShown } from '../../redux/ear/selector'
import { mapIsLyricExpandable } from '../../redux/lyricExpand/selector'
import { mapShowShrunkNavIcon } from '../../redux/nav/selector'
import { mapEarColumnIndex } from '../../redux/session/selector'
import { mapIsHeightlessLyric } from '../../redux/viewport/selector'

const ResponsiveWrapper = ({ children }) => {
    const
        isHeightlessLyric = useSelector(mapIsHeightlessLyric),
        isLyricExpandable = useSelector(mapIsLyricExpandable),
        showShrunkNavIcon = useSelector(mapShowShrunkNavIcon),
        earColumnIndex = useSelector(mapEarColumnIndex),
        isCarouselNavShowable = useSelector(mapIsCarouselNavShowable),
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

export default memo(ResponsiveWrapper)
