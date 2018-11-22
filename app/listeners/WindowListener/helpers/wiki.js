import {
    getIsPhone,
    getIsMini
} from '../../../helpers/responsiveHelper'

import { WIKI_SIDE_PADDING_TOTAL } from '../../../constants/responsive'

const getIsMobileWiki = ({
    deviceIndex, windowWidth
}) => {

    // If phone or mini, show mobile wiki.
    if (getIsPhone(deviceIndex) || getIsMini(deviceIndex)) {
        return true

    } else {
        // Wikipedia in mobile seems to max out at 892px.
        const isMobileWiki = windowWidth - WIKI_SIDE_PADDING_TOTAL < 892

        return isMobileWiki
    }
}

export {
    getIsMobileWiki
}
