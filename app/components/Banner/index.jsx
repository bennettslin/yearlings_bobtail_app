// Component to show played song title, time played, and slider interface.
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import BannerAccess from './Access'
import BannerCursor from './Cursor'
import BannerScenes from './Scenes'
import PlayTimer from './Timer'
import SongTitle from './Title'

const mapStateToProps = ({
    responsiveStore: { isSmallBannerText }
}) => ({
    isSmallBannerText
})

class Banner extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSmallBannerText: PropTypes.bool.isRequired
    }

    render() {
        const { isSmallBannerText } = this.props

        return (
            <div className={cx(
                'Banner',
                isSmallBannerText &&
                    'Banner__smallText',
                'boxShadow__popupView',
                'flexAlignContainer'
            )}>
                <BannerCursor />
                <SongTitle />
                <PlayTimer />
                <BannerAccess />
                <BannerScenes />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Banner)
