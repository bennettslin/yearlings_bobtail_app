// Singleton to toggle whether annotation and overview text is justified.
import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { mapIsTextJustified } from '../../redux/toggle/selector'
import { updateIsTextJustified } from '../../redux/toggle/action'

const TextJustifiedDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        isTextJustified = useSelector(mapIsTextJustified)

    const dispatchTextJustified = () => {
        dispatch(updateIsTextJustified(!isTextJustified))
        return true
    }

    useImperativeHandle(ref, () => dispatchTextJustified)
    return null
})

export default TextJustifiedDispatcher
