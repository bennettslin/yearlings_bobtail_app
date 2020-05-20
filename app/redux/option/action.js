// Actions for options state.
import {
    hasKey,
    getDefinedOnlyPayload
} from '../../helpers/action'
import { setInStorage } from '../../utils/window'
import {
    SHOWN,
    HIDDEN
} from '../../constants/options'
import {
    OPTION_STORE,
    SELECTED_OVERVIEW_OPTION,
    SELECTED_TIPS_OPTION
} from '../../constants/store'

export const _setOptionInStorage = (key, value) => {
    /**
     * Always start page with all the options hidden, because mounting calls
     * the same methods as if the song changed.
     */
    setInStorage(key, value === SHOWN ? HIDDEN : value)
}

export const updateOptionStore = (payload) => {
    const {
        selectedOverviewOption,
        selectedTipsOption
    } = payload

    if (hasKey(selectedOverviewOption)) {
        _setOptionInStorage(SELECTED_OVERVIEW_OPTION, selectedOverviewOption)
    }
    if (hasKey(selectedTipsOption)) {
        _setOptionInStorage(SELECTED_TIPS_OPTION, selectedTipsOption)
    }

    return {
        type: OPTION_STORE,
        payload: getDefinedOnlyPayload(payload)
    }
}
