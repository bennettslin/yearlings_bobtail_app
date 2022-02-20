import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { getParetoSlidesCount } from '../../../../endpoint/promo/pareto'
import { mapParetoSlideIndex } from '../../../../redux/promo/selector'
import ParetoDispatcher from '../../../../dispatchers/Pareto'
import Pagination from '../../../Promo/Pagination'

const ParetoPagination = () => {
    const
        dispatchPareto = useRef(),
        paretoSlideIndex = useSelector(mapParetoSlideIndex)

    const dispatchPitch = slideIndex => {
        dispatchPareto.current({ paretoSlideIndex: slideIndex })
    }

    return (
        <>
            <Pagination
                {...{
                    dispatchPitch,
                    selectedPitchIndex: paretoSlideIndex,
                    pitchSlideCount: getParetoSlidesCount(),
                }}
            />
            <ParetoDispatcher {...{ ref: dispatchPareto }} />
        </>
    )
}

export default ParetoPagination
