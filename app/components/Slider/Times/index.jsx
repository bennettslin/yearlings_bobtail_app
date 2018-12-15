// Text displays to indicate time spent and remaining.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import SliderTime from './Time'

import { getSongTotalTime } from 'helpers/data'
import { getFormattedTime } from 'helpers/format'

const mapStateToProps = ({
    renderedStore: { renderedSongIndex },
    sliderStore: { sliderTime }
}) => ({
    renderedSongIndex,
    sliderTime
})

class SliderTimes extends PureComponent {

    static propTypes = {
        // Through Redux.
        renderedSongIndex: PropTypes.number.isRequired,
        sliderTime: PropTypes.number.isRequired
    }

    render() {

        const {
                renderedSongIndex,
                sliderTime: spentTime
            } = this.props,

            remainTime = getSongTotalTime(renderedSongIndex) - spentTime

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
