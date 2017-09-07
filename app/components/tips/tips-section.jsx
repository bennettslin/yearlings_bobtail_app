import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import TipsToggle from './tips-toggle'
import TextBlock from '../text/text-block'
import { getSongTip } from '../../helpers/data-helper'
import { SHOWN, TIPS_OPTIONS } from '../../constants/options'

class TipsSection extends Component {

    constructor(props) {
        super(props)

        this._handleTipsToggle = this._handleTipsToggle.bind(this)
    }

    _handleTipsToggle(e) {
        // Prevent toggle from firing when not shown.
        const { selectedTipsIndex,
                handleTipsToggle } = this.props

        if (TIPS_OPTIONS[selectedTipsIndex] === SHOWN) {
            handleTipsToggle(e)
        }
    }

    render() {
        const { tipsSongIndex,
                selectedTipsIndex,
                isScoresTipsInMain } = this.props,

            tipText = getSongTip(tipsSongIndex),
            isEnabled = TIPS_OPTIONS[selectedTipsIndex] === SHOWN

        return (
            <div className="section tips-section">
                <div className="tips-text">
                    {isScoresTipsInMain && (
                        <div className="tips-toggle-section">
                            <TipsToggle
                                isEnabled={isEnabled}
                                handleTipsToggle={this._handleTipsToggle}
                            />
                        </div>
                    )}
                    {tipText && (
                        <TextBlock
                            isLyric={false}
                            text={tipText}
                        />
                    )}
                </div>
                <div className="tips-image">

                </div>
            </div>
        )
    }
}

TipsSection.propTypes = {
    // Through Redux.
    tipsSongIndex: PropTypes.number.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,
    selectedTipsIndex: PropTypes.number.isRequired,
    isScoresTipsInMain: PropTypes.bool.isRequired,

    // From parent.
    handleTipsToggle: PropTypes.func.isRequired
}

export default connect(({
    tipsSongIndex,
    selectedSongIndex,
    selectedTipsIndex,
    isScoresTipsInMain
}) => ({
    tipsSongIndex,
    selectedSongIndex,
    selectedTipsIndex,
    isScoresTipsInMain
}))(TipsSection)
