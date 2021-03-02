import React from 'react'
import cx from 'classnames'
import { ALBUM_TITLE } from '../../../constants/paths'
import './style'

const AlbumBanner = () => (
    <div
        {...{
            className: cx(
                'AlbumBanner',
                'BannerFilmstrip__child',
                'textShadow__dark',
                'ovH',
                'Rancho',
            ),
        }}
    >
        Bobtail Yearlings - <i>{ALBUM_TITLE}</i>
    </div>
)

export default AlbumBanner
