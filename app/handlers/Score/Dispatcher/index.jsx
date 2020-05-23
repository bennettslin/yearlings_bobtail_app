// Child that knows rules to toggle score. Not needed if just turning off.
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { updateToggleStore } from '../../../redux/toggle/action'
import { CAN_SCORE_MOUNT_SELECTOR } from '../../../redux/mount/selectors'
import { IS_SELECTED_LOGUE_SELECTOR } from '../../../redux/selected/selectors'
import { IS_SCORE_SHOWN_SELECTOR } from '../../../redux/toggle/selectors'

const ScoreDispatcher = ({ getRefs }) => {
    const
        dispatch = useDispatch(),
        isScoreShown = useSelector(IS_SCORE_SHOWN_SELECTOR),
        canScoreMount = useSelector(CAN_SCORE_MOUNT_SELECTOR),
        isSelectedLogue = useSelector(IS_SELECTED_LOGUE_SELECTOR),
        dispatchScore = (
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

    useEffect(() => {
        getRefs({ dispatchScore })
    }, [])

    return null
}

ScoreDispatcher.propTypes = {
    getRefs: PropTypes.func.isRequired
}

export default ScoreDispatcher
