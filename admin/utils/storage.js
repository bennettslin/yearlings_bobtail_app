import {
    getWindowStorage,
    setInStorage
} from '../../app/utils/window'

import WHOLE_ACTORS_LIST from '../constants/actors'
import THINGS_LIST from '../constants/things'
import {
    getPreviewerSvgMapForActor,
    getPreviewerSvgMapForThing
} from './svg'

import { convertPresenceKeyToClassName } from '../../app/helpers/format'

const getPresencePrefix = (isActor) => {
    return isActor ? 'actor' : 'thing'
}

const getFromStorage = (key) => {
    return getWindowStorage()[key]
}

const getPresenceOrDefaultPresence = ({
    isActor,
    presenceType,
    presenceKey
}) => {
    const
        typesList = isActor ? WHOLE_ACTORS_LIST : THINGS_LIST,
        mapGetter = isActor ?
            getPreviewerSvgMapForActor :
            getPreviewerSvgMapForThing,
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
        presenceKey: Object.keys(
            mapGetter(typesList[0])
        )[0]
    }
}

export const getPresenceFromStorage = (isActor) => {
    const
        prefix = getPresencePrefix(isActor),
        presenceType = getFromStorage(`${prefix}Type`),
        presenceKey = getFromStorage(`${prefix}Key`)

    return getPresenceOrDefaultPresence({
        isActor,
        presenceType,
        presenceKey
    })
}

export const getPresenceFromQueryStrings = (isActor) => {
    // If presence from query strings is valid, set in store.
    const
        urlParams = new URLSearchParams(window.location.search),
        presenceType = urlParams.get('type') || '',
        presenceKey = urlParams.get('key') || ''

    return getPresenceOrDefaultPresence({
        isActor,
        presenceType,
        presenceKey
    })
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
        setInStorage(
            `${prefix}Key`, convertPresenceKeyToClassName(presenceKey)
        )
    }
}

export const setPresenceInQueryStrings = ({ presenceType, presenceKey }) => {
    const urlParams = new URLSearchParams(window.location.search)

    urlParams.set('type', presenceType)
    urlParams.set('key', convertPresenceKeyToClassName(presenceKey))

    window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`)
}
