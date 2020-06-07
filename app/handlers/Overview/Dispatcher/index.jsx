import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateOptionStore } from '../../../redux/option/action'
import {
    getIsShown,
    getNextOption
} from '../../../helpers/options'
import {
    mapIsLogueOverviewShown,
    mapSelectedOverviewOption,
    mapIsTipsShown
} from '../../../redux/option/selectors'
import { mapIsHeightlessLyric } from '../../../redux/responsive/selectors'
import { mapToggleShowsOverviewImmediately } from '../../../redux/transient/selectors'
import { mapIsSelectedLogue } from '../../../redux/selected/selectors'

const OverviewDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        isHeightlessLyric = useSelector(mapIsHeightlessLyric),
        toggleShowsOverviewImmediately = useSelector(mapToggleShowsOverviewImmediately),
        isLogueOverviewShown = useSelector(mapIsLogueOverviewShown),
        selectedOverviewOption = useSelector(mapSelectedOverviewOption),
        isTipsShown = useSelector(mapIsTipsShown),
        isSelectedLogue = useSelector(mapIsSelectedLogue)

    const _dispatchLogueOverview = () => {
        // Don't allow overview to be toggled if not heightless.
        if (!isHeightlessLyric) {
            return false
        }
        dispatch(updateOptionStore({
            isLogueOverviewShown: !isLogueOverviewShown
        }))
        return true
    }

    const _dispatchSongOverview = ({
        isToggled,
        overviewOption
    }) => {
        const nextOverviewOption = getNextOption({
                isToggled,
                toggleShows: toggleShowsOverviewImmediately,
                prevOption: selectedOverviewOption,
                nextOption: overviewOption
            }),

            /**
                 * If both overview and tips are shown, user may try to show the
                 * overview by pressing key. This is the only way to handle it.
                 */
            bothOverviewAndTipsShown =
                    getIsShown(nextOverviewOption) &&
                    getIsShown(selectedOverviewOption) &&
                    isTipsShown

        dispatch(updateOptionStore({
            selectedOverviewOption: nextOverviewOption,
            ...bothOverviewAndTipsShown && {
                isForcedShownOverview: true
            }
        }))
        return true
    }

    const dispatchOverview = ({
        isToggled,
        overviewOption
    } = {}) => (
        isSelectedLogue ?
            _dispatchLogueOverview() :
            _dispatchSongOverview({
                isToggled,
                overviewOption
            })
    )

    useImperativeHandle(ref, () => dispatchOverview)
    return null
})

export default OverviewDispatcher
