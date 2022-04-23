// Handles navigation between album and promo only.
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import {
    mapLyricSongIndex,
    mapLyricVerseIndex,
    mapLyricAnnotationIndex,
} from '../../../redux/lyric/selector'
import { mapIsPromoShown } from '../../../redux/toggle/selector'
import { navigateToAlbumPage, navigateToPromoPage } from '../../../helpers/navigate'
import { mapSelectedPitchSlideIndex, mapSelectedPromoKey } from '../../../redux/promo/selector'

const AlbumPromoManager = ({ didMount }) => {
    const
        lyricSongIndex = useSelector(mapLyricSongIndex),
        lyricVerseIndex = useSelector(mapLyricVerseIndex),
        lyricAnnotationIndex = useSelector(mapLyricAnnotationIndex),
        isPromoShown = useSelector(mapIsPromoShown),
        selectedPromoKey = useSelector(mapSelectedPromoKey),
        pitchSlideIndex = useSelector(mapSelectedPitchSlideIndex)

    useEffect(() => {
        logSelect({
            action: 'load',
            song: lyricSongIndex,
            verse: lyricVerseIndex,
            annotation: lyricAnnotationIndex,
        })
    }, [])

    useEffect(() => {
        if (didMount) {
            if (isPromoShown) {
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
    }, [isPromoShown])

    return null
}

AlbumPromoManager.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default getDidMountHoc(AlbumPromoManager)
