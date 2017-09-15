// Section to show song overview.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextBlock from '../text/text-block'
import OverviewToggle from './overview-toggle'
import { getSongOverview, getSongIsLogue } from '../../helpers/data-helper'
import { getIsToggleInOverview } from '../../helpers/responsive-helper'
import { SHOWN, OVERVIEW_OPTIONS } from '../../constants/options'

const mapStateToProps = ({
    deviceIndex,
    selectedOverviewIndex,
    renderReadySongIndex
}) => ({
    deviceIndex,
    selectedOverviewIndex,
    renderReadySongIndex
})

class OverviewSection extends Component {

    static propTypes = {
        // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        selectedOverviewIndex: PropTypes.number.isRequired,
        renderReadySongIndex: PropTypes.number.isRequired,

        // From parent.
        handleOverviewToggle: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._handleOverviewToggle = this._handleOverviewToggle.bind(this)
    }

    _handleOverviewToggle(e) {
        // Prevent toggle from firing when not shown.
        const { selectedOverviewIndex,
                handleOverviewToggle } = this.props

        if (OVERVIEW_OPTIONS[selectedOverviewIndex] === SHOWN) {
            handleOverviewToggle(e)
        }
    }

    render() {
        const { deviceIndex,
                selectedOverviewIndex,
                renderReadySongIndex } = this.props,

            overviewText = getSongOverview(renderReadySongIndex),
            isLogue = getSongIsLogue(renderReadySongIndex),

            // TODO: Revisit whether to show toggle in logue when it is heightless lyric.
            /**
             * Always show when is song in phone. Also show when is logue and is
             * heightless lyric.
             */
            isToggleInOverview = !isLogue && getIsToggleInOverview(deviceIndex),
            isEnabled =
                OVERVIEW_OPTIONS[selectedOverviewIndex] === SHOWN &&
                !isLogue

        return (
            <div className="section overview-section">
                <div className="overview-text">
                    {isToggleInOverview &&
                        <div className="overview-toggle-section">
                            <OverviewToggle
                                isEnabled={isEnabled}
                                handleOverviewToggle={this._handleOverviewToggle}
                            />
                        </div>
                    }
                    <TextBlock
                        isLyric={false}
                        text={overviewText}
                    />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(OverviewSection)
