// Text displays to indicate time spent and remaining.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import SliderTime from './SliderTime'

import { getSongTotalTime } from 'helpers/dataHelper'
import { getFormattedTime } from 'helpers/formatHelper'

const mapStateToProps = ({
    canSliderRender,
    selectedTimePlayed,
    renderableStore,
    sliderStore
}) => ({
    canSliderRender,
    selectedTimePlayed,
    renderableSongIndex: renderableStore.renderableSongIndex,
    isSliderTouched: sliderStore.isSliderTouched,
    sliderRatio: sliderStore.sliderRatio
})

class SliderTimes extends Component {

    static propTypes = {
        // Through Redux.
        canSliderRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,
        selectedTimePlayed: PropTypes.number.isRequired,
        isSliderTouched: PropTypes.bool.isRequired,
        sliderRatio: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSliderRender
    }

    render() {

        const {
                renderableSongIndex,
                selectedTimePlayed,
                isSliderTouched,
                sliderRatio
            } = this.props,

            totalTime = getSongTotalTime(renderableSongIndex),

            workingRatio = isSliderTouched ?
                sliderRatio : (selectedTimePlayed / totalTime),

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
