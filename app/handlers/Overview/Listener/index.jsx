import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateOptionStore } from '../../../redux/option/action'
import {
    SHOWN,
    HIDDEN
} from '../../../constants/options'
import { mapSelectedOverviewOption } from '../../../redux/option/selector'
import {
    mapSelectedSongIndex,
    mapSelectedAnnotationIndex,
    mapIsSelectedLogue
} from '../../../redux/selected/selector'

const OverviewListener = () => {
    const
        dispatch = useDispatch(),
        selectedOverviewOption = useSelector(mapSelectedOverviewOption),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        isSelectedLogue = useSelector(mapIsSelectedLogue)

    useEffect(() => {
        // There cannot be a selected annotation.
        if (!selectedAnnotationIndex) {
            if (isSelectedLogue) {
                dispatch(updateOptionStore({
                    // If shown, hide song overview when now in logue.
                    ...selectedOverviewOption === SHOWN && {
                        selectedOverviewOption: HIDDEN
                    }
                }))

            } else {
                dispatch(updateOptionStore({
                    // If just hidden, show song overview when now in new song.
                    ...selectedOverviewOption === HIDDEN && {
                        selectedOverviewOption: SHOWN,
                        isSongShownOverview: true
                    }
                }))
            }
        }
    }, [selectedSongIndex])

    return null
}

export default OverviewListener
