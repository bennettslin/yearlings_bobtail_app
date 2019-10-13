import arrow from 'assets/svgs/app/arrow'

import {
    LEFT,
    RIGHT
} from 'constants/lyrics'

const CAROUSEL_SELECT_MAP = {
    [LEFT]: arrow,
    [RIGHT]: arrow
}

const getIcon = ({ buttonIdentifier: direction }) => {
    return CAROUSEL_SELECT_MAP[direction]
}

export default getIcon
