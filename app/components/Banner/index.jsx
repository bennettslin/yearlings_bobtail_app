// Component to show played song title, time played, and slider interface.
import React, { PureComponent } from 'react'
import cx from 'classnames'

import BannerCursor from './Cursor'
import BannerScenes from './Scenes'

class Banner extends PureComponent {
    render() {
        return (
            <div className={cx(
                'Banner',
                'flexAlignContainer'
            )}>
                <BannerCursor />
                <BannerScenes />
            </div>
        )
    }
}

export default Banner
