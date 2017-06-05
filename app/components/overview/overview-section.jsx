// Section to show song overview.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextBlock from '../text/text-block'
import OverviewToggle from './overview-toggle'
import { getOverview } from '../../helpers/data-helper'
import { getIsToggleInOverview } from '../../helpers/responsive-helper'
import { SHOWN, OVERVIEW_OPTIONS } from '../../constants/options'

class OverviewSection extends Component {

    constructor(props) {
        super(props)

        this._handleOverviewToggle = this._handleOverviewToggle.bind(this)
    }

    _handleOverviewToggle(e) {
        const { selectedOverviewIndex,
                handleOverviewToggle } = this.props

        if (OVERVIEW_OPTIONS[selectedOverviewIndex] === SHOWN) {
            handleOverviewToggle(e)
        }
    }

    render() {
        const { deviceIndex,
                selectedOverviewIndex,
                overviewIndex } = this.props,

            overviewText = getOverview(overviewIndex),
            isToggleInOverview = getIsToggleInOverview(deviceIndex),
            isEnabled = OVERVIEW_OPTIONS[selectedOverviewIndex] === SHOWN

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

OverviewSection.propTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    selectedOverviewIndex: PropTypes.number.isRequired,

    // From parent.
    overviewIndex: PropTypes.number.isRequired,
    handleOverviewToggle: PropTypes.func.isRequired
}

export default connect(({
    deviceIndex,
    selectedOverviewIndex
}) => ({
    deviceIndex,
    selectedOverviewIndex
}))(OverviewSection)
