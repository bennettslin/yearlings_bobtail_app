import youngBennettMap from './YoungBennett'
import preteenBennettMap from './PreteenBennett'
import bennettMap from './Bennett'
import bennettFatherMap from './BennettFather'
import bennettLizMap from './BennettLiz'
import bennettLizReflectionMap from './BennettLizReflection'
import bennettsChristopherLizMap from './BennettsChristopherLiz'
import bennettStephanieMap from './BennettStephanie'
import oldBennettMap from './OldBennett'
import anitaMap from './Anita'
import anitaBennettMap from './AnitaBennett'
import estherMap from './Esther'
import estherMotherMap from './EstherMother'
import willyMap from './Willy'
import motherMap from './Mother'
import fatherMap from './Father'
import christopherMap from './Christopher'
import christopherBennettMap from './ChristopherBennett'
import christopherBennettWillyMap from './ChristopherBennettWilly'
import sashaMap from './Sasha'
import sashaBennettMap from './SashaBennett'
import bradMap from './Brad'
import bradBennettMap from './BradBennett'
import bradSashaMap from './BradSasha'
import andrewMap from './Andrew'
import catherineMap from './Catherine'
import maraMap from './Mara'
import jacobMap from './Jacob'
import jacobMaraMap from './JacobMara'
import anaMap from './Ana'
import anaHowieMap from './AnaHowie'
import howieMap from './Howie'
import howieWillyMap from './HowieWilly'
import tomerMap from './Tomer'
import lizMap from './Liz'
import khariMap from './Khari'
import khariLizMap from './KhariLiz'
import miriamMap from './Miriam'
import miriamBennettMap from './MiriamBennett'
import miriamStephanieMap from './MiriamStephanie'
import miriamTristanMap from './MiriamTristan'
import tristanMap from './Tristan'
import nestorMap from './Nestor'
import amyMap from './Amy'
import amyStephanieMap from './AmyStephanie'
import amyNestorTomerMap from './AmyNestorTomer'
import stephanieMap from './Stephanie'
import wadeMap from './Wade'
import bennettReflectionMap from './BennettReflection'
import lizReflectionMap from './LizReflection'
import khariLizReflectionMap from './KhariLizReflection'

import {
    YOUNG_BENNETT,
    PRETEEN_BENNETT,
    BENNETT,
    BENNETT_FATHER,
    BENNETT_LIZ,
    BENNETT_LIZ_REFLECTION,
    BENNETTS_CHRISTOPHER_LIZ,
    BENNETT_STEPHANIE,
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
    LIZ_REFLECTION,
    KHARI_LIZ_REFLECTION
} from 'constants/scene/actors'

const ACTOR_KEY_MAP = {
    [YOUNG_BENNETT]: youngBennettMap,
    [PRETEEN_BENNETT]: preteenBennettMap,
    [BENNETT]: bennettMap,
    [BENNETT_FATHER]: bennettFatherMap,
    [BENNETT_LIZ]: bennettLizMap,
    [BENNETT_LIZ_REFLECTION]: bennettLizReflectionMap,
    [BENNETTS_CHRISTOPHER_LIZ]: bennettsChristopherLizMap,
    [BENNETT_STEPHANIE]: bennettStephanieMap,
    [OLD_BENNETT]: oldBennettMap,
    [ANITA]: anitaMap,
    [ANITA_BENNETT]: anitaBennettMap,
    [ESTHER]: estherMap,
    [ESTHER_MOTHER]: estherMotherMap,
    [WILLY]: willyMap,
    [MOTHER]: motherMap,
    [FATHER]: fatherMap,
    [CHRISTOPHER]: christopherMap,
    [CHRISTOPHER_BENNETT]: christopherBennettMap,
    [CHRISTOPHER_BENNETT_WILLY]: christopherBennettWillyMap,
    [SASHA]: sashaMap,
    [SASHA_BENNETT]: sashaBennettMap,
    [BRAD]: bradMap,
    [BRAD_BENNETT]: bradBennettMap,
    [BRAD_SASHA]: bradSashaMap,
    [ANDREW]: andrewMap,
    [CATHERINE]: catherineMap,
    [MARA]: maraMap,
    [JACOB]: jacobMap,
    [JACOB_MARA]: jacobMaraMap,
    [ANA]: anaMap,
    [ANA_HOWIE]: anaHowieMap,
    [HOWIE]: howieMap,
    [HOWIE_WILLY]: howieWillyMap,
    [TOMER]: tomerMap,
    [LIZ]: lizMap,
    [KHARI]: khariMap,
    [KHARI_LIZ]: khariLizMap,
    [MIRIAM]: miriamMap,
    [MIRIAM_BENNETT]: miriamBennettMap,
    [MIRIAM_STEPHANIE]: miriamStephanieMap,
    [MIRIAM_TRISTAN]: miriamTristanMap,
    [TRISTAN]: tristanMap,
    [NESTOR]: nestorMap,
    [AMY]: amyMap,
    [AMY_STEPHANIE]: amyStephanieMap,
    [AMY_NESTOR_TOMER]: amyNestorTomerMap,
    [STEPHANIE]: stephanieMap,
    [WADE]: wadeMap,
    [BENNETT_REFLECTION]: bennettReflectionMap,
    [LIZ_REFLECTION]: lizReflectionMap,
    [KHARI_LIZ_REFLECTION]: khariLizReflectionMap
}

export const getMapForActorKey = (actorKey) => {
    return ACTOR_KEY_MAP[actorKey]
}
