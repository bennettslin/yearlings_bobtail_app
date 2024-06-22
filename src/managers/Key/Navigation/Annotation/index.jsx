import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useSelector } from 'react-redux'
import { isString } from '../../../../helpers/general'
import AnnotationDispatcher from '../../../../handlers/Annotation/Dispatcher'
import SongDispatcher from '../../../../dispatchers/Song'
import WikiDispatcher from '../../../../dispatchers/Wiki'
import WikiWormholeDispatcher from '../../../../handlers/WikiWormhole/Dispatcher'
import { getWikiWormholeEntity } from '../../../../endpoint/album/annotations'
import { getWormholeLinkForWikiWormhole } from '../../../../endpoint/album/wormholes'
import {
    ARROW_LEFT,
    ARROW_RIGHT,
    ARROW_UP,
    ARROW_DOWN,
    ENTER,
} from '../../../../constants/access'
import {
    mapIsAccessOn,
    mapAccessedWikiWormholeIndex,
} from '../../../../redux/access/selector'
import {
    mapSelectedSongIndex,
    mapSelectedAnnotationIndex,
} from '../../../../redux/selected/selector'

const AnnotationNavigation = forwardRef((props, ref) => {
    const
        dispatchWikiWormhole = useRef(),
        dispatchAnnotation = useRef(),
        dispatchSong = useRef(),
        dispatchWiki = useRef(),
        isAccessOn = useSelector(mapIsAccessOn),
        accessedWikiWormholeIndex = useSelector(mapAccessedWikiWormholeIndex),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex)

    const navigateAnnotation = keyName => {
        let nextWikiWormholeIndex = accessedWikiWormholeIndex,
            annotationIndexWasAccessed = false,
            keyWasRegistered = true

        switch (keyName) {
            case ARROW_LEFT:
                annotationIndexWasAccessed = true
                dispatchAnnotation.current.direction(-1)
                break
            case ARROW_RIGHT:
                annotationIndexWasAccessed = true
                dispatchAnnotation.current.direction(1)
                break
            case ARROW_UP:
            case ARROW_DOWN: {
                // If not accessed on, do nothing and just turn access on.
                if (isAccessOn) {
                    const direction = keyName === ARROW_UP ? -1 : 1
                    dispatchWikiWormhole.current({ direction })
                }
                break
            }
            case ENTER: {
                const wikiWormholeEntity = getWikiWormholeEntity(
                    selectedSongIndex,
                    selectedAnnotationIndex,
                    nextWikiWormholeIndex,
                )

                if (nextWikiWormholeIndex && wikiWormholeEntity) {

                    // It's a wiki anchor.
                    if (isString(wikiWormholeEntity)) {
                        dispatchWiki.current(
                            nextWikiWormholeIndex,
                            selectedAnnotationIndex,
                        )

                    // It's a wormhole index.
                    } else {
                        keyWasRegistered =
                            dispatchSong.current(getWormholeLinkForWikiWormhole(
                                selectedSongIndex,
                                selectedAnnotationIndex,
                                wikiWormholeEntity,
                            ))

                        /**
                         * If song was selected, then annotation index was
                         * accessed.
                         */
                        annotationIndexWasAccessed = keyWasRegistered
                    }

                } else {
                    keyWasRegistered = false
                }
                break
            }
            default:
                keyWasRegistered = false
                break
        }

        return {
            annotationIndexWasAccessed,
            keyWasRegistered,
        }
    }

    useImperativeHandle(ref, () => navigateAnnotation)
    return (
        <>
            <AnnotationDispatcher {...{ ref: dispatchAnnotation }} />
            <SongDispatcher {...{ ref: dispatchSong }} />
            <WikiDispatcher {...{ ref: dispatchWiki }} />
            <WikiWormholeDispatcher {...{ ref: dispatchWikiWormhole }} />
        </>
    )
})

export default AnnotationNavigation
