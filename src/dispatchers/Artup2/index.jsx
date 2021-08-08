import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArtup2SlidesCount } from '../../endpoint/promo/artup2'
import { setArtup2SlideIndex } from '../../redux/promo/action'
import { mapArtup2SlideIndex } from '../../redux/promo/selector'

const Artup2Dispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        artup2SlideIndex = useSelector(mapArtup2SlideIndex)

    const dispatchArtup2 = ({
        artup2SlideIndex: nextArtupSlideIndex,
        direction,

    }) => {
        if (Number.isFinite(nextArtupSlideIndex)) {
            dispatch(setArtup2SlideIndex(nextArtupSlideIndex))
            return true

        } else if (direction === -1) {
            if (artup2SlideIndex > 1) {
                dispatch(setArtup2SlideIndex(artup2SlideIndex - 1))
                return true
            }

        } else if (direction === 1) {
            if (artup2SlideIndex < getArtup2SlidesCount()) {
                dispatch(setArtup2SlideIndex(artup2SlideIndex + 1))
                return true
            }
        }

        return false
    }

    useImperativeHandle(ref, () => dispatchArtup2)
    return null
})

export default Artup2Dispatcher
