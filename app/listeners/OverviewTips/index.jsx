import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateOptionStore } from '../../redux/option/action'
import {
    mapSelectedOverviewOption,
    mapSelectedTipsOption
} from '../../redux/option/selector'
import {
    mapSelectedSongIndex,
    mapSelectedAnnotationIndex,
    mapIsSelectedLogue
} from '../../redux/selected/selector'
import {
    SHOWN,
    HIDDEN
} from '../../constants/options'

const OverviewListener = () => {
    const
        dispatch = useDispatch(),
        selectedOverviewOption = useSelector(mapSelectedOverviewOption),
        selectedTipsOption = useSelector(mapSelectedTipsOption),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        isSelectedLogue = useSelector(mapIsSelectedLogue)

    useEffect(() => {
        // Do not show if coming through a wormhole.
        if (!selectedAnnotationIndex) {
            if (isSelectedLogue) {
                dispatch(updateOptionStore({
                    // If shown, hide when now in logue.
                    ...selectedOverviewOption === SHOWN && {
                        selectedOverviewOption: HIDDEN
                    },
                    ...selectedTipsOption === SHOWN && {
                        selectedTipsOption: HIDDEN
                    }
                }))

            } else {
                dispatch(updateOptionStore({
                    // If just hidden, show when now in new song.
                    ...selectedOverviewOption === HIDDEN && {
                        selectedOverviewOption: SHOWN
                    },
                    ...selectedTipsOption === HIDDEN && {
                        selectedTipsOption: SHOWN
                    }
                }))
            }
        }
    }, [selectedSongIndex])

    return null
}

export default OverviewListener
