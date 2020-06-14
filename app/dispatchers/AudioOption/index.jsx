// Child that knows rules to toggle admin.
import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAudioOptionIndex } from '../../redux/session/action'

import { AUDIO_OPTIONS } from '../../constants/options'
import { mapAudioOptionIndex } from '../../redux/session/selector'

const AudioOptionDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        audioOptionIndex = useSelector(mapAudioOptionIndex)

    const dispatchAudioOption = () => {
        dispatch(updateAudioOptionIndex(
            (audioOptionIndex + 1) % AUDIO_OPTIONS.length
        ))
        return true
    }

    useImperativeHandle(ref, () => dispatchAudioOption)
    return null
})

export default AudioOptionDispatcher
