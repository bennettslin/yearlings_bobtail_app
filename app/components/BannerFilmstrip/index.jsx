// Component to show played song title, time played, and slider interface.
import React, { PureComponent } from 'react'
import cx from 'classnames'

import Banner from './Banner'
import Filmstrip from './Filmstrip'

class BannerFilmstrip extends PureComponent {
    render() {
        return (
            <div className={cx(
                'BannerFilmstrip',
                'flexAlignContainer'
            )}>
                <Banner />
                <Filmstrip />
            </div>
        )
    }
}

export default BannerFilmstrip
