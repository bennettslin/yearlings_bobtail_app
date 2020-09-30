import { useEffect, useRef, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    updateAccessStore,
    resetAccessedNav
} from '../../../redux/access/action'
import { updateShownNavBookIndex } from '../../../redux/session/action'
import { getBookForSongIndex } from '../../../api/album/songs'
import { mapSelectedSongIndex } from '../../../redux/selected/selector'
import { mapIsNavExpanded } from '../../../redux/toggle/selector'

const NavListener = () => {
    const
        dispatch = useDispatch(),
        didMount = useRef(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        isNavExpanded = useSelector(mapIsNavExpanded)

    useEffect(() => {
        if (didMount.current) {
            if (isNavExpanded) {
                /**
                 * Establish the nav index upon showing the nav. This will continue
                 * to be the nav index for as long as the nav stays up, even if
                 * access is turned on and off in between.
                 */
                dispatch(updateAccessStore({
                    accessedNavIndex: selectedSongIndex
                }))
                dispatch(updateShownNavBookIndex(
                    getBookForSongIndex(selectedSongIndex)
                ))

            } else {
                dispatch(resetAccessedNav())
            }
        } else {
            didMount.current = true
        }
    }, [isNavExpanded])

    return null
}

export default memo(NavListener)
