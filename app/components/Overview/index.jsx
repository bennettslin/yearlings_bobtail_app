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
    viewportStore: { deviceWidthIndex },
    lyricStore: {
        lyricSongIndex,
        isLyricLogue
    }
}) => ({
    deviceWidthIndex,
    lyricSongIndex,
    isLyricLogue
})

class Overview extends PureComponent {

    static propTypes = {
        // Through Redux.
        deviceWidthIndex: PropTypes.number.isRequired,
        lyricSongIndex: PropTypes.number.isRequired,
        isLyricLogue: PropTypes.bool.isRequired
    }

    render() {
        const {
                deviceWidthIndex,
                lyricSongIndex,
                isLyricLogue
            } = this.props,

            overviewText = getSongOverview(lyricSongIndex),

            // TODO: Revisit whether to show toggle in logue when it is heightless lyric.
            /**
             * Always show when it's song in phone. Also show when it's logue
             * and is heightless lyric.
             */
            isToggleInOverview =
                !isLyricLogue &&
                getIsToggleInOverview(deviceWidthIndex)

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
                <Texts {...{ text: overviewText }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Overview)
