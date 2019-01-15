import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getSingleShownEarColumnKey } from './helper'

class ResponsiveWrapper extends PureComponent {

    static propTypes = {
        // Through Redux.
        isCarouselNavShowable: PropTypes.bool.isRequired,
        earColumnIndex: PropTypes.number.isRequired,
        isEarShown: PropTypes.bool.isRequired,
        isHeightlessLyric: PropTypes.bool.isRequired,
        isLyricExpandable: PropTypes.bool.isRequired,
        isTwoRowMenu: PropTypes.bool.isRequired,
        showShrunkNavIcon: PropTypes.bool.isRequired,

        // From parent.
        children: PropTypes.any.isRequired
    }

    render() {
        const {
                earColumnIndex,
                isCarouselNavShowable,
                isEarShown,
                isHeightlessLyric,
                isLyricExpandable,
                showShrunkNavIcon,
                isTwoRowMenu,
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

                        isCarouselNavShowable ?
                            'RW__carouselNavShowable' : 'RW__carouselNavUnshowable',

                        isTwoRowMenu ?
                            'RW__twoRowMenu' :
                            'RW__oneRowMenu',

                        singleShownEarColumnKey ?
                            `RW__${singleShownEarColumnKey}EarColumnOnly` :
                            'RW__bothEarColumnsShown',

                        isHeightlessLyric ?
                            'RW__lyricHeightless' :
                            'RW__lyricHeighted',

                        isLyricExpandable &&
                            'RW__lyricExpandable'
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
        isEarShown
    },
    responsiveStore: {
        isHeightlessLyric,
        isLyricExpandable,
        isTwoRowMenu,
        showShrunkNavIcon
    }
}) => ({
    isCarouselNavShowable,
    earColumnIndex,
    isEarShown,
    isHeightlessLyric,
    isLyricExpandable,
    isTwoRowMenu,
    showShrunkNavIcon
})

export default connect(mapStateToProps)(ResponsiveWrapper)
