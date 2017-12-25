// Toggle button to show and hide title section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../button/button'
import { TITLE_TOGGLE_KEY } from '../../constants/access'

const mapStateToProps = ({
    isTitleInAudio,
    selectedTitleIndex
}) => ({
    isTitleInAudio,
    selectedTitleIndex
})

const titleToggleDefaultProps = {
    inMenu: false
},

titleTogglePropTypes = {
    // Through Redux.
    isTitleInAudio: PropTypes.bool.isRequired,
    selectedTitleIndex: PropTypes.number.isRequired,

    // From parent.
    inMenu: PropTypes.bool.isRequired,
    handleTitleToggle: PropTypes.func.isRequired
},

TitleToggle = ({

    isTitleInAudio,
    selectedTitleIndex,

    inMenu,
    handleTitleToggle

}) => {
    return inMenu !== isTitleInAudio && (
        <div className="section title-toggle-section access-keys-shown">
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

TitleToggle.defaultProps = titleToggleDefaultProps
TitleToggle.propTypes = titleTogglePropTypes

export default connect(mapStateToProps)(TitleToggle)
