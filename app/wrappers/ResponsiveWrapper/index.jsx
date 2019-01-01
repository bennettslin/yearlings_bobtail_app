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
        showShrunkNavIcon: PropTypes.bool.isRequired,
        isScoresTipsInMain: PropTypes.bool.isRequired,
        isTwoRowMenu: PropTypes.bool.isRequired,

        // From parent.
        children: PropTypes.any.isRequired
    }

    render() {
        const {
                earColumnIndex,
                isCarouselNavShowable,
                isEarShown,
                isHeightlessLyric,
                showShrunkNavIcon,
                isScoresTipsInMain,
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
                            'RM__navIconShrunk' :
                            'RM__navIconStatic',

                        isCarouselNavShowable ?
                            'RM__carouselNavShowable' : 'RM__carouselNavUnshowable',

                        isScoresTipsInMain ?
                            'RM__scoresTipsMain' :
                            'RM__scoresTipsMenu',

                        isTwoRowMenu ?
                            'RM__twoRowMenu' :
                            'RM__oneRowMenu',

                        singleShownEarColumnKey ?
                            `RM__${singleShownEarColumnKey}EarColumnOnly` :
                            'RM__bothEarColumnsShown',

                        isHeightlessLyric ?
                            'RM__lyricHeightless' :
                            'RM__lyricHeighted'
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
        isScoresTipsInMain,
        isTwoRowMenu,
        showShrunkNavIcon
    }
}) => ({
    isCarouselNavShowable,
    earColumnIndex,
    isEarShown,
    isHeightlessLyric,
    showShrunkNavIcon,
    isScoresTipsInMain,
    isTwoRowMenu
})

export default connect(mapStateToProps)(ResponsiveWrapper)
