import ACTOR_SVG_MAPS from './actors'
import THING_SVG_MAPS from './things'
import BUTTON_ICONS_MAP from './buttons'
import DOT_ICONS_MAP from './dots'
import { ACTOR } from '../../constants/scene'

export const getSvgMapForActor = actorKey => ACTOR_SVG_MAPS[actorKey]

export const getSvgMapForThing = presenceType => THING_SVG_MAPS[presenceType]

export const getSvgForPresence = ({
    actorKey,
    presenceType,
    presenceKey,

}) => {
    const presencesMap = presenceType === ACTOR ?
        getSvgMapForActor(actorKey) :
        getSvgMapForThing(presenceType)

    return presencesMap[presenceKey]
}

export const getSvgForButton = ({
    buttonName,
    buttonOption,
}) => (
    BUTTON_ICONS_MAP?.[buttonName]?.({ buttonOption })
)

export const getSvgForDot = dotKey => DOT_ICONS_MAP[dotKey]
