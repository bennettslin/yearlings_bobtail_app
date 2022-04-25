import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import getSongServerClientHoc from '../../../hocs/SongHoc'
import { getMetaTags, getMetaTitle } from '../../../utils/helmet'
import { useSelector } from 'react-redux'
import { mapIsPromoShown } from '../../../redux/toggle/selector'
import { mapSelectedPitchSlideIndex, mapSelectedPromoKey } from '../../../redux/promo/selector'

const LyricHelmet = ({ serverClientSongIndex }) => {
    const
        isPromoShown = useSelector(mapIsPromoShown),
        selectedPromoKey = useSelector(mapSelectedPromoKey),
        pitchSlideIndex = useSelector(mapSelectedPitchSlideIndex)

    return (
        <Helmet>
            <title>
                {getMetaTitle({
                    doShowPromo: isPromoShown,
                    songIndex: serverClientSongIndex,
                    promoKey: selectedPromoKey,
                    pitchIndex: pitchSlideIndex,
                })}
            </title>
            {getMetaTags({
                doShowPromo: isPromoShown,
                songIndex: serverClientSongIndex,
                promoKey: selectedPromoKey,
                pitchIndex: pitchSlideIndex,
            }).map(({
                name,
                property,
                content,
            }) => (
                <meta
                    {...{
                        key: name || property,
                        ...name && { name },
                        ...property && { property },
                        content,
                    }}
                />
            ))}
        </Helmet>
    )
}

LyricHelmet.propTypes = {
    serverClientSongIndex: PropTypes.number.isRequired,
}

export default getSongServerClientHoc(LyricHelmet)
