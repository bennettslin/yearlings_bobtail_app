import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    updateAccessStore,
    resetAccessedNav
} from '../../../redux/access/action'
import { updateShownNavBookIndex } from '../../../redux/session/action'
import { getBookForSongIndex } from '../../../api/album/songs'
import { mapSelectedSongIndex } from '../../../redux/selected/selectors'
import { mapIsNavShown } from '../../../redux/toggle/selectors'

const NavListener = () => {
    const
        dispatch = useDispatch(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        isNavShown = useSelector(mapIsNavShown)

    useEffect(() => {
        if (isNavShown) {
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

    }, [isNavShown])

    return null
}

export default NavListener
