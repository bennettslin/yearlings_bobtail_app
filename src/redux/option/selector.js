import { OPTION_STORE } from '../../constants/store'

export const mapSelectedOverviewOption = (
    { [OPTION_STORE]: { selectedOverviewOption } },
) => selectedOverviewOption

export const mapSelectedTipsOption = (
    { [OPTION_STORE]: { selectedTipsOption } },
) => selectedTipsOption
