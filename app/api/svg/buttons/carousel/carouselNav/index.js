import popupClose from '../../../../../../assets/svgs/app/direction/popupClose'
import carouselShown from '../../../../../../assets/svgs/app/carouselNav/carouselShown'
import navShown from '../../../../../../assets/svgs/app/carouselNav/navShown'
import neitherShown from '../../../../../../assets/svgs/app/carouselNav/neitherShown'

import {
    CLOSE_NAV_NEXT,
    SHOW_NAV_NEXT,
    SHOW_CAROUSEL_FROM_NAV,
    SHOW_CAROUSEL_NAV_NEXT,
} from '../../../../../constants/options'

const CAROUSEL_NAV_MAP = {
    [CLOSE_NAV_NEXT]: popupClose,
    [SHOW_NAV_NEXT]: carouselShown,
    [SHOW_CAROUSEL_FROM_NAV]: navShown,
    [SHOW_CAROUSEL_NAV_NEXT]: neitherShown,
}

export default ({ buttonIdentifier }) => {
    return CAROUSEL_NAV_MAP[buttonIdentifier]
}
