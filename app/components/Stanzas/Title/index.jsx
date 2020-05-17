// Component to show the played audio time.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getTitleForSong } from '../../../album/api/songs'

const mapStateToProps = ({
    lyricStore: { lyricSongIndex }
}) => ({
    lyricSongIndex
})

class SongStanzasTitle extends PureComponent {

    static propTypes = {
        // Through Redux.
        lyricSongIndex: PropTypes.number.isRequired
    }

    render() {
        const
            { lyricSongIndex } = this.props,
            songTitle = getTitleForSong({ songIndex: lyricSongIndex })

        return (
            <div
                {...{
                    className: cx(
                        'SongStanzasTitle',
                        'flexCentreContainer',
                        'textShadow__dark',
                        'Rancho'
                    )
                }}
            >
                {songTitle}
            </div>
        )
    }
}

export default connect(mapStateToProps)(SongStanzasTitle)
