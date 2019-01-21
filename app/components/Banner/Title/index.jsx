// Component to show the played audio time.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getSongTitle } from 'album/api/songs'

const mapStateToProps = ({
    selectedStore: { selectedSongIndex }
}) => ({
    selectedSongIndex
})

class SongTitle extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired
    }

    render() {
        const
            { selectedSongIndex } = this.props,
            songTitle = getSongTitle({ songIndex: selectedSongIndex })

        return (
            <div
                {...{
                    className: cx(
                        'SongTitle'
                    )
                }}
            >
                {songTitle}
            </div>
        )
    }
}

export default connect(mapStateToProps)(SongTitle)
