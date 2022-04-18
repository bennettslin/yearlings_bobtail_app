import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PARETO_SUBPATH } from '../../constants/routing'
import { getSlidesCount } from '../../endpoint/promo/pitches'
import { setPitchSlideIndex } from '../../redux/promo/action'
import { getMapPitchSlideIndex } from '../../redux/promo/selector'

const ParetoDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        paretoSlideIndex = useSelector(getMapPitchSlideIndex(PARETO_SUBPATH))

    const dispatchPareto = ({
        paretoSlideIndex: nextParetoSlideIndex,
        direction,

    }) => {
        if (Number.isFinite(nextParetoSlideIndex)) {
            dispatch(setPitchSlideIndex(PARETO_SUBPATH, nextParetoSlideIndex))
            return true

        } else if (direction === -1) {
            if (paretoSlideIndex > 1) {
                dispatch(setPitchSlideIndex(PARETO_SUBPATH, paretoSlideIndex - 1))
                return true
            }

        } else if (direction === 1) {
            if (paretoSlideIndex < getSlidesCount(PARETO_SUBPATH)) {
                dispatch(setPitchSlideIndex(PARETO_SUBPATH, paretoSlideIndex + 1))
                return true
            }
        }

        return false
    }

    useImperativeHandle(ref, () => dispatchPareto)
    return null
})

export default ParetoDispatcher
