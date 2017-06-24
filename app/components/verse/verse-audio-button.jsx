/**
 * Button shown only when verse is interactivated. If verse is already selected,
 * it toggles play. Otherwise, it navigates to that verse.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../button/button'
import { getVerseAudioIconText } from '../../helpers/format-helper'
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
                    'verseIndex',
                    'isEnabled',
                    'isSelected',
                    'isAfterSelected',
                    {
                        staticProp: 'isSelected',
                        subUpdatingKey: 'isPlaying'
                    }
                ]
            })

        return componentShouldUpdate
    }

    _handleAudioButtonClick(e) {

        if (this.props.isEnabled) {

            const { isSelected,
                    verseIndex,
                    handleLyricPlay,
                    handleLyricVerseSelect } = this.props

            // If verse is selected, audio button will toggle play.
            if (isSelected) {
                handleLyricPlay(e)

            // Otherwise, audio button will select verse.
            } else {
                handleLyricVerseSelect(e, verseIndex)
            }
        }
    }

    render() {
        const { isEnabled,
                isSelected } = this.props,

            iconText = getVerseAudioIconText(this.props)

        return (
            <div className="verse-audio-button-block">
                <div className="verse-audio-button-child">
                    <Button
                        buttonName="verse-audio"
                        isCustomSize={true}
                        isEnabled={isEnabled}
                        iconClass={isSelected ? 'audio-colour' : 'audio-nav'}
                        iconText={iconText}
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
    verseIndex: PropTypes.number.isRequired,
    isEnabled: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isAfterSelected: PropTypes.bool.isRequired,
    handleLyricPlay: PropTypes.func.isRequired,
    handleLyricVerseSelect: PropTypes.func.isRequired
}

export default connect(({
    isPlaying
}) => ({
    isPlaying
}))(VerseAudioButton)
