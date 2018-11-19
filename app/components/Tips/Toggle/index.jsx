// Toggle button to show, hide, and disable tips section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../../Button'
import { TIPS_TOGGLE_KEY } from 'constants/access'
import { TIPS_BUTTON_KEY } from 'constants/buttons'

const mapStateToProps = ({
    selectedTipsIndex
}) => ({
    selectedTipsIndex
})

const tipsTogglePropTypes = {
    // Through Redux.
    selectedTipsIndex: PropTypes.number.isRequired,

    // From props.
    isEnabled: PropTypes.bool.isRequired,
    handleTipsToggle: PropTypes.func.isRequired
},

TipsToggle = ({
    selectedTipsIndex,
    isEnabled,
    handleTipsToggle

}) => {
    return (
        <Button
            isLargeSize
            {...{
                buttonName: TIPS_BUTTON_KEY,
                isDisabled: !isEnabled,
                buttonIdentifier: selectedTipsIndex,
                accessKey: TIPS_TOGGLE_KEY,
                handleButtonClick: handleTipsToggle
            }}
        />
    )
}

TipsToggle.propTypes = tipsTogglePropTypes

export default connect(mapStateToProps)(TipsToggle)
