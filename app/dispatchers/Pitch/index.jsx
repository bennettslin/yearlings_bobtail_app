import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPitchSegmentsCount } from '../../api/pitch/segments'
import { setPitchSegmentIndex } from '../../redux/marketing/action'
import { mapPitchSegmentIndex } from '../../redux/marketing/selector'

const PitchDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        pitchSegmentIndex = useSelector(mapPitchSegmentIndex)

    const dispatchPitch = ({
        pitchSegmentIndex: nextPitchSegmentIndex,
        direction,

    }) => {
        if (Number.isFinite(nextPitchSegmentIndex)) {
            dispatch(setPitchSegmentIndex(nextPitchSegmentIndex))
            return true

        } else if (direction === -1) {
            if (pitchSegmentIndex > 1) {
                dispatch(setPitchSegmentIndex(pitchSegmentIndex - 1))
                return true
            }

        } else if (direction === 1) {
            if (pitchSegmentIndex < getPitchSegmentsCount()) {
                dispatch(setPitchSegmentIndex(pitchSegmentIndex + 1))
                return true
            }
        }

        return false
    }

    useImperativeHandle(ref, () => dispatchPitch)
    return null
})

export default PitchDispatcher
