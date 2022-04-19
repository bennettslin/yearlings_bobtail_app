import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import PitchDispatcher from '../../../../dispatchers/Pitch'
import Pagination from '../../../Promo/Pagination'
import {
    mapSelectedPitchSlideIndex,
    mapSelectedPromoKey,
} from '../../../../redux/promo/selector'
import { getSlidesCount } from '../../../../endpoint/promo/pitches'

const PitchPagination = () => {
    const
        dispatchPitch = useRef(),
        selectedPromoKey = useSelector(mapSelectedPromoKey),
        pitchSlideIndex = useSelector(mapSelectedPitchSlideIndex)

    const dispatchPitchForPagination = pitchSlideIndex => {
        dispatchPitch.current({ pitchSlideIndex })
    }

    return (
        <>
            <Pagination
                {...{
                    dispatchPitch: dispatchPitchForPagination,
                    selectedPitchIndex: pitchSlideIndex,
                    // TODO: Get promo key from store?
                    pitchSlideCount: getSlidesCount(selectedPromoKey),
                }}
            />
            <PitchDispatcher {...{ ref: dispatchPitch }} />
        </>
    )
}

export default PitchPagination
