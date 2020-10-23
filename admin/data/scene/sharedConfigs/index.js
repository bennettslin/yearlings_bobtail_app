import { TOP } from '../../../../app/constants/transition'

const BUBBLE_CONFIG = {
    yIndex: 5,
    scaleFactor: 0.3,
    transitionKey: TOP
}

export const BUBBLE_SMALL_CONFIG = {
    ...BUBBLE_CONFIG,
    transitionIndex: 2
}
export const BUBBLE_MEDIUM_CONFIG = {
    ...BUBBLE_CONFIG,
    transitionIndex: 3
}
export const BUBBLE_LARGE_CONFIG = {
    ...BUBBLE_CONFIG,
    transitionIndex: 4
}

export const SKETCH_CONFIG = {
    yIndex: 5,
    noShadow: true,
    transitionKey: TOP
}
