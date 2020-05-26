// Text displays to indicate time spent and remaining.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import SliderTime from './Time'

import { getDurationForSong } from '../../../album/api/time'
import { getFormattedTime } from '../../../helpers/format'

const mapStateToProps = state => {
    const {
        lyricStore: { lyricSongIndex },
        selectedStore: { selectedTime },
        sliderStore: {
            isSliderMoving,
            sliderTime
        },
        activatedStore: {
            isActivated,
            activatedTime
        }
    } = state

    return {
        lyricSongIndex,
        selectedTime,
        isSliderMoving,
        sliderTime,
        isActivated,
        activatedTime
    }
}

class SliderTimes extends PureComponent {

    static propTypes = {
        // Through Redux.
        lyricSongIndex: PropTypes.number.isRequired,
        selectedTime: PropTypes.number.isRequired,
        isSliderMoving: PropTypes.bool.isRequired,
        sliderTime: PropTypes.number.isRequired,
        isActivated: PropTypes.bool.isRequired,
        activatedTime: PropTypes.number.isRequired
    }

    render() {

        const {
            lyricSongIndex,
            selectedTime,
            isSliderMoving,
            sliderTime,
            isActivated,
            activatedTime
        } = this.props

        let time = selectedTime

        if (isSliderMoving) {
            time = sliderTime
        }

        if (isActivated) {
            time = activatedTime
        }

        const remainTime = getDurationForSong(lyricSongIndex) - time

        return (
            <div className={cx(
                'SliderTimes',
                'abF'
            )}>

                <SliderTime
                    isSpent
                    time={getFormattedTime(time)}
                />

                <SliderTime
                    time={`\u2013${getFormattedTime(remainTime)}`}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(SliderTimes)
