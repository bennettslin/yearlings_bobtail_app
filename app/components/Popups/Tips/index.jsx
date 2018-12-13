// Popup container for title section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Tips from '../../Tips'
import Popup from '../../Popup'

import { SHOWN } from 'constants/options'

const mapStateToProps = ({
    renderedStore: { isRenderedLogue },
    optionStore: { selectedTipsOption }
}) => ({
    isRenderedLogue,
    selectedTipsOption
})

class TipsPopup extends PureComponent {

    static propTypes = {
        // Through Redux.
        isRenderedLogue: PropTypes.bool.isRequired,
        selectedTipsOption: PropTypes.string.isRequired
    }

    render() {
        const
            {
                isRenderedLogue,
                selectedTipsOption
            } = this.props,

            isVisible =
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
