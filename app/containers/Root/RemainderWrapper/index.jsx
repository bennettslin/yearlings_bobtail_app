/**
 * TODO: Temporary wrapper for remaining class names. Slowly separate them out.
 * Not high priority work, though.
 */

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { SHOWN } from 'constants/options'

import { getSingleShownEarColumnKey } from '../helper'

class RemainderWrapper extends PureComponent {

    static propTypes = {
        // Through Redux.
        isDotsSlideShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isOverlayShown: PropTypes.bool.isRequired,
        isCarouselNavShowable: PropTypes.bool.isRequired,

        lyricAnnotationIndex: PropTypes.number.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        earColumnIndex: PropTypes.number.isRequired,
        selectedOverviewOption: PropTypes.string.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,

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
                lyricAnnotationIndex,
                isCarouselShown,
                isDotsSlideShown,
                earColumnIndex,
                selectedOverviewOption,
                selectedTipsOption,
                isLyricExpanded,
                isOverlayShown,
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
            }),

            overviewShown = selectedOverviewOption === SHOWN,
            tipsShown = selectedTipsOption === SHOWN

        return (
            <div
                {...{
                    className: cx(
                        'RemainderWrapper',

                        // Responsive.
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
                            'RM__lyricHeighted',

                        // Shown.
                        isOverlayShown ?
                            'RM__overlayShown' :
                            'RM__overlayHidden',

                        lyricAnnotationIndex ?
                            'RM__annotationShown' :
                            'RM__annotationHidden',

                        { 'RM__carouselExpanded': isCarouselShown },
                        isDotsSlideShown ?
                            'RM__dotsShown' :
                            'RM__dotsHidden',
                        isLyricExpanded ?
                            'RM__lyricExpanded' :
                            'RM__lyricCollapsed',
                        { 'RM__navExpanded': !isCarouselShown },

                        overviewShown &&
                            'RM__overviewShown',
                        tipsShown &&
                            'RM__tipsShown'
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
    toggleStore: {
        isCarouselShown,
        isDotsSlideShown,
        isLyricExpanded
    },
    transientStore: {
        isOverlayShown,
        isCarouselNavShowable,
        isEarShown
    },
    lyricStore: { lyricAnnotationIndex },
    responsiveStore: {
        isHeightlessLyric,
        isScoresTipsInMain,
        isTwoRowMenu,
        showShrunkNavIcon
    },
    optionStore: {
        selectedOverviewOption,
        selectedTipsOption
    }
}) => ({
    isCarouselShown,
    isLyricExpanded,
    isOverlayShown,
    isCarouselNavShowable,
    isDotsSlideShown,
    earColumnIndex,
    selectedOverviewOption,
    selectedTipsOption,
    isEarShown,
    lyricAnnotationIndex,
    isHeightlessLyric,
    showShrunkNavIcon,
    isScoresTipsInMain,
    isTwoRowMenu
})

export default connect(mapStateToProps)(RemainderWrapper)
