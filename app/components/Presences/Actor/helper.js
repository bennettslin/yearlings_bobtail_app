import youngBennettMap from './Actors/YoungBennett'
import preteenBennettMap from './Actors/PreteenBennett'
import bennettMap from './Actors/Bennett'
import bennettFatherMap from './Actors/BennettFather'
import bennettLizMap from './Actors/BennettLiz'
import bennettLizReflectionMap from './Actors/BennettLizReflection'
import bennettsChristopherLizMap from './Actors/BennettsChristopherLiz'
import bennettStephanieMap from './Actors/BennettStephanie'
import oldBennettMap from './Actors/OldBennett'
import anitaMap from './Actors/Anita'
import anitaBennettMap from './Actors/AnitaBennett'
import estherMap from './Actors/Esther'
import estherMotherMap from './Actors/EstherMother'
import willyMap from './Actors/Willy'
import motherMap from './Actors/Mother'
import fatherMap from './Actors/Father'
import christopherMap from './Actors/Christopher'
import christopherBennettMap from './Actors/ChristopherBennett'
import christopherBennettWillyMap from './Actors/ChristopherBennettWilly'
import sashaMap from './Actors/Sasha'
import sashaBennettMap from './Actors/SashaBennett'
import bradMap from './Actors/Brad'
import bradBennettMap from './Actors/BradBennett'
import bradSashaMap from './Actors/BradSasha'
import andrewMap from './Actors/Andrew'
import catherineMap from './Actors/Catherine'
import maraMap from './Actors/Mara'
import jacobMap from './Actors/Jacob'
import jacobMaraMap from './Actors/JacobMara'
import anaMap from './Actors/Ana'
import anaHowieMap from './Actors/AnaHowie'
import howieMap from './Actors/Howie'
import howieWillyMap from './Actors/HowieWilly'
import tomerMap from './Actors/Tomer'
import lizMap from './Actors/Liz'
import khariMap from './Actors/Khari'
import khariLizMap from './Actors/KhariLiz'
import miriamMap from './Actors/Miriam'
import miriamBennettMap from './Actors/MiriamBennett'
import miriamStephanieMap from './Actors/MiriamStephanie'
import miriamTristanMap from './Actors/MiriamTristan'
import tristanMap from './Actors/Tristan'
import nestorMap from './Actors/Nestor'
import amyMap from './Actors/Amy'
import amyStephanieMap from './Actors/AmyStephanie'
import amyNestorTomerMap from './Actors/AmyNestorTomer'
import stephanieMap from './Actors/Stephanie'
import wadeMap from './Actors/Wade'
import bennettReflectionMap from './Actors/BennettReflection'
import lizReflectionMap from './Actors/LizReflection'
import khariLizReflectionMap from './Actors/KhariLizReflection'

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
