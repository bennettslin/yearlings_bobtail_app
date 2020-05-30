import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateOptionStore } from '../../../redux/option/action'
import { IS_LYRIC_LOGUE_SELECTOR } from '../../../redux/lyric/selectors'
import {
    IS_TIPS_SHOWABLE_SELECTOR,
    TOGGLE_SHOWS_TIPS_IMMEDIATELY_SELECTOR
} from '../../../redux/transient/selectors'
import { getNextOption } from '../../../helpers/options'
import { SELECTED_TIPS_OPTION_SELECTOR } from '../../../redux/option/selectors'

const TipsDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        isLyricLogue = useSelector(IS_LYRIC_LOGUE_SELECTOR),
        isTipsShowable = useSelector(IS_TIPS_SHOWABLE_SELECTOR),
        toggleShowsTipsImmediately = useSelector(TOGGLE_SHOWS_TIPS_IMMEDIATELY_SELECTOR),
        selectedTipsOption = useSelector(SELECTED_TIPS_OPTION_SELECTOR),
        dispatchTips = ({
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
