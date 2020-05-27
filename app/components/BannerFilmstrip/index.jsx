// Component to show played song title, time played, and slider interface.
import React, { PureComponent } from 'react'
import cx from 'classnames'
import AlbumBanner from './AlbumBanner'
import SongBanner from './SongBanner'
import Filmstrip from './Filmstrip'
import './style'

class BannerFilmstrip extends PureComponent {
    render() {
        return (
            <div className={cx(
                'BannerFilmstrip',
                'flexAlignContainer'
            )}>
                <AlbumBanner />
                <SongBanner />
                <Filmstrip />
            </div>
        )
    }
}

export default BannerFilmstrip
