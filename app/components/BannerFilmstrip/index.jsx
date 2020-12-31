// Component to show played song title, time played, and slider interface.
import React, { memo } from 'react'
import cx from 'classnames'
import AlbumBanner from './AlbumBanner'
import SongBanner from './SongBanner'
import Filmstrip from './Filmstrip'
import './style'

const BannerFilmstrip = () => (
    <div
        {...{
            className: cx(
                'BannerFilmstrip',
                'flexAlignContainer'
            ),
        }}
    >
        <AlbumBanner />
        <SongBanner />
        <Filmstrip />
    </div>
)

export default memo(BannerFilmstrip)
