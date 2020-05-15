import { isString } from '../../../../helpers/general'

import youngBennett from './youngBennett'
import preteenBennett from './preteenBennett'
import bennett from './bennett'
import bennettFather from './bennettFather'
import bennettLiz from './bennettLiz'
import bennettStephanie from './bennettStephanie'
import bennettsChristopherLiz from './bennettsChristopherLiz'
import oldBennett from './oldBennett'
import anita from './anita'
import anitaBennett from './anitaBennett'
import esther from './esther'
import estherMother from './estherMother'
import willy from './willy'
import mother from './mother'
import father from './father'
import christopher from './christopher'
import christopherBennett from './christopherBennett'
import christopherBennettWilly from './christopherBennettWilly'
import sasha from './sasha'
import sashaBennett from './sashaBennett'
import brad from './brad'
import bradBennett from './bradBennett'
import bradSasha from './bradSasha'
import andrew from './andrew'
import catherine from './catherine'
import mara from './mara'
import jacob from './jacob'
import jacobMara from './jacobMara'
import ana from './ana'
import anaHowie from './anaHowie'
import howie from './howie'
import howieWilly from './howieWilly'
import tomer from './tomer'
import liz from './liz'
import khari from './khari'
import khariLiz from './khariLiz'
import miriam from './miriam'
import miriamBennett from './miriamBennett'
import miriamStephanie from './miriamStephanie'
import miriamTristan from './miriamTristan'
import tristan from './tristan'
import nestor from './nestor'
import amy from './amy'
import amyStephanie from './amyStephanie'
import amyNestorTomer from './amyNestorTomer'
import stephanie from './stephanie'
import wade from './wade'
import bennettReflection from './bennettReflection'
import bennettLizReflection from './bennettLizReflection'
import lizReflection from './lizReflection'
import khariLizReflection from './khariLizReflection'

import {
    ALL_CLOTHING__SHARED,
    ALL_PEOPLE__SHARED
} from '../../actors'

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

const SHARED_STYLES_MAP = {
    [YOUNG_BENNETT]: youngBennett,
    [PRETEEN_BENNETT]: preteenBennett,
    [BENNETT]: bennett,
    [BENNETT_FATHER]: bennettFather,
    [BENNETT_LIZ]: bennettLiz,
    [BENNETT_STEPHANIE]: bennettStephanie,
    [BENNETTS_CHRISTOPHER_LIZ]: bennettsChristopherLiz,
    [OLD_BENNETT]: oldBennett,
    [ANITA]: anita,
    [ANITA_BENNETT]: anitaBennett,
    [ESTHER]: esther,
    [ESTHER_MOTHER]: estherMother,
    [WILLY]: willy,
    [MOTHER]: mother,
    [FATHER]: father,
    [CHRISTOPHER]: christopher,
    [CHRISTOPHER_BENNETT]: christopherBennett,
    [CHRISTOPHER_BENNETT_WILLY]: christopherBennettWilly,
    [SASHA]: sasha,
    [SASHA_BENNETT]: sashaBennett,
    [BRAD]: brad,
    [BRAD_BENNETT]: bradBennett,
    [BRAD_SASHA]: bradSasha,
    [ANDREW]: andrew,
    [CATHERINE]: catherine,
    [MARA]: mara,
    [JACOB]: jacob,
    [JACOB_MARA]: jacobMara,
    [ANA]: ana,
    [ANA_HOWIE]: anaHowie,
    [HOWIE]: howie,
    [HOWIE_WILLY]: howieWilly,
    [TOMER]: tomer,
    [LIZ]: liz,
    [KHARI]: khari,
    [KHARI_LIZ]: khariLiz,
    [MIRIAM]: miriam,
    [MIRIAM_BENNETT]: miriamBennett,
    [MIRIAM_STEPHANIE]: miriamStephanie,
    [MIRIAM_TRISTAN]: miriamTristan,
    [TRISTAN]: tristan,
    [NESTOR]: nestor,
    [AMY]: amy,
    [AMY_STEPHANIE]: amyStephanie,
    [AMY_NESTOR_TOMER]: amyNestorTomer,
    [STEPHANIE]: stephanie,
    [WADE]: wade,
    [BENNETT_REFLECTION]: bennettReflection,
    [BENNETT_LIZ_REFLECTION]: bennettLizReflection,
    [LIZ_REFLECTION]: lizReflection,
    [KHARI_LIZ_REFLECTION]: khariLizReflection
}

const ALL_SHARED = [
    ALL_CLOTHING__SHARED,
    ALL_PEOPLE__SHARED
]

export const getSharedStyleForActor = ({
    actorKey,
    presenceKey
}) => {
    const sharedStyle = SHARED_STYLES_MAP[actorKey][presenceKey]

    if (!sharedStyle) {
        return [...ALL_SHARED]
    }

    if (isString(sharedStyle)) {
        return [...ALL_SHARED, sharedStyle]
    }

    return [...ALL_SHARED, ...sharedStyle]
}
