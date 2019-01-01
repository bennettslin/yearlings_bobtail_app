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
                            'RW__navIconShrunk' :
                            'RW__navIconStatic',

                        isCarouselNavShowable ?
                            'RW__carouselNavShowable' : 'RW__carouselNavUnshowable',

                        isScoresTipsInMain ?
                            'RW__scoresTipsMain' :
                            'RW__scoresTipsMenu',

                        isTwoRowMenu ?
                            'RW__twoRowMenu' :
                            'RW__oneRowMenu',

                        singleShownEarColumnKey ?
                            `RW__${singleShownEarColumnKey}EarColumnOnly` :
                            'RW__bothEarColumnsShown',

                        isHeightlessLyric ?
                            'RW__lyricHeightless' :
                            'RW__lyricHeighted'
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
