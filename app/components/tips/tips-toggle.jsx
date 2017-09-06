// Toggle button to show, hide, and disable overview section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../button/button'
import { TIPS_TOGGLE_KEY } from '../../constants/access'
import { TIPS_OPTIONS } from '../../constants/options'

const TipsToggle = ({

    selectedTipsIndex,
    isEnabled,
    handleTipsToggle

}) => (
    <div className="tips-toggle-button-container">
        <Button
            isLarge={true}
            isEnabled={isEnabled}
            accessKey={TIPS_TOGGLE_KEY}
            iconText={TIPS_OPTIONS[selectedTipsIndex]}
            handleClick={handleTipsToggle}
        />
    </div>
)

TipsToggle.propTypes = {
    // Through Redux.
    selectedTipsIndex: PropTypes.number.isRequired,

    // From props.
    isEnabled: PropTypes.bool.isRequired,
    handleTipsToggle: PropTypes.func.isRequired
}

export default connect(({
    selectedTipsIndex
}) => ({
    selectedTipsIndex
}))(TipsToggle)
