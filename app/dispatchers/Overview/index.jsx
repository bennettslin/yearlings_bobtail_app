import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateOptionStore } from '../../redux/option/action'
import { getNextOption } from '../../helpers/options'
import { mapSelectedOverviewOption } from '../../redux/option/selector'
import { mapIsOverviewShownNext } from '../../redux/optionOrder/selector'
import { mapIsSelectedLogue } from '../../redux/selected/selector'
import { mapIsTipsShown } from '../../redux/tips/selector'
import { HIDDEN } from '../../constants/options'

const OverviewDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        isOverviewShownNext = useSelector(mapIsOverviewShownNext),
        selectedOverviewOption = useSelector(mapSelectedOverviewOption),
        isTipsShown = useSelector(mapIsTipsShown),
        isSelectedLogue = useSelector(mapIsSelectedLogue)

    const dispatchOverview = ({
        isFromToggle,
        overviewOption,

    } = {}) => {
        if (isSelectedLogue) {
            return false
        }

        dispatch(updateOptionStore({
            selectedOverviewOption: getNextOption({
                isFromToggle,
                isShownNext: isOverviewShownNext,
                prevOption: selectedOverviewOption,
                nextOption: overviewOption,
            }),
            /**
             * If tips is shown, it overrides overview. So manually hide tips
             * to allow overview to be shown.
             */
            ...isTipsShown && {
                selectedTipsOption: HIDDEN,
            },
        }))
        return true
    }

    useImperativeHandle(ref, () => dispatchOverview)
    return null
})

export default OverviewDispatcher
