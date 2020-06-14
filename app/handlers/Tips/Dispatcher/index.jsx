import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateOptionStore } from '../../../redux/option/action'
import { mapIsLyricLogue } from '../../../redux/lyric/selector'
import { mapIsTipsShowable } from '../../../redux/tips/selector'
import { mapToggleShowsTipsImmediately } from '../../../redux/optionOrder/selector'
import { getNextOption } from '../../../helpers/options'
import { mapSelectedTipsOption } from '../../../redux/option/selector'

const TipsDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        isLyricLogue = useSelector(mapIsLyricLogue),
        isTipsShowable = useSelector(mapIsTipsShowable),
        toggleShowsTipsImmediately = useSelector(mapToggleShowsTipsImmediately),
        selectedTipsOption = useSelector(mapSelectedTipsOption)

    const dispatchTips = ({
        isToggled,
        tipsOption
    } = {}) => {
        // Don't allow toggling in logue, or if no tip for this device width.
        if (isLyricLogue || !isTipsShowable) {
            return false
        }

        const newTipsOption = getNextOption({
            isToggled,
            toggleShows: toggleShowsTipsImmediately,
            prevOption: selectedTipsOption,
            nextOption: tipsOption
        })

        dispatch(updateOptionStore({ selectedTipsOption: newTipsOption }))
        return true
    }

    useImperativeHandle(ref, () => dispatchTips)
    return null
})

export default TipsDispatcher
