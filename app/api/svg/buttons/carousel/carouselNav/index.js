import carouselShown from '../../../../../../assets/svgs/app/carouselNav/carouselShown'
import navShown from '../../../../../../assets/svgs/app/carouselNav/navShown'
import neitherShown from '../../../../../../assets/svgs/app/carouselNav/neitherShown'

import {
    IS_CAROUSEL_EXPANDED,
    IS_NAV_EXPANDED,
    IS_CAROUSEL_NAV_COLLAPSED
} from '../../../../../constants/options'

const CAROUSEL_NAV_MAP = {
    [IS_CAROUSEL_EXPANDED]: carouselShown,
    [IS_NAV_EXPANDED]: navShown,
    [IS_CAROUSEL_NAV_COLLAPSED]: neitherShown
}

export default ({ buttonIdentifier }) => {
    return CAROUSEL_NAV_MAP[buttonIdentifier]
}
