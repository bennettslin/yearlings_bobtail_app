import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSlidesCount } from '../../endpoint/promo/pitches'
import { setPitchSlideIndex } from '../../redux/promo/action'
import { mapSelectedPitchSlideIndex, mapSelectedPromoKey } from '../../redux/promo/selector'

const PitchDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        selectedPromoKey = useSelector(mapSelectedPromoKey),
        // Will be -1 if selected promo key is not valid pitch.
        pitchSlideIndex = useSelector(mapSelectedPitchSlideIndex)

    const dispatchPitch = ({
        pitchSlideIndex: nextPitchSlideIndex,
        direction,

    }) => {
        if (pitchSlideIndex === -1) {
            return false
        }

        if (Number.isFinite(nextPitchSlideIndex)) {
            dispatch(setPitchSlideIndex(nextPitchSlideIndex))
            return true

        } else if (direction === -1) {
            if (pitchSlideIndex > 1) {
                dispatch(setPitchSlideIndex(pitchSlideIndex - 1))
                return true
            }

        } else if (direction === 1) {
            // TODO: Get slides count directly from store?
            if (pitchSlideIndex < getSlidesCount(selectedPromoKey)) {
                dispatch(setPitchSlideIndex(pitchSlideIndex + 1))
                return true
            }
        }

        return false
    }

    useImperativeHandle(ref, () => dispatchPitch)
    return null
})

export default PitchDispatcher
