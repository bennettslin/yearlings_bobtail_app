// Toggle button to show, hide, and disable overview section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../button/button'
import { TIPS_TOGGLE_KEY } from '../../constants/access'
import { TIPS_OPTIONS } from '../../constants/options'

const TipsToggle = ({

    selectedTipsIndex,
    handleTipsToggle

}) => (
    <div className="tips-toggle-button-container">
        <Button
            accessKey={TIPS_TOGGLE_KEY}
            iconText={TIPS_OPTIONS[selectedTipsIndex]}
            isLarge={true}
            handleClick={handleTipsToggle}
        />
    </div>
)

TipsToggle.propTypes = {
    // Through Redux.
    selectedTipsIndex: PropTypes.number.isRequired,

    // From props.
    handleTipsToggle: PropTypes.func.isRequired
}

export default connect(({
    selectedTipsIndex
}) => ({
    selectedTipsIndex
}))(TipsToggle)
