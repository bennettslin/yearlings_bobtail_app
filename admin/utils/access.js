import findIndex from 'lodash/findindex'
import keys from 'lodash/keys'

import { getSvgMapForThingType } from './svg'

import THING_TYPES from '../constants/things'

import {
    ARROW_UP,
    ARROW_DOWN,
    ARROW_LEFT,
    ARROW_RIGHT
} from 'constants/access'

const accessPresenceType = ({
    keyName,
    presenceType,
    selectPresence
}) => {
    const selectedIndex = findIndex(
        THING_TYPES,
        type => type === presenceType
    )

    let direction = 0

    if (keyName === ARROW_UP) {
        direction = THING_TYPES.length - 1
    }

    if (keyName === ARROW_DOWN) {
        direction = 1
    }

    const type = THING_TYPES[
        (selectedIndex + direction) % THING_TYPES.length
    ]

    selectPresence({ type })
}

const accessPresenceKey = ({
    keyName,
    presenceType,
    presenceKey,
    selectPresence
}) => {
    const
        svgArray = keys(getSvgMapForThingType(presenceType)),
        selectedIndex = findIndex(
            svgArray,
            key => key === presenceKey
        )

    let direction = 0

    if (keyName === ARROW_LEFT) {
        direction = svgArray.length - 1
    }

    if (keyName === ARROW_RIGHT) {
        direction = 1
    }

    const key = svgArray[
        (selectedIndex + direction) % svgArray.length
    ]

    selectPresence({ key })
}

export const accessPresence = ({
    keyName,
    presenceType,
    presenceKey,
    selectPresence
}) => {
    let accessFunction

    if (keyName === ARROW_UP || keyName === ARROW_DOWN) {
        accessFunction = accessPresenceType
    }

    if (keyName === ARROW_LEFT || keyName === ARROW_RIGHT) {
        accessFunction = accessPresenceKey
    }

    if (accessFunction) {
        accessFunction({
            keyName,
            selectPresence,
            presenceType,
            presenceKey
        })
    }
}
