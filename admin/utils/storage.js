import keys from 'lodash/keys'

import {
    getFromStorage,
    setInStorage
} from 'utils/window'

import WHOLE_ACTORS_LIST from '../constants/actors'
import THINGS_LIST from '../constants/things'
import {
    getPreviewerSvgMapForActor,
    getPreviewerSvgMapForThing
} from './svg'

const getPresencePrefix = (isActor) => {
    return isActor ? 'actor' : 'thing'
}

export const getPresenceFromStorage = (isActor) => {
    const
        prefix = getPresencePrefix(isActor),
        presenceType = getFromStorage(`${prefix}Type`),
        presenceKey = getFromStorage(`${prefix}Key`)

    return { presenceType, presenceKey }
}

export const getPresenceFromQueryStrings = (isActor) => {
    // If presence from query strings is valid, set in store.
    const
        urlParams = new URLSearchParams(window.location.search),
        presenceType = urlParams.get('type') || '',
        presenceKey = urlParams.get('key') || '',
        typesList = isActor ? WHOLE_ACTORS_LIST : THINGS_LIST,
        mapGetter = isActor ? getPreviewerSvgMapForActor : getPreviewerSvgMapForThing,

        svgMapForPresenceType = mapGetter(presenceType)

    // Make sure this map exists.
    if (svgMapForPresenceType) {
        const svgForPresenceKey = svgMapForPresenceType[presenceKey]

        // Make sure this svg exists.
        if (svgForPresenceKey) {
            return { presenceType, presenceKey }
        }
    }

    return {
        presenceType: typesList[0],
        presenceKey: keys(
            mapGetter(typesList[0])
        )[0]
    }
}

export const setPresenceInStorage = ({
    isActor,
    presenceType,
    presenceKey
}) => {
    const prefix = getPresencePrefix(isActor)

    if (presenceType) {
        setInStorage(`${prefix}Type`, presenceType)
    }
    if (presenceKey) {
        setInStorage(`${prefix}Key`, presenceKey)
    }
}

export const setPresenceInQueryStrings = ({ presenceType, presenceKey }) => {
    const urlParams = new URLSearchParams(window.location.search)

    urlParams.set('type', presenceType)
    urlParams.set('key', presenceKey)

    window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`)
}
