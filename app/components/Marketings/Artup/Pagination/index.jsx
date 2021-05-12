import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { getArtupSlidesCount } from '../../../../api/artup/slides'
import { mapArtupSlideIndex } from '../../../../redux/marketing/selector'
import ArtupDispatcher from '../../../../dispatchers/Artup'
import Pagination from '../../../Pagination'

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
                    pitchSlideCount: getArtupSlidesCount(),
                }}
            />
            <ArtupDispatcher {...{ ref: dispatchArtup }} />
        </>
    )
}

export default ArtupPagination
