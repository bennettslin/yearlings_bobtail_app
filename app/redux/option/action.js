// Actions for options state.
import { setOptionInStorage } from '../storageHelper'

import {
    hasKey,
    getDefinedOnlyPayload
} from '../actionHelper'

import {
    OPTION_STORE,
    SELECTED_OVERVIEW_OPTION,
    SELECTED_TIPS_OPTION
} from '../storeKeys'
import { OPTION_DEFAULTS } from '../defaultStates'

export const updateOptionStore = (payload = OPTION_DEFAULTS) => {

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
