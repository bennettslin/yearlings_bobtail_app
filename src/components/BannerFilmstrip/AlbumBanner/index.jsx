import React from 'react'
import cx from 'classnames'
import { getTitleForAlbum } from '../../../endpoint/album/title'
import './style'

const AlbumBanner = () => (
    <div
        {...{
            className: cx(
                'AlbumBanner',
                'BannerFilmstrip__child',
                'textShadow__dark',
                'ovH',
                'font__heading',
            ),
        }}
    >
        Bobtail Yearlings - <i>{getTitleForAlbum()}</i>
    </div>
)

export default AlbumBanner
