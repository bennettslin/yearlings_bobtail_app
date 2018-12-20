import HSLA_MAP from 'scene/hsla'

import {
    HSLA_KEYS
} from 'scene/hsla/keys'

const CUBE_COLOURS = {}

HSLA_KEYS.forEach(hslaKey => {
    const {
        h,
        s,
        l
    } = HSLA_MAP[hslaKey]

    CUBE_COLOURS[hslaKey] = `hsla(${h}, ${s}%, ${l}%, 0.8)`
})

const getCubeColour = (hslaKey) => {
    return CUBE_COLOURS[hslaKey]
}

export { getCubeColour }
