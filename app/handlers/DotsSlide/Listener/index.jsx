import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    updateAccessStore,
    resetAccessedDot
} from '../../../redux/access/action'
import { resetActivatedDots } from '../../../redux/dotsSlide/action'
import { mapIsDotsSlideShown } from '../../../redux/toggle/selector'

const DotsSlideListener = () => {
    const
        dispatch = useDispatch(),
        isDotsSlideShown = useSelector(mapIsDotsSlideShown)

    useEffect(() => {
        if (isDotsSlideShown) {
            dispatch(updateAccessStore({ accessedDotIndex: 0 }))
        } else {
            dispatch(resetActivatedDots())
            dispatch(resetAccessedDot())
        }
    }, [isDotsSlideShown])

    return null
}

export default DotsSlideListener
