import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSlidesCount } from '../../endpoint/promo/pitches'
import { setArtupSlideIndex } from '../../redux/promo/action'
import { mapArtupSlideIndex } from '../../redux/promo/selector'
import { ARTUP_SUBPATH } from '../../constants/routing'

const ArtupDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        artupSlideIndex = useSelector(mapArtupSlideIndex)

    const dispatchArtup = ({
        artupSlideIndex: nextArtupSlideIndex,
        direction,

    }) => {
        if (Number.isFinite(nextArtupSlideIndex)) {
            dispatch(setArtupSlideIndex(nextArtupSlideIndex))
            return true

        } else if (direction === -1) {
            if (artupSlideIndex > 1) {
                dispatch(setArtupSlideIndex(artupSlideIndex - 1))
                return true
            }

        } else if (direction === 1) {
            if (artupSlideIndex < getSlidesCount(ARTUP_SUBPATH)) {
                dispatch(setArtupSlideIndex(artupSlideIndex + 1))
                return true
            }
        }

        return false
    }

    useImperativeHandle(ref, () => dispatchArtup)
    return null
})

export default ArtupDispatcher
