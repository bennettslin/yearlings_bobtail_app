import keys from 'lodash/keys'

import { getMapForPresenceType } from 'svg/things'

export const getSvgMapForActorType = () => {
    return { blah: '' }
}

export const getSvgMapForThingType = (presenceType) => {
    const presenceMap = getMapForPresenceType(presenceType)

    if (!presenceMap) {
        return null
    }

    const
        duplicateKeys = {},
        svgMap = {}

    keys(presenceMap).forEach(rawPresenceKey => {
        const presenceKey = rawPresenceKey.split('__')[0]

        // Only add one presence per duplicate.
        if (!duplicateKeys[presenceKey]) {
            svgMap[rawPresenceKey] = presenceMap[rawPresenceKey]
            duplicateKeys[presenceKey] = true
        }
    })

    return svgMap
}
