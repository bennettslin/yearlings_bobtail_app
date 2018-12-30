// Text displays to indicate time spent and remaining.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import SliderTime from './Time'

import { getSongTotalTime } from 'album/api/time'
import { getFormattedTime } from 'helpers/format'

const mapStateToProps = ({
    lyricStore: { lyricSongIndex },
    sliderStore: { sliderTime }
}) => ({
    lyricSongIndex,
    sliderTime
})

class SliderTimes extends PureComponent {

    static propTypes = {
        // Through Redux.
        lyricSongIndex: PropTypes.number.isRequired,
        sliderTime: PropTypes.number.isRequired
    }

    render() {

        const {
                lyricSongIndex,
                sliderTime: spentTime
            } = this.props,

            remainTime = getSongTotalTime(lyricSongIndex) - spentTime

        return (
            <div className={cx(
                'SliderTimes',
                'abF'
            )}>

                <SliderTime
                    isSpent
                    time={getFormattedTime(spentTime)}
                />

                <SliderTime
                    time={`\u2013${getFormattedTime(remainTime)}`}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(SliderTimes)
