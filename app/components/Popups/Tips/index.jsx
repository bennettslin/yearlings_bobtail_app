// Popup container for tips section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Tips from '../../Tips'
import Popup from '../../Popup'

import { SHOWN } from 'constants/options'

const mapStateToProps = ({
    lyricStore: {
        canLyricCarouselEnter,
        isLyricLogue
    },
    optionStore: { selectedTipsOption }
}) => ({
    canLyricCarouselEnter,
    isLyricLogue,
    selectedTipsOption
})

class TipsPopup extends PureComponent {

    static propTypes = {
        // Through Redux.
        canLyricCarouselEnter: PropTypes.bool.isRequired,
        isLyricLogue: PropTypes.bool.isRequired,
        selectedTipsOption: PropTypes.string.isRequired
    }

    render() {
        const
            {
                canLyricCarouselEnter,
                isLyricLogue,
                selectedTipsOption
            } = this.props,

            isVisible =
                canLyricCarouselEnter &&
                !isLyricLogue &&
                selectedTipsOption === SHOWN

        return (
            <Popup
                doMountonEnter
                doUnmountOnExit
                isCardSize
                bounceAnimate
                hasNarrowPadding
                noAbsoluteFull
                {...{
                    popupName: TipsPopup.name,
                    isVisible
                }}
            >
                <Tips />
            </Popup>
        )
    }
}

export default connect(mapStateToProps)(TipsPopup)
