import { getIsDesktopWidth } from '../../../../helpers/responsive'

export const getIsLyricExpandable = (deviceWidthIndex) => {
    return !getIsDesktopWidth(deviceWidthIndex)
}
