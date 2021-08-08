import { SHOWN } from '../../../constants/options'

export const getOverviewToggleIdentifier = ({
    isLyricLogue,
    selectedOverviewOption,

}) => (
    isLyricLogue ? SHOWN : selectedOverviewOption
)
