/**
 * Button shown only when verse is interactivated. If verse is already selected,
 * it toggles play. Otherwise, it navigates to that verse.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../button/button'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

class VerseAudioButton extends Component {

    constructor(props) {
        super(props)

        this._handleAudioButtonClick = this._handleAudioButtonClick.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'isPlaying',
                    'isAudioButtonEnabled',
                    'isSelected',
                    'isAfterSelected'
                ]
            })

        return componentShouldUpdate
    }

    _handleAudioButtonClick(e) {
        if (this.props.isAudioButtonEnabled) {
            this.props.handleAudioButtonClick(e)
        }
    }

    render() {
        const { isAudioButtonEnabled,
                isPlaying,
                isSelected,
                isAfterSelected } = this.props

        let buttonIcon

        if (isSelected) {
            buttonIcon = isPlaying ? `\u23F8` : `\u25BA`
        } else {
            buttonIcon = isAfterSelected ? `\u23E9` : `\u23EA`
        }

        return (
            <div className="verse-audio-button-block">
                <div className="verse-audio-button-child">
                    <Button
                        buttonName="verse-audio"
                        isCustomSize={true}
                        isEnabled={isAudioButtonEnabled}
                        iconClass={isSelected ? 'audio-colour' : 'audio-nav'}
                        iconText={buttonIcon}
                        handleClick={this._handleAudioButtonClick}
                    />
                </div>
            </div>
        )
    }
}

VerseAudioButton.propTypes = {
    // Through Redux.
    isPlaying: PropTypes.bool.isRequired,

    // From parent.
    isAudioButtonEnabled: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isAfterSelected: PropTypes.bool.isRequired,
    handleAudioButtonClick: PropTypes.func.isRequired
}

export default connect(({
    isPlaying
}) => ({
    isPlaying
}))(VerseAudioButton)
