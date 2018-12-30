// Popup container for overview section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Overview from '../../Overview'
import Popup from '../../Popup'

import { SHOWN } from 'constants/options'

const mapStateToProps = ({
    deviceStore: { isPhone },
    lyricStore: { canCarouselRender },
    optionStore: {
        selectedOverviewOption,
        selectedTipsOption
    },
    lyricStore: { isRenderedLogue }
}) => ({
    isPhone,
    canCarouselRender,
    selectedOverviewOption,
    selectedTipsOption,
    isRenderedLogue
})

class OverviewPopup extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPhone: PropTypes.bool.isRequired,
        canCarouselRender: PropTypes.bool.isRequired,
        selectedOverviewOption: PropTypes.string.isRequired,
        isRenderedLogue: PropTypes.bool.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,

        // From parent.
        inMain: PropTypes.bool
    }

    render() {
        const
            {
                inMain,
                isPhone,
                canCarouselRender,
                selectedOverviewOption,
                isRenderedLogue,
                selectedTipsOption
            } = this.props,

            // Switch between logue and song overview sections.
            isVisibleBasedOnSong = isRenderedLogue ?
                !inMain :

                /**
                 * Always hide overview section when title is open, or when tip
                 * is shown in song.
                 */
                Boolean(inMain) &&
                selectedTipsOption !== SHOWN &&
                selectedOverviewOption === SHOWN,

            isVisible = canCarouselRender && isVisibleBasedOnSong

        return (
            <Popup
                bounceAnimate
                hasNarrowPadding
                {...{
                    popupName: 'Overview',
                    isVisible,
                    noFlexCentre: inMain,

                    // Only position absolute when in main and is phone.
                    noAbsoluteFull: isRenderedLogue || !isPhone
                }}
            >
                <Overview />
            </Popup>
        )
    }
}

export default connect(mapStateToProps)(OverviewPopup)
