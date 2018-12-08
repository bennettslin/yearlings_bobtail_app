// Text displays to indicate time spent and remaining.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import SliderTime from './Time'

import { getSongTotalTime } from 'helpers/data'
import { getFormattedTime } from 'helpers/format'

const mapStateToProps = ({
    renderStore: { canLyricRender },
    renderedStore: { renderedSongIndex },
    sliderStore: { sliderTime }
}) => ({
    canLyricRender,
    renderedSongIndex,
    sliderTime
})

class SliderTimes extends Component {

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,
        sliderTime: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canLyricRender
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
                'absoluteFullContainer'
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
