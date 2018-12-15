// Popup container for title section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Tips from '../../Tips'
import Popup from '../../Popup'

import { SHOWN } from 'constants/options'

const mapStateToProps = ({
    renderStore: { canCarouselRender },
    renderedStore: { isRenderedLogue },
    optionStore: { selectedTipsOption }
}) => ({
    canCarouselRender,
    isRenderedLogue,
    selectedTipsOption
})

class TipsPopup extends PureComponent {

    static propTypes = {
        // Through Redux.
        canCarouselRender: PropTypes.bool.isRequired,
        isRenderedLogue: PropTypes.bool.isRequired,
        selectedTipsOption: PropTypes.string.isRequired
    }

    render() {
        const
            {
                canCarouselRender,
                isRenderedLogue,
                selectedTipsOption
            } = this.props,

            isVisible =
                canCarouselRender &&
                !isRenderedLogue &&
                selectedTipsOption === SHOWN

        return (
            <Popup
                isCardSize
                bounceAnimate
                hasNarrowPadding
                {...{
                    popupName: 'Tips',
                    isVisible
                }}
            >
                <Tips />
            </Popup>
        )
    }
}

export default connect(mapStateToProps)(TipsPopup)
