// Component to show the played audio time.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getSongTitle } from 'album/api/songs'

const mapStateToProps = ({
    lyricStore: { lyricSongIndex }
}) => ({
    lyricSongIndex
})

class SongBannerTitle extends PureComponent {

    static propTypes = {
        // Through Redux.
        lyricSongIndex: PropTypes.number.isRequired
    }

    render() {
        const
            { lyricSongIndex } = this.props,
            songTitle = getSongTitle({ songIndex: lyricSongIndex })

        return (
            <div
                {...{
                    className: cx(
                        'SongBannerTitle',
                        'flexCentreContainer',
                        /**
                         * Make absolute so that song title length doesn't
                         * affect song banner width.
                         */
                        'abF'
                    )
                }}
            >
                {songTitle}
            </div>
        )
    }
}

export default connect(mapStateToProps)(SongBannerTitle)
