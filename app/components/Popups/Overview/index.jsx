// Popup container for overview section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Overview from '../../Overview'
import Popup from '../../Popup'

import { SHOWN } from 'constants/options'

const mapStateToProps = ({
    deviceStore: { isPhoneWidth },
    lyricStore: { canLyricCarouselEnter },
    optionStore: {
        selectedOverviewOption,
        selectedTipsOption
    },
    lyricStore: { isLyricLogue }
}) => ({
    isPhoneWidth,
    canLyricCarouselEnter,
    selectedOverviewOption,
    selectedTipsOption,
    isLyricLogue
})

class OverviewPopup extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPhoneWidth: PropTypes.bool.isRequired,
        canLyricCarouselEnter: PropTypes.bool.isRequired,
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
                isPhoneWidth,
                canLyricCarouselEnter,
                selectedOverviewOption,
                isLyricLogue,
                selectedTipsOption
            } = this.props,

            // Switch between logue and song overview sections.
            isVisibleBasedOnSong = isLyricLogue ?
                !inMain :

                /**
                 * Always hide overview section when about is open, or when tip
                 * is shown in song.
                 */
                Boolean(inMain) &&
                selectedTipsOption !== SHOWN &&
                selectedOverviewOption === SHOWN,

            isVisible = canLyricCarouselEnter && isVisibleBasedOnSong

        return (
            <Popup
                doUnmount
                bounceAnimate
                hasNarrowPadding
                {...{
                    popupName: 'Overview',
                    isVisible,
                    noFlexCentre: inMain,

                    // Only position absolute when in main and is phone.
                    noAbsoluteFull: isLyricLogue || !isPhoneWidth
                }}
            >
                <Overview />
            </Popup>
        )
    }
}

export default connect(mapStateToProps)(OverviewPopup)
