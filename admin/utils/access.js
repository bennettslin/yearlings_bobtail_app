import findIndex from 'lodash/findindex'
import keys from 'lodash/keys'

import {
    getPreviewerSvgMapForActor,
    getPreviewerSvgMapForThing
} from './svg'

import WHOLE_ACTORS_LIST from '../constants/actors'
import THINGS_LIST from '../constants/things'

import {
    ARROW_UP,
    ARROW_DOWN,
    ARROW_LEFT,
    ARROW_RIGHT
} from 'constants/access'

const accessPresenceType = ({
    isActor,
    keyName,
    presenceType,
    selectPresence
}) => {
    const typesList = isActor ? WHOLE_ACTORS_LIST : THINGS_LIST

    const selectedIndex = findIndex(
        typesList,
        type => type === presenceType
    )

    let direction = 0

    if (keyName === ARROW_UP) {
        direction = typesList.length - 1
    }

    if (keyName === ARROW_DOWN) {
        direction = 1
    }

    const type = typesList[
        (selectedIndex + direction) % typesList.length
    ]

    selectPresence({ type })
}

const accessPresenceKey = ({
    isActor,
    keyName,
    presenceType,
    presenceKey,
    selectPresence
}) => {
    const
        mapGetter = isActor ? getPreviewerSvgMapForActor : getPreviewerSvgMapForThing,
        svgArray = keys(mapGetter(presenceType)),
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
    isActor,
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
            isActor,
            keyName,
            selectPresence,
            presenceType,
            presenceKey
        })
    }
}
