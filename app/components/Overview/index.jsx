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
    viewportStore: { isPhoneWidth },
    responsiveStore: { isHeightlessLyric },
    lyricStore: {
        lyricSongIndex,
        isLyricLogue
    }
}) => ({
    isPhoneWidth,
    isHeightlessLyric,
    lyricSongIndex,
    isLyricLogue
})

class Overview extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPhoneWidth: PropTypes.bool.isRequired,
        isHeightlessLyric: PropTypes.bool.isRequired,
        lyricSongIndex: PropTypes.number.isRequired,
        isLyricLogue: PropTypes.bool.isRequired
    }

    render() {
        const {
                isPhoneWidth,
                isHeightlessLyric,
                lyricSongIndex,
                isLyricLogue
            } = this.props,

            overviewText = getSongOverview(lyricSongIndex),

            isToggleInOverview = getIsToggleInOverview({
                isPhoneWidth,
                isHeightlessLyric,
                isLyricLogue
            })

        return (
            <div className={cx(
                'Overview',
                'fontSize__verse',
                isToggleInOverview &&
                    'Overview__toggleInOverview'
            )}>
                {isToggleInOverview &&
                    <div className="Overview__toggleFloatContainer">
                        <OverviewToggle isToggleInOverview />
                    </div>
                }
                <Texts {...{ text: overviewText }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Overview)
