import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateOptionStore } from '../../../redux/option/action'
import {
    getIsShown,
    getNextOption
} from '../../../helpers/options'
import { mapSelectedOverviewOption } from '../../../redux/option/selector'
import { mapToggleShowsOverviewImmediately } from '../../../redux/optionOrder/selector'
import { mapIsSelectedLogue } from '../../../redux/selected/selector'
import { mapIsTipsShown } from '../../../redux/tips/selector'

const OverviewDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        toggleShowsOverviewImmediately = useSelector(mapToggleShowsOverviewImmediately),
        selectedOverviewOption = useSelector(mapSelectedOverviewOption),
        isTipsShown = useSelector(mapIsTipsShown),
        isSelectedLogue = useSelector(mapIsSelectedLogue)

    const dispatchOverview = ({
        isToggled,
        overviewOption

    } = {}) => {
        if (isSelectedLogue) {
            return false
        }

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

    useImperativeHandle(ref, () => dispatchOverview)
    return null
})

export default OverviewDispatcher
