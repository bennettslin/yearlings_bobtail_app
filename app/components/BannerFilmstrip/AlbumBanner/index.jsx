import React, { memo } from 'react'
import cx from 'classnames'
import './style'

const AlbumBanner = () => (
    <div
        {...{
            className: cx(
                'AlbumBanner',
                'BannerFilmstrip__child',
                'textShadow__dark',
                'ovH',
                'Rancho'
            )
        }}
    >
        Bobtail Yearlings - <i>{`Yearling's Bobtail`}</i>
    </div>
)

export default memo(AlbumBanner)
