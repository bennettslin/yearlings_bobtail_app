// Child that knows rules to toggle about popup.
import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateIsAboutShown } from '../../redux/toggle/action'
import { mapIsAboutShown } from '../../redux/toggle/selectors'

const AboutDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        isAboutShown = useSelector(mapIsAboutShown),
        dispatchAbout = (
            // Just toggle unless parent specifies value.
            newIsAboutShown = !isAboutShown
        ) => {
            // Turning on or off is always successful.
            dispatch(updateIsAboutShown(newIsAboutShown))
            return true
        }

    useImperativeHandle(ref, () => dispatchAbout)
    return null
})

export default AboutDispatcher
