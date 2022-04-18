import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { getSlidesCount } from '../../../../endpoint/promo/pitches'
import { mapParetoSlideIndex } from '../../../../redux/promo/selector'
import ParetoDispatcher from '../../../../dispatchers/Pareto'
import Pagination from '../../../Promo/Pagination'
import { PARETO_SUBPATH } from '../../../../constants/routing'

const ParetoPagination = () => {
    const
        dispatchPareto = useRef(),
        paretoSlideIndex = useSelector(mapParetoSlideIndex)

    const dispatchPitch = pitchSlideIndex => {
        dispatchPareto.current({ paretoSlideIndex: pitchSlideIndex })
    }

    return (
        <>
            <Pagination
                {...{
                    dispatchPitch,
                    selectedPitchIndex: paretoSlideIndex,
                    pitchSlideCount: getSlidesCount(PARETO_SUBPATH),
                }}
            />
            <ParetoDispatcher {...{ ref: dispatchPareto }} />
        </>
    )
}

export default ParetoPagination
