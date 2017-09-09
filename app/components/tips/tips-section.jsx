import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import TipsToggle from './tips-toggle'
import TextBlock from '../text/text-block'
import { getSongTip } from '../../helpers/data-helper'
import { SHOWN, TIPS_OPTIONS } from '../../constants/options'

const mapStateToProps = ({
    tipsSongIndex,
    renderReadySongIndex,
    selectedSongIndex,
    selectedTipsIndex,
    isScoresTipsInMain
}) => ({
    tipsSongIndex,
    renderReadySongIndex,
    selectedSongIndex,
    selectedTipsIndex,
    isScoresTipsInMain
})

class TipsSection extends Component {

    static propTypes = {
        // Through Redux.
        tipsSongIndex: PropTypes.number.isRequired,
        renderReadySongIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedTipsIndex: PropTypes.number.isRequired,
        isScoresTipsInMain: PropTypes.bool.isRequired,

        // From parent.
        handleTipsToggle: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._handleTipsToggle = this._handleTipsToggle.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.renderReadySongIndex > -1
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

export default connect(mapStateToProps)(TipsSection)
