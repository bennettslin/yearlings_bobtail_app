import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getSingleShownEarColumnKey } from './helper'

class ResponsiveWrapper extends PureComponent {

    static propTypes = {
        // Through Redux.
        earColumnIndex: PropTypes.number.isRequired,
        isCarouselNavShowable: PropTypes.bool.isRequired,
        isTipsShowable: PropTypes.bool.isRequired,
        isEarShown: PropTypes.bool.isRequired,
        isHeightlessLyric: PropTypes.bool.isRequired,
        isLyricExpandable: PropTypes.bool.isRequired,
        showShrunkNavIcon: PropTypes.bool.isRequired,

        // From parent.
        children: PropTypes.any.isRequired
    }

    render() {
        const {
                earColumnIndex,
                isCarouselNavShowable,
                isTipsShowable,
                isEarShown,
                isHeightlessLyric,
                isLyricExpandable,
                showShrunkNavIcon,
                children
            } = this.props,

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

export default connect(mapStateToProps)(ResponsiveWrapper)
