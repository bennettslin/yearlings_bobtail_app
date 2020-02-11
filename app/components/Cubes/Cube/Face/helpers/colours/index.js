import { getBaseColour } from './base'
import { getReducedLuminosity } from './luminosity'

import { k } from 'scene/cubes/zIndices'

export const getSvgFillForFace = ({
    hslaKey,
    level,
    yIndex,
    xIndex,
    zIndex,
    face
}) => {
    // eslint-disable-next-line object-curly-newline
    const { h, s, l, a } = getBaseColour(hslaKey),

        // Don't show colour if empty ceiling.
        alpha = zIndex === k ? 0 : a,

        luminosity = getReducedLuminosity({
            face,
            l,
            level,
            xIndex,
            yIndex,
            zIndex
        })

    return `hsla(${h}, ${s}%, ${luminosity}%, ${alpha})`
}
