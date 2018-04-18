// Section to show song overview.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Texts from '../Text/Texts'
import OverviewToggle from '../Main/OverviewToggle'
import { getSongOverview, getSongIsLogue } from '../../helpers/dataHelper'
import { getIsToggleInOverview } from '../../helpers/responsiveHelper'
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
            <div className={cx(
                'Overview'
            )}>
                {isToggleInOverview &&
                    <div className="Overview__textFloatContainer">
                        <OverviewToggle
                            isEnabled={isEnabled}
                            handleOverviewToggle={this._handleOverviewToggle}
                        />
                    </div>
                }
                <Texts
                    isLyric={false}
                    text={overviewText}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(OverviewSection)
