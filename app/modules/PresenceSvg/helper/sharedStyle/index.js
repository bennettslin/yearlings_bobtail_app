import isString from 'lodash/isstring'

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
    ANDREW,
    CATHERINE,
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
    WADE,
    BENNETT_REFLECTION,
    BENNETT_LIZ_REFLECTION,
    LIZ_REFLECTION,
    KHARI_LIZ_REFLECTION
} from '../../../../constants/scene/actors'

const STYLED_ACTOR_MAP = {
    [YOUNG_BENNETT]: BENNETT,
    [PRETEEN_BENNETT]: BENNETT,
    [BENNETT]: BENNETT,
    [BENNETT_FATHER]: [BENNETT, FATHER],
    [BENNETT_LIZ]: [BENNETT, LIZ],
    [BENNETT_STEPHANIE]: [BENNETT, STEPHANIE],
    [BENNETTS_CHRISTOPHER_LIZ]: [BENNETT, OLD_BENNETT, CHRISTOPHER, LIZ],
    [OLD_BENNETT]: OLD_BENNETT,
    [ANITA]: ANITA,
    [ANITA_BENNETT]: [ANITA, BENNETT],
    [ESTHER]: ESTHER,
    [ESTHER_MOTHER]: [ESTHER, MOTHER],
    [WILLY]: WILLY,
    [MOTHER]: MOTHER,
    [FATHER]: FATHER,
    [CHRISTOPHER]: CHRISTOPHER,
    [CHRISTOPHER_BENNETT]: [CHRISTOPHER, BENNETT],
    [CHRISTOPHER_BENNETT_WILLY]: [CHRISTOPHER, BENNETT, WILLY],
    [SASHA]: SASHA,
    [SASHA_BENNETT]: [SASHA, BENNETT],
    [BRAD]: BRAD,
    [BRAD_BENNETT]: [BRAD, BENNETT],
    [BRAD_SASHA]: [BRAD, SASHA],
    [ANDREW]: ANDREW,
    [CATHERINE]: CATHERINE,
    [MARA]: MARA,
    [JACOB]: JACOB,
    [JACOB_MARA]: [JACOB, MARA],
    [ANA]: ANA,
    [ANA_HOWIE]: [ANA, HOWIE],
    [HOWIE]: HOWIE,
    [HOWIE_WILLY]: [HOWIE, WILLY],
    [TOMER]: TOMER,
    [LIZ]: LIZ,
    [KHARI]: KHARI,
    [KHARI_LIZ]: [KHARI, LIZ],
    [MIRIAM]: MIRIAM,
    [MIRIAM_BENNETT]: [MIRIAM, BENNETT],
    [MIRIAM_STEPHANIE]: [MIRIAM, STEPHANIE],
    [MIRIAM_TRISTAN]: [MIRIAM, TRISTAN],
    [TRISTAN]: TRISTAN,
    [NESTOR]: NESTOR,
    [AMY]: AMY,
    [AMY_STEPHANIE]: [AMY, STEPHANIE],
    [AMY_NESTOR_TOMER]: [AMY, NESTOR, TOMER],
    [STEPHANIE]: STEPHANIE,
    [WADE]: WADE,
    [BENNETT_REFLECTION]: [BENNETT],
    [BENNETT_LIZ_REFLECTION]: [BENNETT, LIZ],
    [LIZ_REFLECTION]: [LIZ],
    [KHARI_LIZ_REFLECTION]: [KHARI, LIZ]
}

const addStyleToShared = (sharedStyle, addedStyle) => {
    if (!sharedStyle) {
        return addedStyle
    }

    if (isString(sharedStyle)) {
        return [sharedStyle, addedStyle]
    }

    sharedStyle.push(addedStyle)
    return sharedStyle
}

export const getActorStyle = (actor, sharedStyle) => {
    const styledActors = STYLED_ACTOR_MAP[actor]

    // This is the whole actor.
    if (isString(styledActors)) {
        return addStyleToShared(sharedStyle, STYLED_ACTOR_MAP[styledActors])
    }

    // This is a compound actor or reflection.
    return styledActors.reduce((finalStyle, styledActor) => {
        return addStyleToShared(finalStyle, styledActor)
    }, sharedStyle)
}
