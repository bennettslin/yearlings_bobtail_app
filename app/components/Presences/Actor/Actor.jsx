import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import YoungBennett from './Actors/YoungBennett/YoungBennett'
import PreteenBennett from './Actors/PreteenBennett/PreteenBennett'
import Bennett from './Actors/Bennett/Bennett'
// import BennettLiz from './Actors/BennettLiz/BennettLiz'
import BennettsChristopherLiz from './Actors/BennettsChristopherLiz/BennettsChristopherLiz'
import BennettStephanie from './Actors/BennettStephanie/BennettStephanie'
import OldBennett from './Actors/OldBennett/OldBennett'
import Anita from './Actors/Anita/Anita'
import AnitaBennett from './Actors/AnitaBennett/AnitaBennett';
import Esther from './Actors/Esther/Esther'
import EstherMother from './Actors/EstherMother/EstherMother'
import Willy from './Actors/Willy/Willy'
import Mother from './Actors/Mother/Mother'
import Father from './Actors/Father/Father'
import Christopher from './Actors/Christopher/Christopher'
import ChristopherBennett from './Actors/ChristopherBennett/ChristopherBennett'
import Sasha from './Actors/Sasha/Sasha'
import Brad from './Actors/Brad/Brad'
import BradBennett from './Actors/BradBennett/BradBennett'
import BradSasha from './Actors/BradSasha/BradSasha'
import Andrew from './Actors/Andrew/Andrew'
import Catherine from './Actors/Catherine/Catherine'
import Mara from './Actors/Mara/Mara'
import Jacob from './Actors/Jacob/Jacob'
import Ana from './Actors/Ana/Ana'
import AnaHowie from './Actors/AnaHowie/AnaHowie'
import Howie from './Actors/Howie/Howie'
import Tomer from './Actors/Tomer/Tomer'
import Liz from './Actors/Liz/Liz'
import Khari from './Actors/Khari/Khari'
import Miriam from './Actors/Miriam/Miriam'
import Tristan from './Actors/Tristan/Tristan'
import Nestor from './Actors/Nestor/Nestor'
import Amy from './Actors/Amy/Amy'
import AmyStephanie from './Actors/AmyStephanie/AmyStephanie'
import AmyNestorTomer from './Actors/AmyNestorTomer/AmyNestorTomer'
import Stephanie from './Actors/Stephanie/Stephanie'
import Wade from './Actors/Wade/Wade'
import BennettReflection from './Actors/BennettReflection/BennettReflection'
import LizReflection from './Actors/LizReflection/LizReflection'
import KhariReflection from './Actors/KhariReflection/KhariReflection'

import {
    YOUNG_BENNETT,
    PRETEEN_BENNETT,
    BENNETT,
    // BENNETT_LIZ,
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
    SASHA,
    BRAD,
    BRAD_BENNETT,
    BRAD_SASHA,
    ANDREW,
    CATHERINE,
    MARA,
    JACOB,
    ANA,
    ANA_HOWIE,
    HOWIE,
    TOMER,
    LIZ,
    KHARI,
    MIRIAM,
    TRISTAN,
    NESTOR,
    AMY,
    AMY_STEPHANIE,
    AMY_NESTOR_TOMER,
    STEPHANIE,
    WADE,
    BENNETT_REFLECTION,
    LIZ_REFLECTION,
    KHARI_REFLECTION
} from '../../../scene/actorKeys'

const ACTORS_MAP = {
    [YOUNG_BENNETT]: YoungBennett,
    [PRETEEN_BENNETT]: PreteenBennett,
    [BENNETT]: Bennett,
    // [BENNETT_LIZ]: BennettLiz,
    [BENNETTS_CHRISTOPHER_LIZ]: BennettsChristopherLiz,
    [BENNETT_STEPHANIE]: BennettStephanie,
    [OLD_BENNETT]: OldBennett,
    [ANITA]: Anita,
    [ANITA_BENNETT]: AnitaBennett,
    [ESTHER]: Esther,
    [ESTHER_MOTHER]: EstherMother,
    [WILLY]: Willy,
    [MOTHER]: Mother,
    [FATHER]: Father,
    [CHRISTOPHER]: Christopher,
    [CHRISTOPHER_BENNETT]: ChristopherBennett,
    [SASHA]: Sasha,
    [BRAD]: Brad,
    [BRAD_BENNETT]: BradBennett,
    [BRAD_SASHA]: BradSasha,
    [ANDREW]: Andrew,
    [CATHERINE]: Catherine,
    [MARA]: Mara,
    [JACOB]: Jacob,
    [ANA]: Ana,
    [ANA_HOWIE]: AnaHowie,
    [HOWIE]: Howie,
    [TOMER]: Tomer,
    [LIZ]: Liz,
    [KHARI]: Khari,
    [MIRIAM]: Miriam,
    [TRISTAN]: Tristan,
    [NESTOR]: Nestor,
    [AMY]: Amy,
    [AMY_STEPHANIE]: AmyStephanie,
    [AMY_NESTOR_TOMER]: AmyNestorTomer,
    [STEPHANIE]: Stephanie,
    [WADE]: Wade,
    [BENNETT_REFLECTION]: BennettReflection,
    [LIZ_REFLECTION]: LizReflection,
    [KHARI_REFLECTION]: KhariReflection
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    nameKey: PropTypes.string.isRequired,
    instanceKey: PropTypes.string.isRequired,
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
}

const Actor = ({

    className,
    nameKey,
    instanceKey,

...other }) => {

    const ActorComponent = ACTORS_MAP[nameKey]

    return (
        <ActorComponent {...other}
            className={cx(
                'Actor',
                className
            )}
            {...{
                instanceKey
            }}
        />
    )
}

Actor.propTypes = propTypes;

export default Actor
