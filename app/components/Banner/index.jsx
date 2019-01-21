// Component to show played song title, time played, and slider interface.
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import BannerAccess from './Access'
import BannerScenes from './Scenes'
import PlayTimer from './Timer'
import SongTitle from './Title'

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
        return (
            <div className={cx(
                'Banner',
                'boxShadow__popupView',
                'flexAlignContainer'
            )}>
                <BannerScenes />
                <SongTitle />
                <PlayTimer />
                <BannerAccess />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Banner)
