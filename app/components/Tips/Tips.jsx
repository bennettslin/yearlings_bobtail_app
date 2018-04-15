// Section to show song tip.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import TipsToggle from './TipsToggle'
import TextBlock from '../Text/TextBlock'
// import DynamicSvg from '../DynamicSvg/DynamicSvg';

import { getSongTip } from '../../helpers/dataHelper'
import { SHOWN, TIPS_OPTIONS } from '../../constants/options'

const mapStateToProps = ({
    renderReadySongIndex,
    selectedTipsIndex,
    isScoresTipsInMain
}) => ({
    renderReadySongIndex,
    selectedTipsIndex,
    isScoresTipsInMain
})

class Tips extends Component {

    static propTypes = {
        // Through Redux.
        renderReadySongIndex: PropTypes.number.isRequired,
        selectedTipsIndex: PropTypes.number.isRequired,
        isScoresTipsInMain: PropTypes.bool.isRequired,

        // From parent.
        handleTipsToggle: PropTypes.func.isRequired
    }

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
        const { renderReadySongIndex,
                selectedTipsIndex,
                isScoresTipsInMain } = this.props,

            tipText = getSongTip(renderReadySongIndex),
            isEnabled = TIPS_OPTIONS[selectedTipsIndex] === SHOWN

        return (
            <div className={cx(
                'Tips'
            )}>
                <div className={cx(
                    'Tips__textContainer',
                    'fontSize__verse'
                )}>

                    {isScoresTipsInMain && (
                        <div className="Tips__textFloatContainer">
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

                <div className="Tips__imageContainer">
                    {/* TODO: Put a dynamic svg in here. */}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Tips)
