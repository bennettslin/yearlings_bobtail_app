// Component to show played song title, time played, and slider interface.
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import AudioTimer from './Timer'

import { getSongTitle } from 'album/api/songs'

const mapStateToProps = ({
    selectedStore: { selectedSongIndex }
}) => ({
    selectedSongIndex
})

class Banner extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired
    }

    render() {
        const {
                selectedSongIndex
            } = this.props,

            songTitle = getSongTitle({ songIndex: selectedSongIndex })

        return (
            <div className={cx(
                'Banner',

                'boxShadow__popupView',
                'BannerDisplay',
                'flexAlignContainer'
            )}>
                {songTitle}
                <AudioTimer />

            </div>
        )
    }
}

export default connect(mapStateToProps)(Banner)
