// Section to show song overview.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Texts from '../Text/Texts'
import OverviewToggle from 'components/Main/OverviewToggle'

import { getSongOverview, getSongIsLogue } from 'helpers/dataHelper'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'
import { getIsToggleInOverview } from 'helpers/responsiveHelper'

import {
    SHOWN,
    OVERVIEW_OPTIONS
} from 'constants/options'

const mapStateToProps = ({
    canMainRender,
    selectedOverviewIndex,
    deviceStore,
    renderableStore
}) => ({
    canMainRender,
    selectedOverviewIndex,
    deviceIndex: deviceStore.deviceIndex,
    renderableSongIndex: renderableStore.renderableSongIndex
})

class Overview extends Component {

    static propTypes = {
        // Through Redux.
        canMainRender: PropTypes.bool.isRequired,
        deviceIndex: PropTypes.number.isRequired,
        selectedOverviewIndex: PropTypes.number.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,

        // From parent.
        handleOverviewToggle: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._handleOverviewToggle = this._handleOverviewToggle.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canMainRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.canMainRender && !prevProps.canMainRender) {
    //         logger.warn('Overview rendered.')
    //     }
    // }

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
                renderableSongIndex } = this.props,

            overviewText = getSongOverview(renderableSongIndex),
            isLogue = getSongIsLogue(renderableSongIndex),

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
                'Overview',
                'fontSize__verse'
            )}>
                {isToggleInOverview &&
                    <div className="Overview__toggleFloatContainer">
                        <OverviewToggle
                            isEnabled={isEnabled}
                            handleOverviewToggle={this._handleOverviewToggle}
                        />
                    </div>
                }
                <Texts
                    text={overviewText}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Overview)
