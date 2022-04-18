import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { getSlidesCount } from '../../../../endpoint/promo/pitches'
import { mapArtupSlideIndex } from '../../../../redux/promo/selector'
import ArtupDispatcher from '../../../../dispatchers/Artup'
import Pagination from '../../../Promo/Pagination'
import { ARTUP_SUBPATH } from '../../../../constants/routing'

const ArtupPagination = () => {
    const
        dispatchArtup = useRef(),
        artupSlideIndex = useSelector(mapArtupSlideIndex)

    const dispatchPitch = pitchSlideIndex => {
        dispatchArtup.current({ artupSlideIndex: pitchSlideIndex })
    }

    return (
        <>
            <Pagination
                {...{
                    dispatchPitch,
                    selectedPitchIndex: artupSlideIndex,
                    pitchSlideCount: getSlidesCount(ARTUP_SUBPATH),
                }}
            />
            <ArtupDispatcher {...{ ref: dispatchArtup }} />
        </>
    )
}

export default ArtupPagination
