// Actions for options state.
import { setOptionInStorage } from '../../helpers/storage'
import {
    hasKey,
    getDefinedOnlyPayload
} from '../../helpers/action'
import {
    OPTION_STORE,
    SELECTED_OVERVIEW_OPTION,
    SELECTED_TIPS_OPTION
} from '../../constants/store'

export const updateOptionStore = (payload) => {

    const {
        selectedOverviewOption,
        selectedTipsOption
    } = payload

    if (hasKey(selectedOverviewOption)) {
        setOptionInStorage(SELECTED_OVERVIEW_OPTION, selectedOverviewOption)
    }
    if (hasKey(selectedTipsOption)) {
        setOptionInStorage(SELECTED_TIPS_OPTION, selectedTipsOption)
    }

    return {
        type: OPTION_STORE,
        payload: getDefinedOnlyPayload(payload)
    }
}
