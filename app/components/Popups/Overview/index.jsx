// Popup container for overview section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Overview from '../../Overview'
import Popup from '../../Popup'

import { SHOWN } from 'constants/options'

const mapStateToProps = ({
    lyricStore: { canLyricCarouselEnter },
    transientStore: { isOverlayShown },
    optionStore: {
        selectedOverviewOption,
        selectedTipsOption
    },
    lyricStore: { isLyricLogue }
}) => ({
    canLyricCarouselEnter,
    isOverlayShown,
    selectedOverviewOption,
    selectedTipsOption,
    isLyricLogue
})

class OverviewPopup extends PureComponent {

    static propTypes = {
        // Through Redux.
        canLyricCarouselEnter: PropTypes.bool.isRequired,
        isOverlayShown: PropTypes.bool.isRequired,
        selectedOverviewOption: PropTypes.string.isRequired,
        isLyricLogue: PropTypes.bool.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,

        // From parent.
        inMain: PropTypes.bool
    }

    render() {
        const
            {
                inMain,
                canLyricCarouselEnter,
                isOverlayShown,
                selectedOverviewOption,
                isLyricLogue,
                selectedTipsOption
            } = this.props,

            // Switch between logue and song overview sections.
            isVisibleBasedOnSong = isLyricLogue ?

                // Hide when overlay is shown in logue.
                !inMain &&
                !isOverlayShown :

                // Hide when tip is shown in song.
                Boolean(inMain) &&
                selectedTipsOption !== SHOWN &&
                selectedOverviewOption === SHOWN,

            isVisible = canLyricCarouselEnter && isVisibleBasedOnSong

        return (
            <Popup
                doMountonEnter
                doUnmountOnExit
                bounceAnimate
                hasNarrowPadding
                noAbsoluteFull
                {...{
                    popupName: 'Overview',
                    className:
                        inMain ?
                            'OverviewPopup__inMain' :
                            'OverviewPopup__inLyric',
                    isVisible,
                    noFlexCentre: inMain
                }}
            >
                <Overview />
            </Popup>
        )
    }
}

export default connect(mapStateToProps)(OverviewPopup)
