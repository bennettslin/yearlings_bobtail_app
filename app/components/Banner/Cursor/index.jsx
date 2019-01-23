import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getSongTotalTime } from 'album/api/time'

const mapStateToProps = ({
    lyricStore: { lyricSongIndex },
    selectedStore: { selectedTime }
}) => ({
    lyricSongIndex,
    selectedTime
})

class BannerCursor extends PureComponent {

    static propTypes = {
        // Through Redux.
        lyricSongIndex: PropTypes.number.isRequired,
        selectedTime: PropTypes.number.isRequired
    }

    render() {
        const {
                lyricSongIndex,
                selectedTime
            } = this.props,

            totalTime = getSongTotalTime(lyricSongIndex),

            cursorWidth = selectedTime / totalTime * 100

        return (
            <div
                {...{
                    className: cx(
                        'BannerCursor',
                        'abF'
                    )
                }}
            >
                <div
                    {...{
                        className: cx(
                            'BannerTracker',
                            'abF'
                        ),
                        style: {
                            width: `${cursorWidth}%`
                        }
                    }}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(BannerCursor)
