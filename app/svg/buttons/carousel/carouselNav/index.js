import carouselShown from '../../../../../assets/svgs/app/carouselNav/carouselShown'
import navShown from '../../../../../assets/svgs/app/carouselNav/navShown'
import neitherShown from '../../../../../assets/svgs/app/carouselNav/neitherShown'

import {
    IS_CAROUSEL_SHOWN,
    IS_NAV_SHOWN,
    IS_NEITHER_SHOWN
} from '../../../../constants/options'

const CAROUSEL_NAV_MAP = {
    [IS_CAROUSEL_SHOWN]: carouselShown,
    [IS_NAV_SHOWN]: navShown,
    [IS_NEITHER_SHOWN]: neitherShown
}

export default ({ buttonIdentifier }) => {
    return CAROUSEL_NAV_MAP[buttonIdentifier]
}
