// Component to show the played audio time.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import { getIndexedTitleForSong } from '../../../../album/api/songs'
import { SELECTED_SONG_INDEX_SELECTOR } from '../../../../redux/selected/selectors'
import './style'

const mapStateToProps = state => {
    const selectedSongIndex = SELECTED_SONG_INDEX_SELECTOR(state)

    return {
        selectedSongIndex
    }
}

class SongBannerTitle extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired
    }

    render() {
        const
            { selectedSongIndex } = this.props,
            songTitle = getIndexedTitleForSong(selectedSongIndex)

        return (
            <div
                {...{
                    className: cx(
                        'SongBannerTitle',
                        'fCC',
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
