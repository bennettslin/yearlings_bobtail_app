import { forwardRef, useImperativeHandle, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateOptionStore } from '../../redux/option/action'
import { mapIsLyricLogue } from '../../redux/lyric/selector'
import { mapSelectedTipsOption } from '../../redux/option/selector'
import { mapIsTipsShownNext } from '../../redux/optionOrder/selector'
import { mapCanTipsShowForDevice } from '../../redux/tips/selector'
import { getNextOption } from '../../helpers/options'

const TipsDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        isLyricLogue = useSelector(mapIsLyricLogue),
        selectedTipsOption = useSelector(mapSelectedTipsOption),
        isTipsShownNext = useSelector(mapIsTipsShownNext),
        canTipsShowForDevice = useSelector(mapCanTipsShowForDevice)

    const dispatchTips = ({
        isFromToggle,
        tipsOption

    } = {}) => {
        /**
         * Don't allow toggling in logue, or if tip cannot show for this device
         * width.
         */
        if (isLyricLogue || !canTipsShowForDevice) {
            return false
        }

        dispatch(updateOptionStore({
            selectedTipsOption: getNextOption({
                isFromToggle,
                isShownNext: isTipsShownNext,
                prevOption: selectedTipsOption,
                nextOption: tipsOption
            })
        }))
        return true
    }

    useImperativeHandle(ref, () => dispatchTips)
    return null
})

export default memo(TipsDispatcher)
