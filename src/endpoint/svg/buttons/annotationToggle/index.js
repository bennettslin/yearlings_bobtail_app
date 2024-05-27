import navShown from '../../../../assets/svgs/app/carouselNav/navShown'
import neitherShown from '../../../../assets/svgs/app/carouselNav/neitherShown'

const ANNOTATION_TOGGLE_MAP = {
    [false]: navShown,
    [true]: neitherShown,
}

export default ({ buttonOption }) => {
    return ANNOTATION_TOGGLE_MAP[buttonOption]
}
