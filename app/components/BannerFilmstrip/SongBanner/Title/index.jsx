// Component to show the played audio time.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getTitleForSong } from '../../../../album/api/songs'

const mapStateToProps = ({
    selectedStore: { selectedSongIndex }
}) => ({
    selectedSongIndex
})

class SongBannerTitle extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired
    }

    render() {
        const
            { selectedSongIndex } = this.props,
            songTitle = getTitleForSong({ songIndex: selectedSongIndex })

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
