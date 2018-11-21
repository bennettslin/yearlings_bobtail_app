// Section to show song tip.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import TipsToggle from './Toggle'
import Texts from '../Texts'

import { getSongTip } from './helper'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'
import {
    SHOWN, TIPS_OPTIONS
} from 'constants/options'

const mapStateToProps = ({
    renderStore: { canMainRender },
    renderedStore: { renderedSongIndex },
    responsiveStore: { isScoresTipsInMain },
    selectedTipsIndex
}) => ({
    canMainRender,
    renderedSongIndex,
    isScoresTipsInMain,
    selectedTipsIndex
})

class Tips extends Component {

    static propTypes = {
        // Through Redux.
        canMainRender: PropTypes.bool.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,
        isScoresTipsInMain: PropTypes.bool.isRequired,
        selectedTipsIndex: PropTypes.number.isRequired,

        // From parent.
        handleTipsToggle: PropTypes.func.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canMainRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    _handleTipsToggle = (e) => {
        // Prevent toggle from firing when not shown.
        const {
            selectedTipsIndex,
            handleTipsToggle
        } = this.props

        if (TIPS_OPTIONS[selectedTipsIndex] === SHOWN) {
            handleTipsToggle(e)
        }
    }

    render() {
        const {
                renderedSongIndex,
                selectedTipsIndex,
                isScoresTipsInMain
            } = this.props,

            tipText = getSongTip(renderedSongIndex),
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
                        <div className="Tips__toggleFloatContainer">
                            <TipsToggle
                                {...{
                                    isEnabled,
                                    handleTipsToggle: this._handleTipsToggle
                                }}
                            />
                        </div>
                    )}

                    {tipText && (
                        <Texts
                            {...{
                                text: tipText
                            }}
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
