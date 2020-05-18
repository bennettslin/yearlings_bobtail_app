import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getSongTipType } from '../../album/api/tips'
import { SHOWN } from '../../constants/options'
import { WIKI, WORMHOLES } from '../../constants/tips'

class ShownWrapper extends PureComponent {

    static propTypes = {
        // Through Redux.
        wormhole: PropTypes.bool.isRequired,
        reference: PropTypes.bool.isRequired,
        canLyricCarouselEnter: PropTypes.bool.isRequired,
        isLyricLogue: PropTypes.bool.isRequired,
        lyricSongIndex: PropTypes.number.isRequired,
        lyricAnnotationIndex: PropTypes.number.isRequired,
        selectedOverviewOption: PropTypes.string.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        isNavShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isOverlayShown: PropTypes.bool.isRequired,

        // From parent.
        children: PropTypes.any.isRequired
    }

    render() {
        const {
                wormhole,
                reference,
                canLyricCarouselEnter,
                isLyricLogue,
                lyricSongIndex,
                lyricAnnotationIndex,
                selectedOverviewOption,
                selectedTipsOption,
                isCarouselShown,
                isNavShown,
                isLyricExpanded,
                isDotsSlideShown,
                isOverlayShown,
                children
            } = this.props,

            songOverviewShown =
                !isLyricLogue && selectedOverviewOption === SHOWN,
            tipsShown = selectedTipsOption === SHOWN,

            tipType = getSongTipType(lyricSongIndex)

        return (
            <div
                {...{
                    className: cx(
                        'ShownWrapper',
                        'abF',

                        lyricAnnotationIndex ?
                            'ShW__annotationShown' :
                            'ShW__annotationHidden',

                        songOverviewShown ?
                            'ShW__songOverviewShown' :
                            'ShW__songOverviewHidden',

                        // Don't show these class names between songs.
                        canLyricCarouselEnter && tipsShown && [
                            'ShW__tipsShown',
                            `ShW__tips__${tipType}`,
                            (
                                /**
                                 * If dot is not selected, render the tips hand
                                 * that is pointed at dots toggle.
                                 */
                                (tipType === WIKI && !reference) ||
                                (tipType === WORMHOLES && !wormhole)
                            ) ?
                                'ShW__tips__isPointedAtDots' :
                                'ShW__tips__isPointedAtLyrics'
                        ],

                        isCarouselShown &&
                            'ShW__carouselExpanded',
                        isNavShown &&
                            'ShW__navExpanded',

                        isDotsSlideShown ?
                            'ShW__dotsShown' :
                            'ShW__dotsHidden',
                        isLyricExpanded ?
                            'ShW__lyricExpanded' :
                            'ShW__lyricCollapsed',

                        isOverlayShown ?
                            'ShW__overlayShown' :
                            'ShW__overlayHidden'
                    )
                }}
            >
                {children}
            </div>
        )
    }
}

const mapStateToProps = ({
    dotsStore: {
        wormhole,
        reference
    },
    lyricStore: {
        canLyricCarouselEnter,
        isLyricLogue,
        lyricSongIndex,
        lyricAnnotationIndex
    },
    optionStore: {
        selectedOverviewOption,
        selectedTipsOption
    },
    toggleStore: {
        isCarouselShown,
        isNavShown,
        isLyricExpanded,
        isDotsSlideShown
    },
    transientStore: { isOverlayShown }
}) => ({
    wormhole,
    reference,
    canLyricCarouselEnter,
    isLyricLogue,
    lyricSongIndex,
    lyricAnnotationIndex,
    selectedOverviewOption,
    selectedTipsOption,
    isCarouselShown,
    isNavShown,
    isLyricExpanded,
    isDotsSlideShown,
    isOverlayShown
})

export default connect(mapStateToProps)(ShownWrapper)
