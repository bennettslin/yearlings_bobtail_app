import { SHOWN, OVERVIEW_BUBBLE } from '../../../constants/options'

export const getOverviewToggleIdentifier = ({
    isLyricLogue,
    selectedOverviewOption,
    isToggleInOverview

}) => {
    if (isLyricLogue) {
        return isToggleInOverview ?
            SHOWN :
            OVERVIEW_BUBBLE

    } else {
        return selectedOverviewOption
    }
}
