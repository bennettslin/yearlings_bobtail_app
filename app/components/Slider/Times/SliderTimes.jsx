// Text displays to indicate time spent and remaining.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import SliderTime from './SliderTime'

import { getSongTotalTime } from 'helpers/dataHelper'
import { getFormattedTime } from 'helpers/formatHelper'

const mapStateToProps = ({
    canVerseRender,
    renderableStore: {
        renderableSongIndex
    },
    songStore: {
        selectedTime
    },
    sliderStore: {
        isSliderTouched,
        sliderRatio
    }
}) => ({
    canVerseRender,
    renderableSongIndex,
    selectedTime,
    isSliderTouched,
    sliderRatio
})

class SliderTimes extends Component {

    static propTypes = {
        // Through Redux.
        canVerseRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,
        selectedTime: PropTypes.number.isRequired,
        isSliderTouched: PropTypes.bool.isRequired,
        sliderRatio: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canVerseRender
    }

    render() {

        const {
                renderableSongIndex,
                selectedTime,
                isSliderTouched,
                sliderRatio
            } = this.props,

            totalTime = getSongTotalTime(renderableSongIndex),

            workingRatio = isSliderTouched ?
                sliderRatio : (selectedTime / totalTime),

            spentTime =
                getFormattedTime(workingRatio * totalTime),

            remainTime =
            `\u2013${getFormattedTime((1 - workingRatio) * totalTime)}`

        return (
            <div className={cx(
                'SliderTimes',
                'absoluteFullContainer'
            )}>

                <SliderTime
                    isSpent
                    time={spentTime}
                />

                <SliderTime
                    time={remainTime}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(SliderTimes)
