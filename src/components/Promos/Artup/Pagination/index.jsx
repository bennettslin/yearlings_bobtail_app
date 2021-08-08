import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { getArtupSlidesCount } from '../../../../endpoint/promo/artup'
import { mapArtupSlideIndex } from '../../../../redux/promo/selector'
import ArtupDispatcher from '../../../../dispatchers/Artup'
import Pagination from '../../../Promo/Pagination'

const ArtupPagination = () => {
    const
        dispatchArtup = useRef(),
        artupSlideIndex = useSelector(mapArtupSlideIndex)

    const dispatchPitch = slideIndex => {
        dispatchArtup.current({ artupSlideIndex: slideIndex })
    }

    return (
        <>
            <Pagination
                {...{
                    dispatchPitch,
                    selectedPitchIndex: artupSlideIndex,
                    pitchSlideCount: getArtupSlidesCount(),
                }}
            />
            <ArtupDispatcher {...{ ref: dispatchArtup }} />
        </>
    )
}

export default ArtupPagination
