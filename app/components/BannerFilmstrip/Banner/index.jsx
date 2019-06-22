import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import PlayTimer from './Timer'
import SongTitle from './Title'

import { getSongTotalTime } from 'album/api/time'

const mapStateToProps = ({
    responsiveStore: { isSmallBannerText },
    lyricStore: { lyricSongIndex },
    selectedStore: { selectedTime }
}) => ({
    isSmallBannerText,
    lyricSongIndex,
    selectedTime
})

class Banner extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSmallBannerText: PropTypes.bool.isRequired,
        lyricSongIndex: PropTypes.number.isRequired,
        selectedTime: PropTypes.number.isRequired
    }

    render() {
        const {
                isSmallBannerText,
                lyricSongIndex,
                selectedTime
            } = this.props,

            totalTime = getSongTotalTime(lyricSongIndex),

            cursorWidth = selectedTime / totalTime * 100

        return (
            <div
                {...{
                    className: cx(
                        'Banner',
                        isSmallBannerText &&
                            'Cursor__smallText',
                        'dropShadow',
                        'textShadow__banner',
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
                <SongTitle />
                <PlayTimer />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Banner)
