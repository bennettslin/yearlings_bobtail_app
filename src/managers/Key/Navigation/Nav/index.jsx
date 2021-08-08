import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAccessStore } from '../../../../redux/access/action'
import NavDispatcher from '../../../../handlers/Nav/Dispatcher'
import SongDispatcher from '../../../../dispatchers/Song'
import {
    getSongsAndLoguesCount,
    getBookForSongIndex,
} from '../../../../endpoint/album/songs'
import {
    ARROW_LEFT,
    ARROW_RIGHT,
    ENTER,
} from '../../../../constants/access'
import { mapAccessedNavIndex } from '../../../../redux/access/selector'
import { mapSelectedSongIndex } from '../../../../redux/selected/selector'
import { mapShownNavBookIndex } from '../../../../redux/session/selector'

const NavNavigation = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        dispatchNavBook = useRef(),
        dispatchSong = useRef(),
        accessedNavIndex = useSelector(mapAccessedNavIndex),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        shownNavBookIndex = useSelector(mapShownNavBookIndex)

    const navigateNav = keyName => {
        let annotationIndexWasAccessed = false,
            keyWasRegistered = true

        let nextNavIndex = accessedNavIndex,
            direction

        // Skip appropriate songs if showing single book column.
        switch (keyName) {
            case ARROW_LEFT:
                direction = -1
                break
            case ARROW_RIGHT:
                direction = 1
                break
            case ENTER:
                // Do not allow currently selected song to be selected.
                if (selectedSongIndex !== nextNavIndex) {
                    keyWasRegistered = dispatchSong.current({
                        selectedSongIndex: nextNavIndex,
                    })
                    /**
                     * If song was successfully selected, then annotation index
                     * was also accessed.
                     */
                    annotationIndexWasAccessed = keyWasRegistered
                }

                break
            default:
                keyWasRegistered = false
        }

        if (direction) {
            const songsCount = getSongsAndLoguesCount()

            nextNavIndex = (
                nextNavIndex + songsCount + direction
            ) % songsCount

            // Select the book column that contains the accessed song index.
            if (
                shownNavBookIndex !== getBookForSongIndex(nextNavIndex)
            ) {
                dispatchNavBook.current()
            }

            dispatch(updateAccessStore({ accessedNavIndex: nextNavIndex }))
        }

        return {
            annotationIndexWasAccessed,
            keyWasRegistered,
        }
    }

    useImperativeHandle(ref, () => navigateNav)
    return (
        <>
            <NavDispatcher {...{ ref: dispatchNavBook }} />
            <SongDispatcher {...{ ref: dispatchSong }} />
        </>
    )
})

export default NavNavigation
