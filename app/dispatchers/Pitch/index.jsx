// Child that knows rules to toggle lyric. Not needed if just collapsing.
import { forwardRef, useImperativeHandle, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPitchSegmentsCount } from '../../api/pitch/segments'
import { setPitchSegmentIndex } from '../../redux/pitch/action'
import { mapPitchSegmentIndex } from '../../redux/pitch/selector'

const PitchDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        pitchSegmentIndex = useSelector(mapPitchSegmentIndex)

    const dispatchPitch = ({
        pitchSegmentIndex: nextPitchSegmentIndex,
        direction

    }) => {
        if (Number.isFinite(nextPitchSegmentIndex)) {
            dispatch(setPitchSegmentIndex(nextPitchSegmentIndex))

        } else if (direction === -1) {
            if (pitchSegmentIndex > 0) {
                dispatch(setPitchSegmentIndex(pitchSegmentIndex - 1))
            }

        } else if (direction === 1) {
            if (pitchSegmentIndex < getPitchSegmentsCount() - 1) {
                dispatch(setPitchSegmentIndex(pitchSegmentIndex + 1))
            }

        } else {
            return false
        }

        return true
    }

    useImperativeHandle(ref, () => dispatchPitch)
    return null
})

export default memo(PitchDispatcher)
