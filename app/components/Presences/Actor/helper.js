import youngBennettMap from './Actors/YoungBennett/instanceMap'
import preteenBennettMap from './Actors/PreteenBennett/instanceMap'
import bennettMap from './Actors/Bennett/instanceMap'
import bennettFatherMap from './Actors/BennettFather/instanceMap'
import bennettLizMap from './Actors/BennettLiz/instanceMap'
import bennettLizReflectionMap from './Actors/BennettLizReflection/instanceMap'
import bennettsChristopherLizMap from './Actors/BennettsChristopherLiz/instanceMap'
import bennettStephanieMap from './Actors/BennettStephanie/instanceMap'
import oldBennettMap from './Actors/OldBennett/instanceMap'
import anitaMap from './Actors/Anita/instanceMap'
import anitaBennettMap from './Actors/AnitaBennett/instanceMap'
import estherMap from './Actors/Esther/instanceMap'
import estherMotherMap from './Actors/EstherMother/instanceMap'
import willyMap from './Actors/Willy/instanceMap'
import motherMap from './Actors/Mother/instanceMap'
import fatherMap from './Actors/Father/instanceMap'
import christopherMap from './Actors/Christopher/instanceMap'
import christopherBennettMap from './Actors/ChristopherBennett/instanceMap'
import christopherBennettWillyMap from './Actors/ChristopherBennettWilly/instanceMap'
import sashaMap from './Actors/Sasha/instanceMap'
import sashaBennettMap from './Actors/SashaBennett/instanceMap'
import bradMap from './Actors/Brad/instanceMap'
import bradBennettMap from './Actors/BradBennett/instanceMap'
import bradSashaMap from './Actors/BradSasha/instanceMap'
import andrewMap from './Actors/Andrew/instanceMap'
import catherineMap from './Actors/Catherine/instanceMap'
import maraMap from './Actors/Mara/instanceMap'
import jacobMap from './Actors/Jacob/instanceMap'
import jacobMaraMap from './Actors/JacobMara/instanceMap'
import anaMap from './Actors/Ana/instanceMap'
import anaHowieMap from './Actors/AnaHowie/instanceMap'
import howieMap from './Actors/Howie/instanceMap'
import howieWillyMap from './Actors/HowieWilly/instanceMap'
import tomerMap from './Actors/Tomer/instanceMap'
import lizMap from './Actors/Liz/instanceMap'
import khariMap from './Actors/Khari/instanceMap'
import khariLizMap from './Actors/KhariLiz/instanceMap'
import miriamMap from './Actors/Miriam/instanceMap'
import miriamBennettMap from './Actors/MiriamBennett/instanceMap'
import miriamStephanieMap from './Actors/MiriamStephanie/instanceMap'
import miriamTristanMap from './Actors/MiriamTristan/instanceMap'
import tristanMap from './Actors/Tristan/instanceMap'
import nestorMap from './Actors/Nestor/instanceMap'
import amyMap from './Actors/Amy/instanceMap'
import amyStephanieMap from './Actors/AmyStephanie/instanceMap'
import amyNestorTomerMap from './Actors/AmyNestorTomer/instanceMap'
import stephanieMap from './Actors/Stephanie/instanceMap'
import wadeMap from './Actors/Wade/instanceMap'
import bennettReflectionMap from './Actors/BennettReflection/instanceMap'
import lizReflectionMap from './Actors/LizReflection/instanceMap'
import khariLizReflectionMap from './Actors/KhariLizReflection/instanceMap'

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
