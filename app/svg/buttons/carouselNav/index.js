import carouselSelect from 'assets/svgs/app/carouselSelect'
import carouselSelectNav from 'assets/svgs/app/carouselSelectNav'
import tipsDisabled from 'assets/svgs/app/tipsDisabled'

import {
    IS_CAROUSEL_SHOWN,
    IS_NAV_SHOWN,
    IS_NEITHER_SHOWN
} from 'constants/options'

const CAROUSEL_NAV_MAP = {
    [IS_CAROUSEL_SHOWN]: carouselSelect,
    [IS_NAV_SHOWN]: carouselSelectNav,
    [IS_NEITHER_SHOWN]: tipsDisabled
}

const getIcon = ({ buttonIdentifier }) => {
    return CAROUSEL_NAV_MAP[buttonIdentifier]
}

export default getIcon
