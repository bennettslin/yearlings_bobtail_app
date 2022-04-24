import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { navigateToAlbumPage, navigateToPromoPage } from '../../../helpers/navigate'
import { mapLyricAnnotationIndex, mapLyricSongIndex, mapLyricVerseIndex } from '../../../redux/lyric/selector'
import { mapSelectedPitchSlideIndex, mapSelectedPromoKey } from '../../../redux/promo/selector'
import { adminToggleIsPromoShown, updateIsPromoShown } from '../../../redux/toggle/action'
import { mapIsPromoShown } from '../../../redux/toggle/selector'

const AlbumPromoDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        lyricSongIndex = useSelector(mapLyricSongIndex),
        lyricVerseIndex = useSelector(mapLyricVerseIndex),
        lyricAnnotationIndex = useSelector(mapLyricAnnotationIndex),
        isPromoShown = useSelector(mapIsPromoShown),
        selectedPromoKey = useSelector(mapSelectedPromoKey),
        pitchSlideIndex = useSelector(mapSelectedPitchSlideIndex)

    const dispatchPromo = ({
        isPromoShown: nextIsPromoShown,
        bypassNavigation,
        isAdminToggle,

    } = {}) => {
        dispatch(
            isAdminToggle ?
                adminToggleIsPromoShown() :
                updateIsPromoShown(nextIsPromoShown),
        )

        if (!bypassNavigation) {
            if (isAdminToggle ? !isPromoShown : nextIsPromoShown) {
                /**
                 * This navigates from album to promo only. Navigation between
                 * promo pages happens in promo reducer.
                 */
                navigateToPromoPage(
                    selectedPromoKey,
                    pitchSlideIndex,
                )

            } else {
                /**
                 * This navigates from promo to album only. Navigation between
                 * album pages happens in lyric reducer.
                 */
                navigateToAlbumPage(
                    lyricSongIndex,
                    lyricVerseIndex,
                    lyricAnnotationIndex,
                )
            }
        }

    }

    useImperativeHandle(ref, () => dispatchPromo)
    return null
})

export default AlbumPromoDispatcher
