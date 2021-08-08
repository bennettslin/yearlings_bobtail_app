import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { getArtup2SlidesCount } from '../../../../endpoint/promo/artup2'
import { mapArtup2SlideIndex } from '../../../../redux/promo/selector'
import Artup2Dispatcher from '../../../../dispatchers/Artup2'
import Pagination from '../../../Promo/Pagination'

const Artup2Pagination = () => {
    const
        dispatchArtup2 = useRef(),
        artup2SlideIndex = useSelector(mapArtup2SlideIndex)

    const dispatchPitch = slideIndex => {
        dispatchArtup2.current({ artup2SlideIndex: slideIndex })
    }

    return (
        <>
            <Pagination
                {...{
                    dispatchPitch,
                    selectedPitchIndex: artup2SlideIndex,
                    pitchSlideCount: getArtup2SlidesCount(),
                }}
            />
            <Artup2Dispatcher {...{ ref: dispatchArtup2 }} />
        </>
    )
}

export default Artup2Pagination
