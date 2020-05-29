// Child that knows rules to toggle admin.
import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAudioOptionIndex } from '../../redux/session/action'

import { AUDIO_OPTIONS } from '../../constants/options'
import { AUDIO_OPTION_INDEX_SELECTOR } from '../../redux/session/selectors'

const AudioOptionDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        audioOptionIndex = useSelector(AUDIO_OPTION_INDEX_SELECTOR),
        dispatchAudioOption = () => {
            dispatch(updateAudioOptionIndex(
                (audioOptionIndex + 1) % AUDIO_OPTIONS.length
            ))
            return true
        }

    useImperativeHandle(ref, () => dispatchAudioOption)
    return null
})

export default AudioOptionDispatcher
