// Toggle button to show, hide, and disable tips section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../Button/Button'
import { TIPS_TOGGLE_KEY } from '../../constants/access'
import { TIPS_OPTIONS } from '../../constants/options'

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

}) => (
    <Button
        isLargeSize
        buttonName="tips"
        isDisabled={!isEnabled}
        temporaryText={TIPS_OPTIONS[selectedTipsIndex]}
        accessKey={TIPS_TOGGLE_KEY}
        handleButtonClick={handleTipsToggle}
    />
)

TipsToggle.propTypes = tipsTogglePropTypes

export default connect(mapStateToProps)(TipsToggle)
