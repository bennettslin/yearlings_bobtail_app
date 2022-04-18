import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PARETO_SUBPATH } from '../../constants/routing'
import { getSlidesCount } from '../../endpoint/promo/pitches'
import { setParetoSlideIndex } from '../../redux/promo/action'
import { mapParetoSlideIndex } from '../../redux/promo/selector'

const ParetoDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        paretoSlideIndex = useSelector(mapParetoSlideIndex)

    const dispatchPareto = ({
        paretoSlideIndex: nextParetoSlideIndex,
        direction,

    }) => {
        if (Number.isFinite(nextParetoSlideIndex)) {
            dispatch(setParetoSlideIndex(nextParetoSlideIndex))
            return true

        } else if (direction === -1) {
            if (paretoSlideIndex > 1) {
                dispatch(setParetoSlideIndex(paretoSlideIndex - 1))
                return true
            }

        } else if (direction === 1) {
            if (paretoSlideIndex < getSlidesCount(PARETO_SUBPATH)) {
                dispatch(setParetoSlideIndex(paretoSlideIndex + 1))
                return true
            }
        }

        return false
    }

    useImperativeHandle(ref, () => dispatchPareto)
    return null
})

export default ParetoDispatcher
