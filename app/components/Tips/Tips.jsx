// Section to show song tip.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import TipsToggle from './TipsToggle'
import Texts from '../Text/Texts'
// import Svg from 'components/Svg/Svg';

import { getSongTip } from 'helpers/dataHelper'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'
import { SHOWN, TIPS_OPTIONS } from 'constants/options'

const mapStateToProps = ({
    canMainRender,
    renderableStore,
    selectedTipsIndex,
    isScoresTipsInMain
}) => ({
    canMainRender,
    renderableSongIndex: renderableStore.renderableSongIndex,
    selectedTipsIndex,
    isScoresTipsInMain
})

class Tips extends Component {

    static propTypes = {
        // Through Redux.
        canMainRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,
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
        return nextProps.canMainRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.canMainRender && !prevProps.canMainRender) {
    //         logger.warn('Tips rendered.')
    //     }
    // }

    _handleTipsToggle(e) {
        // Prevent toggle from firing when not shown.
        const { selectedTipsIndex,
                handleTipsToggle } = this.props

        if (TIPS_OPTIONS[selectedTipsIndex] === SHOWN) {
            handleTipsToggle(e)
        }
    }

    render() {
        const { renderableSongIndex,
                selectedTipsIndex,
                isScoresTipsInMain } = this.props,

            tipText = getSongTip(renderableSongIndex),
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
                                isEnabled={isEnabled}
                                handleTipsToggle={this._handleTipsToggle}
                            />
                        </div>
                    )}

                    {tipText && (
                        <Texts
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
