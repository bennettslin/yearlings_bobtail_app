// Section to show song overview.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Texts from '../Texts'
import OverviewToggle from '../Main/OverviewToggle'

import {
    getSongOverview,
    getIsToggleInOverview
} from './helper'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'

const mapStateToProps = ({
    deviceStore: { deviceIndex },
    renderStore: { canMainRender },
    renderedStore: {
        renderedSongIndex,
        isRenderedLogue
    }
}) => ({
    deviceIndex,
    canMainRender,
    renderedSongIndex,
    isRenderedLogue
})

class Overview extends Component {

    static propTypes = {
        // Through Redux.
        canMainRender: PropTypes.bool.isRequired,
        deviceIndex: PropTypes.number.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,
        isRenderedLogue: PropTypes.bool.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canMainRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    render() {
        const {
                deviceIndex,
                renderedSongIndex,
                isRenderedLogue
            } = this.props,

            overviewText = getSongOverview(renderedSongIndex),

            // TODO: Revisit whether to show toggle in logue when it is heightless lyric.
            /**
             * Always show when is song in phone. Also show when is logue and is
             * heightless lyric.
             */
            isToggleInOverview =
                !isRenderedLogue &&
                getIsToggleInOverview(deviceIndex)

        return (
            <div className={cx(
                'Overview',
                'fontSize__verse'
            )}>
                {isToggleInOverview &&
                    <div className="Overview__toggleFloatContainer">
                        <OverviewToggle />
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
