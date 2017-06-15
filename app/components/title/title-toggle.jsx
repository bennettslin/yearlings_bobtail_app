// Toggle button to show and hide title section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../button/button'
import { TITLE_TOGGLE_KEY } from '../../constants/access'

const TitleToggle = ({

    isTitleInAudio,
    selectedTitleIndex,

    inMenu,
    handleTitleToggle

}) => {
    return inMenu !== isTitleInAudio && (
        <div className="section title-toggle">
            <div className="title-toggle-button-container">
                <Button
                    isCustomShape={true}
                    isCustomSize={true}
                    accessKey={TITLE_TOGGLE_KEY}
                    handleClick={handleTitleToggle}
                    iconText={selectedTitleIndex}
                />
            </div>
        </div>
    )
}

TitleToggle.defaultProps = {
    inMenu: false
}

TitleToggle.propTypes = {
    // Through Redux.
    isTitleInAudio: PropTypes.bool.isRequired,
    selectedTitleIndex: PropTypes.number.isRequired,

    // From parent.
    inMenu: PropTypes.bool.isRequired,
    handleTitleToggle: PropTypes.func.isRequired
}

export default connect(({
    isTitleInAudio,
    selectedTitleIndex
}) => ({
    isTitleInAudio,
    selectedTitleIndex
}))(TitleToggle)
