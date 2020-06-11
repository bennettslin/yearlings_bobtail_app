// Child that knows rules to toggle score. Not needed if just turning off.
import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateToggleStore } from '../../../redux/toggle/action'
import { mapIsSelectedLogue } from '../../../redux/selected/selectors'
import { mapIsScoreShown } from '../../../redux/toggle/selectors'
import { mapCanScoreMount } from '../../../redux/viewport/selectors'

const ScoreDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        isScoreShown = useSelector(mapIsScoreShown),
        canScoreMount = useSelector(mapCanScoreMount),
        isSelectedLogue = useSelector(mapIsSelectedLogue)

    const dispatchScore = (
        // Just toggle unless parent specifies value.
        triedIsScoreShown = !isScoreShown
    ) => {
        // Turning off is always successful.
        const isScoreShown = triedIsScoreShown &&

                // If trying to turn on, score must be mountable, and...
                canScoreMount &&

                // ... also must not be in logue.
                !isSelectedLogue

        dispatch(updateToggleStore({ isScoreShown }))

        // Try was successful.
        return isScoreShown === triedIsScoreShown
    }

    useImperativeHandle(ref, () => dispatchScore)
    return null
})

export default ScoreDispatcher
