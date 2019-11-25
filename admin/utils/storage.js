import keys from 'lodash/keys'

import {
    getFromStorage,
    setInStorage
} from 'utils/window'

import THING_TYPES from '../constants/things'
import { getSvgMapForThingType } from './svg'

export const getPresenceFromStorage = () => {
    const
        presenceType = getFromStorage('presenceType'),
        presenceKey = getFromStorage('presenceKey')

    return { presenceType, presenceKey }
}

export const getPresenceFromQueryStrings = () => {
    // If presence from query strings is valid, set in store.
    const urlParams = new URLSearchParams(window.location.search),
        presenceType = urlParams.get('type') || '',
        presenceKey = urlParams.get('key') || '',

        svgMapForPresenceType = getSvgMapForThingType(presenceType)

    // Make sure this map exists.
    if (svgMapForPresenceType) {
        const svgForPresenceKey = svgMapForPresenceType[presenceKey]

        // Make sure this svg exists.
        if (svgForPresenceKey) {
            return { presenceType, presenceKey }
        }
    }

    return {
        presenceType: THING_TYPES[0],
        presenceKey: keys(
            getSvgMapForThingType(THING_TYPES[0])
        )[0]
    }
}

export const setPresenceInStorage = ({ presenceType, presenceKey }) => {
    if (presenceType) {
        setInStorage('presenceType', presenceType)
    }
    if (presenceKey) {
        setInStorage('presenceKey', presenceKey)
    }
}

export const setPresenceInQueryStrings = ({ presenceType, presenceKey }) => {
    const urlParams = new URLSearchParams(window.location.search)

    urlParams.set('type', presenceType)
    urlParams.set('key', presenceKey)

    window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`)
}
