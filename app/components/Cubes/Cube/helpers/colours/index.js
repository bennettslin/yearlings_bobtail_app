import keys from 'lodash.keys'
import HSLA_MAP from 'scene/hsla'
import * as HSLA_KEYS from 'scene/scenes/hslaKeys'

const CUBE_COLOURS = {}

keys(HSLA_KEYS).forEach(hslaKeyName => {
    const
        hslaKey = HSLA_KEYS[hslaKeyName],
        {
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
