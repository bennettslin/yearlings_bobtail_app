import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateOptionStore } from '../../../redux/option/action'
import {
    getIsShown,
    getNextOption
} from '../../../helpers/options'
import {
    IS_LOGUE_OVERVIEW_SHOWN_SELECTOR,
    SELECTED_OVERVIEW_OPTION_SELECTOR,
    SELECTED_TIPS_OPTION_SELECTOR
} from '../../../redux/option/selectors'
import { IS_HEIGHTLESS_LYRIC_SELECTOR } from '../../../redux/responsive/selectors'
import { TOGGLE_SHOWS_OVERVIEW_IMMEDIATELY_SELECTOR } from '../../../redux/transient/selectors'
import { IS_SELECTED_LOGUE_SELECTOR } from '../../../redux/selected/selectors'

const OverviewDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        isHeightlessLyric = useSelector(IS_HEIGHTLESS_LYRIC_SELECTOR),
        toggleShowsOverviewImmediately = useSelector(TOGGLE_SHOWS_OVERVIEW_IMMEDIATELY_SELECTOR),
        isLogueOverviewShown = useSelector(IS_LOGUE_OVERVIEW_SHOWN_SELECTOR),
        selectedOverviewOption = useSelector(SELECTED_OVERVIEW_OPTION_SELECTOR),
        selectedTipsOption = useSelector(SELECTED_TIPS_OPTION_SELECTOR),
        isSelectedLogue = useSelector(IS_SELECTED_LOGUE_SELECTOR),
        _dispatchLogueOverview = () => {
            // Don't allow overview to be toggled if not heightless.
            if (!isHeightlessLyric) {
                return false
            }
            dispatch(updateOptionStore({
                isLogueOverviewShown: !isLogueOverviewShown
            }))
            return true
        },
        _dispatchSongOverview = ({
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
                    getIsShown(selectedTipsOption)

            dispatch(updateOptionStore({
                selectedOverviewOption: nextOverviewOption,
                ...bothOverviewAndTipsShown && {
                    isForcedShownOverview: true
                }
            }))
            return true
        },
        dispatchOverview = ({
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
