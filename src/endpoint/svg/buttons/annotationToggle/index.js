import navShown from '../../../../assets/svgs/app/carouselNav/navShown'

const ANNOTATION_TOGGLE_MAP = {
    [false]: navShown,
    [true]: navShown,
}

export default ({ buttonOption }) => {
    return ANNOTATION_TOGGLE_MAP[buttonOption]
}
