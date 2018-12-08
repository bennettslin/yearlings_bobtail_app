// Section to show song overview.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Texts from '../Texts'
import OverviewToggle from '../Main/OverviewToggle'

import {
    getSongOverview,
    getIsToggleInOverview
} from './helper'

const mapStateToProps = ({
    deviceStore: { deviceIndex },
    renderedStore: {
        renderedSongIndex,
        isRenderedLogue
    }
}) => ({
    deviceIndex,
    renderedSongIndex,
    isRenderedLogue
})

class Overview extends PureComponent {

    static propTypes = {
        // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,
        isRenderedLogue: PropTypes.bool.isRequired
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
