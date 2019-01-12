import {
    getIsPhoneWidth,
    getIsMiniWidth
} from '../../../../helpers/responsive'

import { WIKI_SIDE_PADDING_TOTAL } from '../../../../constants/responsive'

export const getIsMobileWiki = ({
    deviceWidthIndex, windowWidth
}) => {

    // If phone or mini, show mobile wiki.
    if (getIsPhoneWidth(deviceWidthIndex) || getIsMiniWidth(deviceWidthIndex)) {
        return true

    } else {
        // Wikipedia in mobile seems to max out at 892px.
        const isMobileWiki = windowWidth - WIKI_SIDE_PADDING_TOTAL < 892

        return isMobileWiki
    }
}
