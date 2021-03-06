import { isString } from '../../../../../helpers/general'
import {
    YOUNG_BENNETT,
    PRETEEN_BENNETT,
    BENNETT,
    BENNETT_FATHER,
    BENNETT_LIZ,
    BENNETT_STEPHANIE,
    BENNETTS_CHRISTOPHER_LIZ,
    OLD_BENNETT,
    ANITA,
    ANITA_BENNETT,
    ESTHER,
    ESTHER_MOTHER,
    WILLY,
    MOTHER,
    FATHER,
    CHRISTOPHER,
    CHRISTOPHER_BENNETT,
    CHRISTOPHER_BENNETT_WILLY,
    SASHA,
    SASHA_BENNETT,
    BRAD,
    BRAD_BENNETT,
    BRAD_SASHA,
    MARA,
    JACOB,
    JACOB_MARA,
    ANA,
    ANA_HOWIE,
    HOWIE,
    HOWIE_WILLY,
    TOMER,
    LIZ,
    KHARI,
    KHARI_LIZ,
    MIRIAM,
    MIRIAM_BENNETT,
    MIRIAM_STEPHANIE,
    MIRIAM_TRISTAN,
    TRISTAN,
    NESTOR,
    AMY,
    AMY_STEPHANIE,
    AMY_NESTOR_TOMER,
    STEPHANIE,
    BENNETT_REFLECTION,
    BENNETT_LIZ_REFLECTION,
    LIZ_REFLECTION,
    KHARI_LIZ_REFLECTION,
} from '../../../../../constants/scene/actors'

const STYLED_ACTOR_MAP = {
    [YOUNG_BENNETT]: BENNETT,
    [PRETEEN_BENNETT]: BENNETT,
    [BENNETT_FATHER]: [BENNETT, FATHER],
    [BENNETT_LIZ]: [BENNETT, LIZ],
    [BENNETT_STEPHANIE]: [BENNETT, STEPHANIE],
    [BENNETTS_CHRISTOPHER_LIZ]: [BENNETT, OLD_BENNETT, CHRISTOPHER, LIZ],
    [ANITA_BENNETT]: [ANITA, BENNETT],
    [ESTHER_MOTHER]: [ESTHER, MOTHER],
    [CHRISTOPHER_BENNETT]: [CHRISTOPHER, BENNETT],
    [CHRISTOPHER_BENNETT_WILLY]: [CHRISTOPHER, BENNETT, WILLY],
    [SASHA_BENNETT]: [SASHA, BENNETT],
    [BRAD_BENNETT]: [BRAD, BENNETT],
    [BRAD_SASHA]: [BRAD, SASHA],
    [JACOB_MARA]: [JACOB, MARA],
    [ANA_HOWIE]: [ANA, HOWIE],
    [HOWIE_WILLY]: [HOWIE, WILLY],
    [KHARI_LIZ]: [KHARI, LIZ],
    [MIRIAM_BENNETT]: [MIRIAM, BENNETT],
    [MIRIAM_STEPHANIE]: [MIRIAM, STEPHANIE],
    [MIRIAM_TRISTAN]: [MIRIAM, TRISTAN],
    [AMY_STEPHANIE]: [AMY, STEPHANIE],
    [AMY_NESTOR_TOMER]: [AMY, NESTOR, TOMER],
    [BENNETT_REFLECTION]: BENNETT,
    [BENNETT_LIZ_REFLECTION]: [BENNETT, LIZ],
    [LIZ_REFLECTION]: LIZ,
    [KHARI_LIZ_REFLECTION]: [KHARI, LIZ],
}

const addStyleToSharedStyle = (sharedStyle, addedStyle) => {
    if (!sharedStyle) {
        return addedStyle
    }

    if (isString(sharedStyle)) {
        return [sharedStyle, addedStyle]
    }

    return [...sharedStyle, addedStyle]
}

const getStyledActorOrActors = actor => STYLED_ACTOR_MAP[actor] || actor

export const getCompoundActorStyleIfNeeded = (actor, sharedStyle) => {
    const styledActorOrActors = getStyledActorOrActors(actor)

    // This is the whole actor.
    if (isString(styledActorOrActors)) {
        return addStyleToSharedStyle(
            sharedStyle,
            getStyledActorOrActors(styledActorOrActors),
        )
    }

    // This is a compound actor.
    return styledActorOrActors.reduce((finalStyle, styledActor) => {
        return addStyleToSharedStyle(finalStyle, styledActor)
    }, sharedStyle)
}
